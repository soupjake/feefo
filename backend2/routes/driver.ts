import { Router } from "express"
import { getAvailableDrivers, getDriver } from "../db"

export const driver = Router()

driver.get('/', (req, res) => {
  try {
    const drivers = getAvailableDrivers()

    if (!drivers.length) {
        res.status(404).send({ error: "No available drivers" })
        return
    }
    
    res.status(200).send(drivers)
  } catch (e) {
    console.log(e);
    res.status(500).send({ error: e })
  }
});

driver.get('/:id', (req, res) => {
  try {
    console.info(req.params)

    if (!req?.params?.id) {
        res.status(400).send({ error: "Missing id in request" })
        return
    }

    const { id } = req.params;

    console.info(id)

    if (!id) {
        res.status(400).send({ error: "Invalid id in request" })
        return
    }

    const driver = getDriver(id)

    if (!driver) {
        res.status(404).send({ error: `No driver found with id: ${id}` })
        return
    }
    
    res.status(200).send(driver)
  } catch (e) {
    console.log(e);
    res.status(500).send({ error: e })
  }
});

driver.post('/nearest', (req, res) => {
  try {
    const drivers = getAvailableDrivers()


    if (!drivers.length) {
        res.status(404).send({ error: "No available drivers" })
        return
    }
    
    res.status(200).send(drivers)
  } catch (e) {
    console.log(e);
    res.status(500).send({ error: e })
  }
});