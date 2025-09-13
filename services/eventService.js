// src/services/eventService.js
import { collection, addDoc, query, where, onSnapshot, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase.js';

export async function addEvent(event) {
  await addDoc(collection(db, 'events'), {
    ...event,
    createdAt: serverTimestamp()
  });
}

export function watchEvents(familyCode, callback) {
  const q = query(collection(db, 'events'), where('familyCode', '==', familyCode));
  return onSnapshot(q, snap => {
    const events = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    callback(events);
  });
}
