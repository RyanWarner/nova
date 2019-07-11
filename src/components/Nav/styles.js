import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { Colors, Sizes, Breakpoints, Type } from 'app/styles'

export const NavComponent = styled.div`
  background-color: transparent;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 43px 56px;
  box-sizing: border-box;
  z-index: 3;
  position: relative;

  @media(max-width: ${Breakpoints.main}) {
    padding: 0 20px;
    height: 60px;
  }

  ${props => props.theme === 'whiteBg' && css`
    background-color: ${Colors.white};
  `}

  @media(max-width: ${Breakpoints.main}) {
    display: none;
  }
`

export const LogoLink = styled(Link)``

export const NavItems = styled.div`
  display: flex;
`
export const NavItem = styled(Link)`
  margin-right: 48px;
  cursor: pointer;
  transition: all .2s ease-out;
  display: flex;
  align-items: center;
  color: ${props => props.theme.desktop.navColor};
  ${Type.navItem};

  &:hover {
    color: ${props => props.theme.desktop.navHoverColor};
  }

  &:last-child {
    margin-right: 0;
  }
`

export const MaxWidth = styled.div`
  max-width: ${Sizes.maxWidth};
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
`
