import { css, createGlobalStyle } from 'styled-components'

import { Colors, Breakpoints } from 'app/styles'

const sansSerifFallback = "'-apple-system', 'BlinkMacSystemFont', 'Helvetica Neue', 'Roboto', 'sans-serif'"

export const fontFace = `'Cabin', ${sansSerifFallback}`

export const bigBody = css`
  font-size: 36px;
  font-weight: 200;
  line-height: normal;
`

export const body = css`
  font-size: 15px;
  line-height: 22px;

  @media(max-width: ${Breakpoints.main}) {
    font-size: 13px;
    line-height: normal;
  }
`

export const bodyMedium = css`
  ${body};
  font-weight: 600;
`

export const smallBody = css`
  font-size: 18px;
  line-height: 24px;

  @media(max-width: ${Breakpoints.main}){
    font-size: 14px;
    line-height: 20px;
  }
`

export const navItem = css`
  font-size: 18px;
  font-weight: bold;
`

export const input = css`
  font-size: 24px;
  line-height: 36px;
  font-weight: 200;

  @media(max-width: ${Breakpoints.main}){
    font-size: 18px;
    line-height: 26px;
  }
`

export const label = css`
  font-size: 18px;
  line-height: 22px;
  font-weight: 600;

  @media(max-width: ${Breakpoints.main}){
    font-size: 16px;
    line-height: 20px;
  }
`

export const pillButton = css`
  font-size: 18px;
  font-weight: 500;
`

export const header1 = css`
  font-size: 80px;
  line-height: 85px;
  font-weight: bold;
  margin: 0;

  @media(max-width: ${Breakpoints.main}) {
    font-size: 50px;
    line-height: 55px;
  }
`
export const header2 = css`
  font-size: 64px;
  line-height: 69px;
  font-weight: bold;
  margin: 0;

  @media(max-width: ${Breakpoints.main}) {
    font-size: 32px;
    line-height: 40px;
  }
`
export const header3 = css`
  font-size: 42px;
  font-weight: bold;
  line-height: 48px;
  margin: 0;

  @media(max-width: ${Breakpoints.main}) {
    font-size: 24px;
    line-height: 30px;
  }
`
export const header3Italic = css`
  font-size: 42px;
  font-weight: bold;
  font-style: italic;
  line-height: normal;
  margin: 0;

  @media(max-width: ${Breakpoints.main}) {
    font-size: 24px;
    line-height: 30px;
  }
`
export const header4 = css`
  font-size: 28px;
  font-weight: bold;
  line-height: 36px;
  margin: 0;

  @media(max-width: ${Breakpoints.main}) {
    font-size: 20px;
    line-height: normal;
  }
`
export const header5 = css`
  font-size: 24px;
  font-weight: bold;
  line-height: normal;
  margin: 0;

  @media(max-width: ${Breakpoints.main}) {
    font-size: 16px;
    line-height: 20px;
  }
`

export const GlobalStyle = createGlobalStyle`
  h1 {
    ${header1};
  }
  h2 {
    ${header2};
  }
  h3 {
    ${header3};
  }
  h4 {
    ${header4};
  }
  h5 {
    ${header5};
  }
  p {
    ${smallBody};
    margin-top: 0;
    margin-bottom: 38px;
  }
  a {
    color: ${Colors.brand};
    text-decoration: none;
    transition: color .3s ease;

    &:hover {
      color: ${Colors.brand};
    }
  }
`
