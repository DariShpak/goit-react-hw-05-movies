import styled from "styled-components"

export const Wrapper = styled.div`
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

export const Title = styled.h1`
  margin: 0;
  font-size: 34px;
  color: #ffffff;
  font-weight: 500;
  text-shadow: 3px 4px 7px rgba(81, 67, 21, 0.8);
`

export const Img = styled.img`
  display: block;
  border-radius: 20px;
`
export const TextBlock = styled.div`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: #ffffff;
  text-align: start;
  text-shadow: 3px 4px 7px rgba(81, 67, 21, 0.8);
`

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

export const Ul = styled.ul`
         margin-left: auto;
         margin-right: auto;

         display: flex;
         align-items: center;
         gap: 18px;
         list-style: none;
         margin-top: 0;
         margin-bottom: 40px;
         padding: 0;`

export const Li = styled.li`
  margin-top: 0;

  width: 80px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  &: focus,
          &: hover {
    text-shadow: 3px 3px 10px #d7c6cf, -2px 1px 10px #ff99cc;
  }
`
export const StyledLink = styled.p`
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;

  &.active {
    text-shadow: 3px 3px 10px #d7c6cf, -2px 1px 10px #ff99cc;
  }
`

export const Section = styled.section`
  display: flex;
  flex-direction: column;
`
