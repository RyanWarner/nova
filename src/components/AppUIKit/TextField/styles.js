import React from 'react'
import styled from 'styled-components'
import { BasicText } from 'informed'

import { Colors, Type, Inputs } from 'app/styles'

export const TextFieldComponent = styled.div`
  flex-grow: 1;
  height: 100%;
  width: 100%;
  margin-bottom: 16px;
`

const BasicTextCleanProps = ({ noError, ...rest }) => (
  <BasicText {...rest} />
)

export const TextInput = styled(BasicTextCleanProps)`
  ${Inputs.base};
`

export const Error = styled.div`
  ${Type.smallBody}
  color: ${Colors.error};
  position: relative;
  height: 20px;
  margin: 3px 0 0 3px;
`

export const Labels = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 6px 2px;
  height: 20px;
`

export const Label = styled.div`
  ${Type.body}
  position: relative;
  color: ${Colors.font10};
`
