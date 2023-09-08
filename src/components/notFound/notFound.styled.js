import styled from "styled-components"

export const ErrorWrap = styled.div`
  margin-top: 50px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`

export const ErrorText = styled.h1`
  font-size: 20px;
  background-color: var(--section-background);
  border-radius: var(--border-radius);
  padding: 20px;
  color: var(--text-color);
`
export const Button = styled.button`
  outline: transparent;
  cursor: pointer;
  border: none;
  border-radius: var(--border-radius);
  width: 90px;
  min-height: 40px;
  padding: 10px;
  font-size: 12px;
  background-color: var(--section-background);
  margin-bottom: 20px;
  margin-top: 20px;
  text-align: center;
  align-items: center;

  &: focus,
  &: hover,
  &: active {
    background-color: rgba(153, 221, 221, 0.6);
  }
`
