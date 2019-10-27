import styled from 'styled-components'

import { Breakpoints, Colors, Sizes } from 'app/styles'

export const FooterComponent = styled.footer`
  margin-top: auto;
  width: 100vw;
  display: flex;
  justify-content: center;
  padding: 46px ${Sizes.xAppPadding};
  box-sizing: border-box;

  @media(max-width: ${Breakpoints.main}) {
    padding: 100px ${Sizes.xAppPaddingMobile} 0 ${Sizes.xAppPaddingMobile};
  }
`

export const MaxWidth = styled.div`
  max-width: ${Sizes.maxWidth};
  width: 100%;
  display: flex;

  @media(max-width: ${Breakpoints.main}) {
    align-items: center;
  }
`

export const Copyright = styled.div`
  margin-left: auto;
  color: ${Colors.beige10};
  font-size: 14px;

  @media(max-width: ${Breakpoints.main}) {
    margin-left: 0;
    text-align: center;
    font-size: 14px;
  }
`
