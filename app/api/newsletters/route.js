import { emailRegex } from '../../../lib/utils/regex';
import { prisma } from '../../../lib/prisma';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email || !emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }
    const existingSubscriber = await prisma.newsletter.findUnique({
      where: { email },
    });
    if (existingSubscriber) {
      return NextResponse.json({ error: 'Email already subscribed' }, { status: 400 });
    }
    await prisma.newsletter.create({
      data: { email },
    });
    return NextResponse.json({ message: 'Subscription successful' }, { status: 200 });
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
