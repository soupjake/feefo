const baseUrl = "http://localhost:3000/driver"

export const getDrivers = async () => {
  try {
    const response = await fetch(baseUrl)

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error(error)
  }

  return []
}

export const getDriver = async (id: string) => {
  try {
    const url = `${baseUrl}/${id}`
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error(error)
  }

  return []
}
