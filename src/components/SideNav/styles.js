import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

import { Colors, Sizes, Type } from 'app/styles'
import Wordmark from '../Wordmark/Wordmark'

const xPadding = '18px'

export const SideNavComponent = styled.div`
  width: ${Sizes.sideNavWidth};
  background-color: rgba(255, 255, 255, 0.80);
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
`

export const StyledWordmark = styled(Wordmark)`
  margin: 40px ${xPadding};
`

export const NavItemWrap = styled.div`
  padding: 2px ${xPadding} 5px 63px;
  display: flex;
`

export const NavItem = styled(Link)`
  display: block;
  color: ${Colors.gray20};
  position: relative;
  transition: all 175ms ease;
  padding: 3px 0;

  &:after {
      content: '';
      display: block;
      position: absolute;
      bottom: -1px;
      height: 0px;
      left: -2px;
      right: -2px;
      background: transparent;
      z-index: -1;
      transition: all 170ms ease-in-out;
    }

  ${props => props.selected && css`
    color: ${Colors.gray10};
    font-weight: ${Type.fontWeights.semiBold};

    &:after {
      bottom: 2px;
      height: 7px;
      background: ${Colors.brand50};
    }
  `}
`

export const NavSection = styled.div`
  margin-bottom: 24px;
`

export const SectionTitle = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0 ${xPadding};
  color: ${Colors.gray10};
  font-weight: ${Type.fontWeights.semiBold};
`

export const IconWrap = styled.div`
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`
