import styled from "styled-components"

export const Wrapper = styled.div`
  width: 1200px;
  padding: 40px;
  display: flex;
  gap: 40px;

  margin-top: 40px;
  margin-bottom: 40px;
  margin-left: auto;
  margin-right: auto;
  max-width: 980px;
  height: 100%;
  background-color: #99eeee;
  background-color: rgba(153, 238, 238, 0.2);
  border-radius: 20px;
`

export const Title = styled.h1`margin: 0;
         font-size: 34px;
         color: #ffffff;
         font-weight: 500;
         text-shadow: 3px 4px 7px rgba(81, 67, 21, 0.8);`

export const Img = styled.img`
  display: block;
  border-radius: 20px;
`
export const TextBlock = styled.div`max-width: 600px;
         display: flex;
         flex-direction: column;
         gap: 20px;
         color: #ffffff;
         text-align: start;
         text-shadow: 3px 4px 7px rgba(81, 67, 21, 0.8);`

export const Text = styled.p`
  margin: 0;
  font-size: 16px;
`

export const Tagline = styled.p`
  font-style: italic;
  font-size: 18px;
  margin: 0;
`
export const List = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 12px;
`

export const GenresItem = styled.li`
  background-color: #99eeee;
  background-color: rgba(153, 238, 238, 0.2);
  border-radius: 20px;
  padding: 10px;

  width: auto;
`

export const SpanItem = styled.p`
  background-color: #99eeee;
  background-color: rgba(153, 238, 238, 0.2);
  border-radius: 20px;
  padding: 10px;
  padding-left: 20px;
  width: 120px;
`

export const ScoreList = styled