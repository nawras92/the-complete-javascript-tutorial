import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET() {
  cookies().delete('lwn_nextjs_dashboard_logged_in_token');
  return NextResponse.json({
    message: 'You logged out successfully',
  });
}
