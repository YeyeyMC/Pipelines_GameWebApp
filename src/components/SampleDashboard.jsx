import React, { useState, useEffect } from 'react';
import { collection, query, orderBy, limit, onSnapshot } from "firebase/firestore";
import { db } from "../firebase"
import PLOT_PY from './plot.py?raw';

let pyodideReady = null;

function getPyodide() {
    if (!pyodideReady) {
        pyodideReady = (async () => {
            const pyodide = await globalThis.loadPyodide();
            await pyodide.loadPackage(['matplotlib']);
            return pyodide;
        })();
    }
    return pyodideReady;
}

export default function SimpleDashboard() {
    const [status, setStatus] = useState('Idle');
    const [data, setData] = useState([]);
    const [scoresData, setScoresData] = useState([]);

    useEffect(() => {
        const q = query(collection(db, "users"), orderBy("highScore", "desc"), limit(10))

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const dataSnapshot = snapshot.docs.map((doc) => ({
                id: doc.id, ...doc.data(),
            }));

            setData(dataSnapshot);
        })
        return () => unsubscribe();
    }, [])

    useEffect(() => {
        const q = query(collection(db, "scores"), limit(10))

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const dataSnapshot = snapshot.docs.map((doc) => ({
                id: doc.id, ...doc.data(),
            }));

            setScoresData(dataSnapshot);
        })
        return () => unsubscribe();
    }, [])

    useEffect(() => {
        if (data.length === 0) return;

        const runPythonCode = async () => {
            try {
                setStatus('Loading Pyodide :)');
                const pyodide = await getPyodide();

                const payload = {
                    users: data,
                    scores: scoresData
                };

                window.__pyodideData = JSON.stringify(payload);

                setStatus('Running Python :(');
                await pyodide.runPythonAsync(PLOT_PY);

                setStatus('Done');
            } catch (err) {
                console.error('Error, ', err);
                setStatus('Error, check console');
            }
        };

        runPythonCode();
    }, [data]);

    return (
        <div style={{ padding: '20px' }}>
            <h2>Admin Dashboard Graphs</h2>
            <div id="pyodide-target" style={{ border: '1px solid #ccc' }}></div>
        </div>
    );
}