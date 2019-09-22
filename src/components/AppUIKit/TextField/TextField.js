import React from 'react'
import { asField } from 'informed'

import * as S from './styles'

export default asField((props) => {
  const { label, noError, RightLabelComponent, ...rest } = props
  const error = props.fieldState.error

  return (
    <S.TextFieldComponent>
      {label &&
        <S.Labels>
          <S.Label>{label}</S.Label>
          {RightLabelComponent && <RightLabelComponent />}
        </S.Labels>}
      <S.TextInput {...rest} />
      {!noError && <S.Error>{error}</S.Error>}
    </S.TextFieldComponent>
  )
})
