import * as admin from "firebase-admin";
import * as dotenv from "dotenv";

dotenv.config();

import serviceAccount from "./google-services.json";

if (!process.env.FIREBASE_STORAGE_BUCKET || !process.env.FIREBASE_API_KEY) {
    throw new Error("FIREBASE_STORAGE_BUCKET ou FIREBASE_API_KEY não definido no .env");
}

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
});

const bucket = admin.storage().bucket();

export { admin, bucket };
