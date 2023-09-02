import styled from "styled-components"

export const CastWrapper = styled.div`
  max-width: 1200px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 0;
`

export const CastList = styled.ul`
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  padding-left: 0;
`
export const CastListItem = styled.li`
  width: 120px;

  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`

export const Image = styled.img`
  margin-left: auto;
  margin-right: auto;
  display: block;
  border-radius: 20px;
`

export const Text = styled.p`
  font-size: 12px;
  color: #ffffff;
  text-shadow: 3px 4px 7px rgba(81, 67, 21, 0.8);
`
