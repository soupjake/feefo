import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    height: 32px;
    width: 100%;
`

export const Score = styled.p`
    font-size: 1rem;
    width: 60px;
    flex-shrink: 0;
    color: #333333;
    text-align: right;
`

export const StarIcon = styled.img`
    height: 18px;
    width: 18px;
    margin-left: 2px;
`

export const Count = styled.p`
    font-size: 1rem;
    width: 60px;
    flex-shrink: 0;
    color: #d4d4d4;
    text-align: left;
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
