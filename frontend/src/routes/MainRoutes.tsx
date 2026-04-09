import { Route, Routes } from "react-router-dom"
import App from "../App"
import { Driver } from "../components/Driver"

export const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/driver/:id" element={<Driver />} />
        </Routes>
    )
}