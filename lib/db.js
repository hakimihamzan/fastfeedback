import app from "./firebase";
import { addDoc, collection, doc, getFirestore, setDoc } from "firebase/firestore";

const db = getFirestore(app);

export function createUser(uid, data) {
    return setDoc(doc(db, 'users', uid), { uid, ...data }, { merge: true })
        .then(() => { console.log("Document set with id: ", uid); })
        .catch(() => { console.log("Error setting the document"); })
}