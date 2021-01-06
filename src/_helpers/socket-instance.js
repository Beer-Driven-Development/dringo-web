import io from "socket.io-client";

let socket = undefined;

function initialiseSocket() {
  socket = io(`${process.env.VUE_APP_API_URL}`);
}

export function addEventListener(event) {
  if (!socket) {
    initialiseSocket();
  }

  socket.on(event.type, event.callback);
}

export function sendEvent(event) {
  socket.emit(event.type, event.data);
}
