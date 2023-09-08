import styled from "styled-components"

export const Li = styled.li``

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 212px;
  height: 370px;
  margin-bottom: 15px;
  margin-top: 15px;
padding: 4px;
  &: focus,
  &: hover,
  &: active {
    background-color: rgba(153, 221, 221, 0.7);
    border-radius: var(--border-radius);
  }
`

export const Img = styled.img`
  display: block;
  padding: 2px;
  border-radius: var(--border-radius);
  margin-bottom: 5px;
`

export const H2 = styled.h2`
  font-size: 18px;
  font-weight: 500;
  text-align: center;
`
