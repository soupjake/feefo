import { Driver } from "../types/driver"

export function getRandomStatus() {
  const statuses = ["available", "busy", "offline"]
  return statuses[Math.floor(Math.random() * statuses.length)]
}

function toRad(value: number) {
    return (value * Math.PI) / 180
}

export function calculateDistance(driver: Driver, lat: number, lng: number) {
  const R = 6371 // Earth's radius in km

  const dLat = toRad(lat - driver.lat)
  const dLon = toRad(lng - driver.lng)

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(driver.lat)) * Math.cos(toRad(lat)) *
    Math.sin(dLon / 2) ** 2

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

  return R * c
}

export function calculateTime(distance: number) {
  const averageSpeeed = 30
  return distance / averageSpeeed
}

export function calculateQuote(distance: number, time: number) {
  const baseRate = 1.50
  const pricePerKm = 0.80
  const pricePerMin = 0.15

  return baseRate + (distance * pricePerKm) + (time * pricePerMin)
}

export function sleep(time: number) {
  return new Promise((resolve) => setTimeout(resolve, time))
}
