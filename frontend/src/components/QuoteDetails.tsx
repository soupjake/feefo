import { useAppSelector } from "../hooks/storeHooks"
import { selectUserQuote, selectUserLoading } from "../store/user/userSelectors"

export const QuoteDetails = () => {
    const quote = useAppSelector(selectUserQuote)
    const loading = useAppSelector(selectUserLoading)

    if (loading) {
        return <p>Loading quote...</p>
    }

    return <p>{`Quote: ${quote}`}</p>
}