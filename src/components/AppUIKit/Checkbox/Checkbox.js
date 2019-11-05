import React from 'react'
import { asField } from 'informed'

import * as S from './styles'

export default asField(({ fieldState, fieldApi, ...props }) => {
  const { value, error } = fieldState
  const { setValue, setTouched, setError } = fieldApi
  const { onChange, onBlur, defaultValue, forwardedRef, field, label, ...rest } = props

  return (
    <S.CheckboxComponent>
      <S.CheckboxAndLabel>
        <S.CheckboxWrap>
          <S.StyledCheckbox
            {...rest}
            ref={forwardedRef}
            type='checkbox'
            id={field}
            field={field}
            value={value || defaultValue}
            onChange={e => {
              setValue(e.target.checked)
              if (fieldState.touched) setError(null)
              if (onChange) { onChange(e.target.checked) }
            }}
            onBlur={e => {
              setTouched(true)
              if (onBlur) { onBlur(e) }
            }}
          />
          <S.StyledCheck />
        </S.CheckboxWrap>
        {label && <S.Label htmlFor={field}>{label}</S.Label>}
      </S.CheckboxAndLabel>
      <S.ErrorLabel>{error}</S.ErrorLabel>
    </S.CheckboxComponent>
  )
})
