// app/api/register-token/route.js
import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import FcmToken from '@/models/FcmToken';

export async function POST(req) {
  const { userId, token } = await req.json();

  if (!userId || !token) {
    return NextResponse.json({ message: 'userId and FCM token are required' }, { status: 400 });
  }

  try {
    await dbConnect();

    // Find and update the FCM token for the given userId or create a new record
    let fcmToken = await FcmToken.findOneAndUpdate(
      { userId }, 
      { token }, 
      { new: true, upsert: true } // Create new if doesn't exist
    );

    return NextResponse.json({ message: 'FCM token registered successfully' });
  } catch (err) {
    return NextResponse.json({ message: 'Error registering FCM token', error: err.message }, { status: 500 });
  }
}
