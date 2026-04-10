import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    height: 32px;
`

export const ProgressBar = styled.div`
  width: 320px;
  height: 12px;
  background-color: #D4D4D4;
  border-radius: 2px;
  overflow: hidden;
`

export const ProgressBarFill = styled.div<{ $width: number }>`
  height: 100%;
  width: ${(props) => props.$width}%;
  background-color: #FFCB31;
`