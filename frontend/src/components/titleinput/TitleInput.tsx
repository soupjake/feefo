import { getTitle } from "../../services/titleService"
import * as S from "./TitleInput.styles"
import { useCallback, useState, type ChangeEvent, type FormEvent } from "react"

export const TitleInput = () => {
    const [inputValue, setInputValue] = useState("")
    const [result, setResult] = useState("")
    const [loading, setLoading] = useState(false)

    const handleSubmit = useCallback(
        async (event: FormEvent) => {
            event.preventDefault()

            setLoading(true)
            setResult(await getTitle(inputValue))
            setLoading(false)
        },
        [inputValue]
    )

    const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }, [])

    return (
        <S.Container>
            <S.Form onSubmit={handleSubmit}>
                <S.Input
                    type="text"
                    placeholder="Enter a title..."
                    value={inputValue}
                    onChange={handleChange}
                />
                <S.Button type="submit" disabled={loading || !inputValue}>
                    {loading ? "Normalising..." : "Normalise"}
                </S.Button>
            </S.Form>

            {result ? (
                <S.ResultBox>
                    <p>Normalised title: </p>
                    <p>{result}</p>
                </S.ResultBox>
            ) : null}
        </S.Container>
    )
}
