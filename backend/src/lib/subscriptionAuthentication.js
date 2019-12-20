export default function(cookiesString, key) {
  const cookies = cookiesString.split(";");
  for (let i = 0; i < cookies.length; i++) {
    let part = cookies[i].split("=");
    if (part && part[0].trim() === key) return unescape(part[1].trim());
  }
}
