import styled, { css, createGlobalStyle } from 'styled-components'
import { X } from 'react-feather'

import { Sizes } from 'app/styles'

export const OverlayWrap = styled.div``
export const CloseX = styled(X)`
  padding: 25px;
  right: 0;
  position: absolute;
  top: 0%;
  cursor: pointer;
  z-index: 2;
  opacity: 0.5;
  transition: opacity 200ms ease;

  &:hover {
    opacity: 0.7;
  }
`

export const GlobalModalStyle = createGlobalStyle`
  .Aria-modal {
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.35);
    transition: all 250ms ease-in-out;
    transform: translate3d(0, -50px, 0);
    opacity: 0.3;

    &.has-entered {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }

    ${props => props.animation === 'fadeScale' && css`
      transform: scale(0.8);
      opacity: 0;

      &.has-entered {
        opacity: 1;
        transform: scale(1);
      }
    `}

    ${props => props.animation === 'sideNav' && css`
      transform: translate3d(${Sizes.sideNavWidth}, 0, 0);
      opacity: 0;
      position: absolute;
      top: 0;
      right: 0;
      border-radius: 10px 0 0 10px;

      &.has-entered {
        opacity: 1;
        transform: translate3d(0, 0, 0);
      }
    `}
  }

  .Aria-underlay {
    opacity: 0;
    transition: opacity 300ms ease;
    padding: 7vw 0;
    box-sizing: border-box;

    &.has-entered {
      opacity: 1;
    }
  }
`

export const sideNavUnderlayStyle = {
  textAlign: 'right',
  padding: 0,
  overflow: 'initial'
}
