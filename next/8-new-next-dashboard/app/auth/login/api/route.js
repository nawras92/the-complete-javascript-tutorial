import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import users from '../../../data/users';

export async function POST(request) {
  const res = await request.json();

  // Get email and password
  if (!res?.email || !res?.password) {
    return NextResponse.json({
      error: 'You must provide email and password',
    });
  }

  // Check if email exists in our db
  const user = users.find((u) => u.email === res.email);
  if (!user) {
    return NextResponse.json({
      error: 'This email is not registered with us.',
    });
  }

  if (res.password === user.password) {
    // Great
    // save login
    cookies().set({
      name: 'loggedIn_user',
      value: JSON.stringify(user),
      httpOnly: true,
      path: '/',
      expires: Date.now() + 30 * 24 * 60 * 60 * 1000,
    });

    return NextResponse.json({
      success: true,
      message: 'You are successfully logged In',
    });
  }
  return NextResponse.json({
    error: 'The provided password is NOT correct',
  });
}
