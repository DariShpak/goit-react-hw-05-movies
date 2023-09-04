import styled from "styled-components"

export const CastWrapper = styled.section`
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 24px;
`

export const CastList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`
export const CastListItem = styled.li`
  width: 140px;

  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`

export const Image = styled.img`
  margin-left: auto;
  margin-right: auto;
  border-radius: var(--border-radius);
`

export const Text = styled.p`
  margin-top: 8px;
  font-size: 12px;
`
