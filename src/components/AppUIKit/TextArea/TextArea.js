import React from 'react'
import { asField } from 'informed'

import * as S from './styles'

export default asField(({ fieldState, fieldApi, ...props }) => {
  const { maskedValue, error } = fieldState
  const { setValue, setTouched } = fieldApi
  const { onChange, onBlur, defaultValue, forwardedRef, ...rest } = props

  return (
    <S.TextAreaComponent>
      {props.label && <S.Label htmlFor={props.field}>{props.label}</S.Label>}
      <S.TextArea
        {...rest}
        fieldState={fieldState}
        ref={forwardedRef}
        value={!maskedValue ? '' : maskedValue}
        onChange={e => {
          setValue(e.target.value, e)
          if (onChange) { onChange(e.target.value) }
        }}
        onBlur={e => {
          setTouched(true)
          if (onBlur) { onBlur(e) }
        }}
      />
      <S.Error>{error}</S.Error>
    </S.TextAreaComponent>
  )
})
