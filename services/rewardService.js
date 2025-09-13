// src/services/rewardService.js
import { collection, addDoc, updateDoc, doc, arrayUnion, query, where, onSnapshot, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase.js';

export async function addReward(reward) {
  await addDoc(collection(db, 'rewards'), {
    ...reward,
    redeemedBy: [],
    createdAt: serverTimestamp()
  });
}

export async function redeemReward(rewardId, childUid) {
  await updateDoc(doc(db, 'rewards', rewardId), {
    redeemedBy: arrayUnion(childUid)
  });
}

export function watchRewards(familyCode, callback) {
  const q = query(collection(db, 'rewards'), where('familyCode', '==', familyCode));
  return onSnapshot(q, snap => {
    const rewards = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    callback(rewards);
  });
}
