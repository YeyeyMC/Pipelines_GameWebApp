import { useEffect, useState } from "react"
import { doc, onSnapshot } from "firebase/firestore"
import { db, auth } from "../firebase"
import { getIdTokenResult, signOut } from "firebase/auth";

import GamePortal from "./GamePortal.jsx"
import PlayerInformation from "./PlayerInformation.jsx"
import Leaderboard from "./LeaderBoard.jsx"
import AdminDashboard from "./AdminDashboard.jsx"
import SimpleDashboard from "./SampleDashboard.jsx"

export default function View({ user }) {
    const [userData, setUserData] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const userRef = doc(db, "users", user.uid);
        const unsubscribe = onSnapshot(userRef, (snapshot) => {

            if (snapshot.exists()) {
                setUserData(snapshot.data());
            }
        });

        return () => unsubscribe();
    }, [user.uid]);

    const checkIfAdmin = async () => {
        if (!user) return false;
        const tokenResult = await getIdTokenResult(user, true);
        return tokenResult.claims.admin === true;
    }

    useEffect(() => {
        const loadAdminRole = async () => {
            const admin = await checkIfAdmin();
            setIsAdmin(admin);
        };

        loadAdminRole();
    }, [user]);

    const handleSignOut = async () => {
        try {
            await signOut(auth);
        } catch (err) {
            console.log("Sign out error", err);
        }
    }

	return (
        <>
            <button onClick={handleSignOut} className="btn-signout">Sign Out</button>

            {isAdmin ? <SimpleDashboard /> : <PlayerInformation userData={userData} />}
            {!isAdmin && <GamePortal user={user} />}
            {!isAdmin && <Leaderboard />}
		</>
	)
}