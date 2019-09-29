// Доступ к серверу из локальной сети
const SERVER_URL = "http://192.168.0.100:8090/Server.aspx";
// Доступ из интернета
//const SERVER_URL = 'http://myleancher.ru:8090/Server.aspx'
// Достууп на этом же компьютере, вариант 1
//const SERVER_URL = "http://localhost:53492/Server.aspx";
// Доступ на этом же компьютере, вариант 2
//const SERVER_URL = 'http://localhost:50958/Server.aspx'

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
