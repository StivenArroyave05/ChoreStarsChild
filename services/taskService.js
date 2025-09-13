// src/services/taskService.js
import { collection, addDoc, query, where, onSnapshot, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase.js';

export async function addTask(data) {
  await addDoc(collection(db, 'tasks'), {
    ...data,
    done: false,
    penalized: false,
    createdAt: serverTimestamp()
  });
}

export function watchTasks(familyCode, callback) {
  const q = query(collection(db, 'tasks'), where('familyCode', '==', familyCode));
  return onSnapshot(q, snap => {
    const tasks = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    callback(tasks);
  });
}
