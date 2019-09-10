import { getServerResponse } from "../Utilites/serverResponse";

export const buildReqStr = (
  command,
  cat = "",
  subCat = "",
  album = "",
  note = ""
) => {
  return `Command=${command}&cat=${cat}&subCat=${subCat}&album=${album}&note=${note}`;
};

// Асинхронное действие. Вызывается в несколько этапов. Вызываем
// действие REQUEST_SEND, делаем запрос HTTP.
// Затем по результатам запроса через промис происходит соответствующее
// действие.
export const asyncActionCreator = (dispatch, requestString, type) => {
  // Вызываем действие и сбрасываем состояние
  dispatch({
    type: type.RESET
  });
  // Вызываем действие и сообщаем, что собираемся делать запрос
  dispatch({
    type: type.SEND
  });
  return getServerResponse(requestString)
    .then(response => {
      // При удачном ответе, вызываем действие в соответствии с запросом
      dispatch({
        type: type.SUCCESS,
        payload: response
      });
    })
    .catch(error => {
      // При неудачном - вызываем действие для ошибки
      dispatch({
        type: type.FAIL,
        payload: error
      });
    });
};
