import styled, { createGlobalStyle } from 'styled-components'

export const StoryContainerComponent = styled.div`
  display: flex;
  height: 100%;
  padding: 30px;
  box-sizing: border-box;
  justify-content: center;
`

export const GlobalStyle = createGlobalStyle`
  #root {
    width: 100%;
  }
`
