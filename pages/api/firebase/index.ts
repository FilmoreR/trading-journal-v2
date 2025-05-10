// Import required Next.js and Firebase types and functions
import type { NextApiRequest, NextApiResponse } from 'next';
import { database } from '@/lib/firebase';
import { ref, get } from 'firebase/database';

/**
 * API handler function for Firebase database operations
 * @param req - Next.js API request object
 * @param res - Next.js API response object
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Create a reference to the database path
  const dbRef = ref(database, process.env.FIREBASE_DB_REFERENCE); // replace with your real path

  try {
    // Attempt to fetch data from Firebase
    const snapshot = await get(dbRef);
    
    // Check if data exists in the snapshot
    if (snapshot.exists()) {
      // Return the data with 200 status if found
      res.status(200).json(snapshot.val());
    } else {
      // Return 404 if no data exists at the specified path
      res.status(404).json({ error: 'No data found' });
    }
  } catch (error) {
    // Log any errors that occur during the operation
    console.error(error);
    // Return 500 status code for server errors
    res.status(500).json({ error: 'Server error' });
  }
}
