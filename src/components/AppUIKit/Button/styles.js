import styled, { css } from 'styled-components'

import { Colors, Breakpoints, Type } from 'app/styles'

export const Button = styled.div`
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
  color: ${Colors.white};
  background: ${Colors.peach};
  border-radius: 36px;
  min-width: 268px;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  &:hover {
    background: ${Colors.peachMedium};
  }

  &:active {
    background: ${Colors.peach};
  }

  ${props => props.disabled && css`
    opacity: .1;
    pointer-events: none;
  `}

  ${props => props.secondary && css`
    background: ${Colors.skyBlue};
    color: ${Colors.darkBlue};

    &:hover {
      background: ${Colors.skyBlueLight};
    }
  `}

  ${props => props.size === 'small' && css`
    height: 45px;
    min-width: auto;
  `}

  @media(max-width: ${Breakpoints.main}){
    height: 45px;
    min-width: auto;
  }

  ${props => props.type === 'condensed' && css`
    ${Type.pillButton};
    height: 36px;
    min-width: auto;

    @media(max-width: ${Breakpoints.main}){
      height: 36px;
    }
  `}
`

export const ButtonText = styled.div`
  font-family: ${Type.RingsideWide};
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  font-size: 20px;
  font-weight: bold;
  width: 100%;

  ${props => props.size === 'small' && css`
    font-size: 16px;
  `}

  ${props => props.type === 'condensed' && css`
    ${Type.pillButton};
    padding: 0 20px;
  `}


  @media(max-width: ${Breakpoints.main}){
    font-size: 16px;
  }
`
