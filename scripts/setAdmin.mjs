import { initializeApp, cert } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import serviceAccount from "../serviceAccountKey.json" with { type: "json" };

initializeApp({
    credential: cert(serviceAccount),
});

const uid = "HvLSNtZzrEcx2WdflqqdRxqhoSu1";

async function makeAdmin() {
    try {
        await getAuth().setCustomUserClaims(uid, { admin: true });
        const user = await getAuth().getUser(uid);
        console.log(`Diana is admin ${user}`);
    } catch (e) {
        console.error("Error to assign claims", e)
    }
}

makeAdmin();