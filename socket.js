import { io } from "socket.io-client";
const socket= io("http://192.168.20.236:8080/");
export default socket;