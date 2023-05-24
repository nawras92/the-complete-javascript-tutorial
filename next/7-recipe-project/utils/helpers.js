export function isLoggedIn() {
  // Check if window is defined
  // if(typeof window !== 'undefined'){
  //   // youre in browser
  // }
  const token = localStorage.getItem('LWNLoginToken');
  return !!token;
}

// Format Date
export function formatDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}
