import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

import { Breakpoints, Sizes } from 'app/styles'
import { Button } from 'app/ui-kit'

export const NavComponent = styled.header`
  height: ${Sizes.navHeight};
  background-color: rgba(255, 255, 255, 0.85);
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${Sizes.xAppPadding};
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  backdrop-filter: blur(5px);

  @media(max-width: ${Breakpoints.main}) {
    padding: 0 20px;
    height: 60px;
  }
`

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
`

export const AuthButtons = styled.div`
  display: flex;
`

export const LogIn = styled(Button)`
  margin-right: 10px;
`

export const SignUp = styled(Button)``

export const NavItems = styled.nav`
  display: flex;
`

const navItemShared = css`
  margin-left: 26px;
`

export const NavA = styled.a`
  ${navItemShared};
`

export const NavLink = styled(Link)`
  ${navItemShared};
`
