import { NextResponse } from 'next/server';
import { backendUrl } from '../../website-config';

export async function GET(request) {
  // Get token from cookies
  const tokenCookie = request.cookies.get(
    'lwn_nextjs_dashboard_logged_in_token'
  );
  // name , value
  const token = tokenCookie?.value;
  const headers = new Headers({
    Authorization: `Bearer ${token}`,
  });
  //  request who am i
  const response = await fetch(backendUrl + '/api/whoami.php', {
    method: 'GET',
    headers,
  });
  const result = await response.json();
  if (result['status'] === 'success') {
    return NextResponse.json({
      ok: true,
      data: result?.data,
    });
  } else {
    return NextResponse.json({
      ok: false,
      code: result?.error?.code,
      message: `Backend Error(${result?.error?.code}): ${result?.error?.message} `,
    });
  }
}
