import React from 'react'
import styled, { css } from 'styled-components'

import { Breakpoints, Colors, Type } from 'app/styles'

const ButtonCleanProps = ({ loading, disabled, buttonName, options, ...rest }) => (
  <button {...rest} />
)

export const Button = styled(ButtonCleanProps)`
  font-family: ${Type.fontFace};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  transition: background 275ms ease;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${Colors.fontDark};
  background: ${Colors.brand};
  border-radius: 36px;
  min-width: 268px;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  &:hover {
    background: ${Colors.brandLight};
  }

  &:active {
    background: ${Colors.brand};
  }

  ${props => props.disabled && css`
    opacity: .1;
    pointer-events: none;
  `}

  ${props => props.options?.theme === 'secondary' && css`
    background: ${Colors.gray1};
    color: ${Colors.brand};

    &:hover {
      background: ${Colors.gray1Light};
    }
  `}

  ${props => props.options?.size === 'small' && css`
    height: 45px;
    min-width: auto;
  `}

  @media(max-width: ${Breakpoints.main}) {
    height: 45px;
    min-width: auto;
  }
`

export const ButtonText = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  font-size: 18px;
  font-weight: bold;
  width: 100%;

  ${props => props.options?.size === 'small' && css`
    font-size: 16px;
  `}

  @media(max-width: ${Breakpoints.main}) {
    font-size: 16px;
  }
`
