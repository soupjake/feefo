export type Driver = {
    id: string
    name: string
    lat: number
    lng: number
    status: "available" | "busy" | "offline"
}
