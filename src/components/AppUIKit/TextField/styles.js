import styled, { css } from 'styled-components'

import { Breakpoints, Colors, Type, Shadows } from 'app/styles'

export const InputWrap = styled.div`
  flex-grow: 1;
  height: 100%;
`

const sharedInputStyles = css`
  padding: 0 20px;
  border-radius: 10px;
  border: none;
  box-sizing: border-box;
  width: 100%;
  font-family: ${Type.fontFace};
  height: 60px;
  ${Type.input};
  border: 1px solid ${Colors.inputBorder};

  @media(max-width: ${Breakpoints.main}){
    height: 50px;
    padding: 0 14px;
  }

  &:focus {
    outline: none;
    border: 1px solid ${Colors.blue};
  }

  ::placeholder {
    color: ${Colors.lightGray};
  }
`

export const TextInput = styled.input`
  ${sharedInputStyles};
  box-shadow: ${Shadows.main};
  -webkit-appearance: none;
  color: ${Colors.darkBlue};

  ${props => props.error && css`
    border: 1px solid ${Colors.red};

    &:focus {
      border: 1px solid ${Colors.red};
    }
  `}
`

export const Error = styled.div`
  ${Type.extraSmallBody};
  color: ${Colors.error};
  position: relative;
  height: 20px;
  margin: 4px 0 0 4px;
`

export const Label = styled.div`
  ${Type.label};
  margin-bottom: 8px;
  left: 2px;
  position: relative;
  height: 20px;
  color: ${Colors.darkBlue};
`
