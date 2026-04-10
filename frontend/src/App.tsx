import { useEffect } from "react"
import { useAppDispatch } from "./hooks/storeHooks"
import { initFetch } from "./store/initThunks"
import { RatingsOverall } from "./components/RatingsOverall"
import { Ratings } from "./components/Ratings"

function App() {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(initFetch())
    }, [dispatch])

    return (
        <>
            <RatingsOverall />
            <Ratings />
        </>
    )
}

export default App
