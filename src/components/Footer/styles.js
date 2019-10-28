import styled from 'styled-components'

import { Breakpoints, Colors, Sizes } from 'app/styles'
import NavLinks from '../NavLinks/NavLinks'

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
  position: relative;
  justify-content: space-between;

  @media(max-width: ${Breakpoints.main}) {
    align-items: center;
  }
`

export const Copyright = styled.div`
  color: ${Colors.gray20};
  font-size: 14px;
  width: 200px;
  text-align: right;

  @media(max-width: ${Breakpoints.main}) {
    margin-left: 0;
    text-align: center;
    font-size: 14px;
  }
`


export const StyledNavLinks = styled(NavLinks)`
`
