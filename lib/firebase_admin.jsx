export const admin = require("firebase-admin");
import fs from "fs";

const serviceAccount = JSON.parse(fs.readFileSync("serviceAccountKey.json", "utf8"));

if (admin.apps.length === 0) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export const adminDB = admin.firestore();