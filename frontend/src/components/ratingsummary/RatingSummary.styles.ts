import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    height: 32px;
    width: 100%;
`

export const Score = styled.p`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 1rem;
    font-weight: 600;
    width: 60px;
    flex-shrink: 0;
    color: #333333;
`

export const Count = styled.p`
    font-size: 1rem;
    font-weight: 600;
    width: 60px;
    flex-shrink: 0;
    color: #8A9198;
`

export const StarIcon = styled.img`
    height: 18px;
    width: 18px;
    margin-left: 4px;
    margin-top: -1px;
`

export const ProgressBar = styled.div`
    flex: 1;
    height: 12px;
    background-color: #d4d4d4;
    border-radius: 4px;
    overflow: hidden;
`

export const ProgressBarFill = styled.div<{ $width: number }>`
    height: 100%;
    width: ${(props) => props.$width}%;
    background-color: #ffcb31;
`
