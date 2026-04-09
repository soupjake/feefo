import Database from "better-sqlite3";
import { v4 as uuid } from "uuid";
import { Driver } from "./types/driver";
import { getRandomStatus } from "./utils/utils";

const db = new Database(':memory:')

export function connectDB() {
  db.prepare(`
    CREATE TABLE IF NOT EXISTS drivers (
      id TEXT PRIMARY KEY,
      name TEXT,
      lat REAL,
      lng REAL,
      status TEXT
    )
  `).run()

  console.log("Created driver table")
  seedData()
}

function seedData() {
  const baseLat = 51.481583
  const baseLng = -3.179090

  const insert = db.prepare(`
    INSERT INTO drivers (id, name, lat, lng, status)
    VALUES (?, ?, ?, ?, ?)
  `)

  for (let i = 0; i < 10; i++) {
    insert.run(
      uuid(),
      `Driver ${i + 1}`,
      baseLat + Math.random() / 100,
      baseLng + Math.random() / 100,
      getRandomStatus()
    )
  }

  console.log("Seeded drivers")
}

export function getAvailableDrivers() {
  const select = db.prepare(`
    SELECT * FROM drivers WHERE status = 'available'
  `)

  return select.all() as Driver[]
}

export function getDriver(id: string) {
  const select = db.prepare(`
    SELECT * FROM drivers WHERE id = ?
  `)

  return select.get(id) as Driver | undefined
}