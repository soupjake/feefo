import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    gap: 2px;
`

export const StarContainer = styled.div`
    position: relative;
    width: 48px;
    height: 48px;
    background-color: #d4d4d4;
    overflow: hidden;
    border-radius: 8px;
`

export const StarFilled = styled.div<{ $width: number }>`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${(props) => props.$width}%;
    background-color: #ffcb31;
    z-index: 1;
`

export const StarIcon = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    display: block;
    pointer-events: none;
    padding: 8px;
    box-sizing: border-box;
`
