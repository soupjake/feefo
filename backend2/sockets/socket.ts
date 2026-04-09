import { Server, Socket } from "socket.io";
import type { Server as HTTPServer } from "http";
import { sleep } from "../utils/utils";

let io: Server | null = null;

export function initSocket(server: HTTPServer) {
  io = new Server(server, {
    cors: {
      origin: "*",
    },
  });

  io.on("connection", (socket: Socket) => {
    if (io) {
      console.log("Socket connected:", socket.id)

      socket.on("requestRide", async (id: string) => {
        console.log("Driver search started");

        io!.emit("ride_update", "searching");

        console.log(`Contacting driver ${id}`)

        await sleep(500)

        io!.emit("ride_update", "driver accepted");
      });
    }
  });

  console.log("Socket.IO initialized")
};

