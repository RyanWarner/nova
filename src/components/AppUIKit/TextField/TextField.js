import React, { Component } from 'react'

import * as S from './styles'

export default class TextField extends Component {
  render () {
    const { label, helperText } = this.props

    return <S.InputWrap>
      {label && <S.Label>{label}</S.Label>}
      <S.TextInput {...this.props} />
      <S.Error>{helperText}</S.Error>
    </S.InputWrap>
  }
}
