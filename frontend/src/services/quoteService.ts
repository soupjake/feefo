const baseUrl = "http://localhost:3000/quote"

export const getQuote = async (id: string, lat: number, lng: number) => {
  try {
    const url = `${baseUrl}`
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id, lat, lng })
    })

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`)
    }

    return await response.text()
  } catch (error) {
    console.error(error)
  }

  return []
}
