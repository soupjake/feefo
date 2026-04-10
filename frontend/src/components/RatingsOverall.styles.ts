import Rate from "antd/es/rate"
import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 8px;
    padding: 16px;
`

export const Label = styled.p`
    font-weight: 700;
    font-size: 1.1rem;
    margin: 0;
    text-transform: uppercase;
    color: #333333;
`

export const ScoreText = styled.p`
    font-weight: 600;
    margin: 0;
    color: #646c76;
`

export const Rating = styled.div`
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    font-weight: 600;
    color: #646c76;
`

export const Logo = styled.img`
    display: block;
    margin-top: -10px;
    margin-left: -8px;
`
export const StyledRate = styled(Rate)`
    font-size: 40px;

    .ant-rate-star-full svg,
    .ant-rate-star-half .ant-rate-star-first svg {
        fill: #ffc20e !important;
    }

    .ant-rate-star-second svg,
    .ant-rate-star-first svg {
        fill: #d8d8d8;
    }

    .ant-rate-star:not(:last-child) {
        margin-inline-end: 8px;
    }
`
