import styled from "styled-components"

export const Button = styled.button`
  outline: transparent;
  cursor: pointer;
  border: none;
  border-radius: 50px;
  width: 30px;
  height: 29px;
  outline: transparent;
  font-size: 12px;
  color: #ebecf0;
  background-color: #99eeee;
  background-color: rgba(153, 238, 238, 0.4);

  &: focus,
  &: hover,
  &: active {
    background-color: rgba(153, 221, 221, 0.7);
  }
`

export const Form = styled.form`
  display: flex;
  gap: 18px;
  justify-content: center;
  align-items: center;
`

export const Input = styled.input`
  width: 630px;
  height: 49px;
  border-radius: 30px;

  font-size: 14px;
  font-weight: 500;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 20px;
  padding-right: 20px;
  outline: transparent;
  border: none;
  color: #ebecf0;
  background-color: #99eeee;
  background-color: rgba(153, 238, 238, 0.4);

  &: focus,
  &: hover,
  &: active {
    background-color: #99dddd;
    background-color: rgba(153, 221, 221, 0.6);
  }
`
