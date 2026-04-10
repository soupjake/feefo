import { useEffect } from "react"
import { useAppDispatch } from "./hooks/storeHooks"
import { initFetch } from "./store/initThunks"
import { RatingsOverall } from "./components/ratingsoverall/RatingsOverall"
import { Ratings } from "./components/ratings/Ratings"
import { TitleInput } from "./components/titleinput/TitleInput"

function App() {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(initFetch())
    }, [dispatch])

    return (
        <>
            <RatingsOverall />
            <Ratings />
            <TitleInput />
        </>
    )
}

export default App
