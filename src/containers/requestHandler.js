const SERVER_URL = "http://192.168.0.100:8090/Server.aspx";

function httpGet(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onload = () => resolve(xhr.responseText);
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });
}

export const serverRequest = (
  command,
  cat = "",
  subCat = "",
  album = "",
  note = ""
) => {
  return httpGet(
    SERVER_URL +
      "?Command=" +
      command +
      "&cat=" +
      cat +
      "&subCat=" +
      subCat +
      "&album=" +
      album +
      "&note=" +
      note
  );
};
