import styled, { css } from 'styled-components'

import { Breakpoints, Colors, Type, Shadows } from 'app/styles'

export const InputWrap = styled.div`
  flex-grow: 1;
  height: 100%;
`

const sharedInputStyles = css`
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
  box-sizing: border-box;
  width: 100%;
  font-family: ${Type.fontFace};
  height: 44px;
  ${Type.input};
  border: 1px solid ${Colors.inputBorder};

  @media(max-width: ${Breakpoints.main}) {
    padding: 12px 14px;
  }

  &:focus {
    outline: none;
    border: 1px solid ${Colors.blue};
  }

  ::placeholder {
    color: ${Colors.lightGray};
  }
`

export const TextArea = styled.textarea`
  ${sharedInputStyles};
  box-shadow: ${Shadows.main};
  -webkit-appearance: none;
  height: 100px;

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
  margin: 0 0 0 4px;
`

export const Label = styled.div`
  ${Type.label};
  left: 2px;
  position: relative;
  height: 20px;
  color: ${Colors.darkBlue};
  margin-bottom: 8px;
`
