import React from 'react'
import { asField } from 'informed'

import * as S from './styles'

export default asField((props) => {
  const { label, noError, ...rest } = props
  const error = props.fieldState.error

  return (
    <S.TextFieldComponent>
      {label && <S.Label htmlFor={props.field}>{label}</S.Label>}
      <S.TextInput {...rest} />
      {!noError && <S.Error>{error}</S.Error>}
    </S.TextFieldComponent>
  )
})
