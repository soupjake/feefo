import express from "express";
import cors from "cors"
import http from "http"
import { health } from "./routes/health";
import { driver } from "./routes/driver";
import { connectDB } from "./db";
import { quote } from "./routes/quote";
import { initSocket } from "./sockets/socket";

const app = express()
const port = 3000

const server = http.createServer(app)
initSocket(server)

app.use(cors())
app.use(express.json())
app.use("/health", health)
app.use("/driver", driver)
app.use("/quote", quote)

async function start() {
  connectDB()

  server.listen(port, () => {
    console.log(`Server running on port ${port}`)
  });
}

start()

