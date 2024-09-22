// app/api/send-notification/route.js
import { NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import FcmToken from '@/models/FcmToken';
import admin from 'firebase-admin';

const serviceAccount = require('../../firebase.json');

// Initialize Firebase Admin SDK if not already initialized
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export async function POST(req) {
  const { userId, title, body, image, actions } = await req.json(); // Accept userId from request

  if (!userId || !title || !body) {
    return NextResponse.json({ message: 'userId, title, and body are required' }, { status: 400 });
  }

  try {
    await dbConnect();

    // Retrieve the FCM token for the given userId from MongoDB
    const fcmTokenRecord = await FcmToken.findOne({ userId });

    if (!fcmTokenRecord || !fcmTokenRecord.token) {
      return NextResponse.json({ message: 'No FCM token found for the user' }, { status: 404 });
    }

    const token = fcmTokenRecord.token;

    const message = {
      token: token,
      notification: {
        title: title,
        body: body,
      },
      android: {},
      apns: {
        payload: {
          aps: {},
        },
      },
      webpush: {},
    };

    // Add image if provided
    if (image) {
      message.notification.image = image;
    }

    // Add action buttons if provided
    if (actions && actions.length > 0) {
      message.android.notification = {
        click_action: actions[0].action, // Customize the action
      };
      message.apns.payload.aps = {
        category: 'ACTIONABLE',
      };
      message.webpush = {
        fcm_options: {
          actions: actions.map((action) => ({
            action: action.action,
            title: action.title,
          })),
        },
      };
    }

    // Send FCM message
    const response = await admin.messaging().send(message);
    return NextResponse.json({ message: 'Notification sent successfully', response });
  } catch (err) {
    return NextResponse.json({ message: 'Error sending notification', error: err.message }, { status: 500 });
  }
}
