const SERVER_URL = "http://192.168.0.100:8090/Server.aspx";

export const getServerResponse = requestString => {
  const url = SERVER_URL + "?" + requestString;
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onload = () => resolve(xhr.responseText);
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });
};
