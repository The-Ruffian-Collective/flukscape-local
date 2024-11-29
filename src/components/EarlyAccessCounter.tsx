import { useState, useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';

export function EarlyAccessCounter() {
  const [spotsLeft, setSpotsLeft] = useState<number | null>(null);
  const TOTAL_SPOTS = 100;

  useEffect(() => {
    // Set up real-time listener for waitlist collection
    const unsubscribe = onSnapshot(collection(db, 'waitlist'), (snapshot) => {
      const signupsCount = snapshot.size;
      setSpotsLeft(Math.max(0, TOTAL_SPOTS - signupsCount));
    }, (error) => {
      console.error('Error listening to waitlist:', error);
      setSpotsLeft(TOTAL_SPOTS);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  if (spotsLeft === null) return null;

  return (
    <div className="flex flex-col items-center space-y-2 bg-gradient-to-br from-yellow-400/15 to-yellow-400/5 p-4 rounded-lg border border-yellow-400/20">
      <div className="text-2xl font-bold text-black">
        {spotsLeft} spots remaining
      </div>
      <div className="text-sm font-medium text-gray-700 text-center">
        {spotsLeft < 20 ? (
          "⭐️ Hurry! Early access spots are almost gone"
        ) : (
          "✨ Limited early access spots available"
        )}
      </div>
      <div className="w-full bg-yellow-400/20 rounded-full h-2">
        <div 
          className="bg-yellow-400 h-2 rounded-full transition-all duration-1000"
          style={{ width: `${(spotsLeft / TOTAL_SPOTS) * 100}%` }}
        />
      </div>
    </div>
  );
}
