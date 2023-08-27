import styled from "styled-components"

export const Section = styled.section`
  display: flex;
  justify-content: top center;
  flex-direction: column;
  gap: 40px;
  margin-top: 40px;
  margin-bottom: 40px;
  min-height: 530px;
`

export const Form = styled.form`
display: flex;
justify-content: center;`

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

export const Wrapper = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;


  margin-bottom: 40px;
  margin-left: auto;
  margin-right: auto;
  max-width: 980px;
  height: 100%;
  background-color: #99eeee;
  background-color: rgba(153, 238, 238, 0.2);
  border-radius: 20px;
`

export const MovieList = styled.ul`
  padding: 0px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  max-width: 984px;
  justify-content: center;
  gap: 32px;
  margin: 0;
`