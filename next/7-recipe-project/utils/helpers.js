export function isLoggedIn() {
  // Check if window is defined
  // if(typeof window !== 'undefined'){
  //   // youre in browser
  // }
  const token = localStorage.getItem('LWNLoginToken');
  return !!token;
}
