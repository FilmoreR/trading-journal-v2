import type { NextApiRequest, NextApiResponse } from 'next';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';

/**
 * API handler function for Firebase database operations
 * @param req - Next.js API request object
 * @param res - Next.js API response object
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method Not Allowed' });

  const { email, password } = req.body;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const token = await userCredential.user.getIdToken();

    return res.status(200).json({
      message: 'Login successful',
      status: true,
      user: {
        uid: userCredential.user.uid,
        email: userCredential.user.email,
        token,
      },
    });
  } catch (error: any) {
    return res.status(401).json({ message: error.message, status: false });
  }
}
