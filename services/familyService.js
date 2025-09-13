// src/services/familyService.js
import { doc, setDoc, serverTimestamp, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase.js';

// Crea una familia (usado en registerParent)
export async function createFamily(uid, locale) {
  const code = generateFamilyCode();
  await setDoc(doc(db, 'families', code), {
    parentUid: uid,
    createdAt: serverTimestamp(),
    familyCode: code,
    locale
  });
  return code;
}

// Listener real-time de settings de familia
export function watchFamilySettings(code, callback) {
  return onSnapshot(doc(db, 'families', code), snap => {
    if (snap.exists()) callback(snap.data());
  });
}

// (Puedes exportar aquí también generateFamilyCode)
function generateFamilyCode() {
  return Math.random().toString(36).substring(2, 7).toUpperCase();
}
