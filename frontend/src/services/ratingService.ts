const baseUrl = "http://localhost:3000/rating"

export const getRatings = async () => {
    try {
        const response = await fetch(baseUrl, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`)
        }

        return await response.json()
    } catch (error) {
        console.error(error)
    }

    return []
}
