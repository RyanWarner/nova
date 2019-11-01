import styled, { css, createGlobalStyle } from 'styled-components'

import { X } from 'react-feather'

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
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.35);
    transition: all 250ms cubic-bezier(0.55, 0.055, 0.675, 0.19);

    transform: translate(0, -50px);
    opacity: 0.3;

    &.has-entered {
      opacity: 1;
      transform: translate(0, 0);
    }

    ${props => props.animation === 'fadeScale' && css`
      transform: scale(0.6);
      opacity: 0;

      &.has-entered {
        opacity: 1;
        transform: scale(1);
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
