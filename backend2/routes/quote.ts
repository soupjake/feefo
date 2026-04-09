import { Router } from "express"
import { getAvailableDrivers } from "../db"
import { calculateDistance, calculateQuote, calculateTime, sleep } from "../utils/utils";

export const quote = Router()

quote.post('/', async (req, res) => {
  try {
    console.info(req.body)

    if (!req?.body) {
        res.status(400).send({ error: "Missing body in request" })
        return
    }

    const { lat, lng } = req.body;

    if (!lat || !lng) {
        res.status(400).send({ error: "Invalid body in request" })
        return
    }

    const drivers = getAvailableDrivers()

    console.info(drivers)

    if (!drivers.length) {
        res.status(404).send({ error: `No available drivers found` })
        return
    }

    let nearestDriver = drivers[0]
    let nearestDriverDistance = 0

    for (const driver of drivers) {
        const distance = calculateDistance(driver, lat, lng)
        const nearestDistance = calculateDistance(nearestDriver, lat, lng)

        if (distance < nearestDistance) {
            nearestDriver = driver
            nearestDriverDistance = distance
        }
    }

    const time = calculateTime(nearestDriverDistance)
    const quote = calculateQuote(nearestDriverDistance, time)
    const price = `£${quote.toFixed(2)}`

    console.info(`Price: ${price}`)

    await sleep(1000);
    
    res.status(200).send(price)
  } catch (e) {
    console.log(e);
    res.status(500).send({ error: e })
  }
});