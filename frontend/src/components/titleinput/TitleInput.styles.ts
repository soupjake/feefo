import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 32px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
    width: 400px;
`;

export const Input = styled.input`
  padding: 10px;
  border: 2px solid #d4d4d4;
  border-radius: 6px;
  font-size: 16px;
  outline: none;
  &:focus { border-color: #ffcb31; }
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #ffcb31;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  &:disabled { background-color: #eee; cursor: not-allowed; }
`;

export const ResultBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  padding: 15px;
  border-radius: 6px;
  background-color: #f9f9f9;
  border-left: 4px solid #ffcb31;
`;