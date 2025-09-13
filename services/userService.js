// src/services/userService.js
import { doc, setDoc, serverTimestamp, collection, query, where, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase.js';

// Guarda perfil de usuario (padre o hijo)
export async function saveUser(uid, displayName, role, familyCode) {
  await setDoc(doc(db, 'users', uid), {
    displayName,
    role,
    familyCode,
    joinedAt: serverTimestamp()
  });
}

// Listener real-time de todos los miembros de la familia
export function watchFamilyUsers(familyCode, callback) {
  const q = query(collection(db, 'users'), where('familyCode', '==', familyCode));
  return onSnapshot(q, snap => {
    const users = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    callback(users);
  });
}
