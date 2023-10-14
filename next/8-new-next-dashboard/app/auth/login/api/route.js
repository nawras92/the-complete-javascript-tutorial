import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { backendUrl } from '../../../website-config';
// import users from '../../../data/users';

export async function POST(request) {
  const res = await request.json();

  // Get email and password
  if (!res?.email || !res?.password) {
    return NextResponse.json({
      error: 'You must provide email and password',
    });
  }
  const response = await fetch(backendUrl + '/api/login.php', {
    method: 'POST',
    body: JSON.stringify(res),
  });

  const result = await response.json();
  //{"status":"error","message":"Invalid Request Method","data":null,"error":{"code":405,"message":"Only POST REQUESTS are accepted for login"}}
  if (result['status'] === 'success') {
    // save login in cookies
    cookies().set({
      name: 'lwn_nextjs_dashboard_logged_in_token',
      value: result?.data,
      httpOnly: true,
      path: '/',
      expires: Date.now() + 30 * 24 * 60 * 60 * 1000,
    });
    return NextResponse.json({
      ok: true,
      data: result['data'], // Login Token
      message: result['message'],
    });
  }
  if (result?.error?.code === 422) {
    return NextResponse.json({
      ok: false,
      code: result?.error?.code,
      message: Object.values(result?.error?.message).join('. '),
    });
  }
  return NextResponse.json({
    ok: false,
    code: result?.error?.code,
    message: result?.error?.message,
  });
}
