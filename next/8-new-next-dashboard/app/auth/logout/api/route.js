import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET() {
  cookies().delete('loggedIn_user');
  return NextResponse.json({
    message: 'You logged out successfully',
  });
}
