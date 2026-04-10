const baseUrl = "http://localhost:3000/title"

export const getTitle = async (input: string) => {
    try {
        const url = `${baseUrl}?name=${input}`
        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`)
        }

        const { result, score } = await response.json()

        console.log(`Title score: ${score}`)
        console.log(`Title result: ${result}`)

        return result
    } catch (error) {
        console.error(error)
    }

    return "Error"
}
