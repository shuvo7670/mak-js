localStorage.setItem("username", "shakib");
localStorage.setItem("password", "123456");
const username = localStorage.getItem("username");
const password = localStorage.getItem("password");
const colorScheme = localStorage.getItem("colorScheme");

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}


document.cookie = "username=shakib; expires=Thu, 18 Dec 2026 12:00:00 UTC; path=/";
const get_cookie = getCookie("username")
console.log(get_cookie);