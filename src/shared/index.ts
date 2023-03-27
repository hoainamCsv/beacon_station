import { Firestore, getFirestore } from "firebase-admin/firestore";

export const shared = {
    io: null,
    db: new Firestore()
}
