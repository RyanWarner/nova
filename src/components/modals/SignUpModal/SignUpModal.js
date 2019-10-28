import React, { Component } from 'react'

import * as S from './styles'
import { SignUpForm } from 'app/components'

export default class SignUpModal extends Component {
  render () {
    return (
      <S.SignUpModalComponent>
        <S.Title>Sign Up</S.Title>
        <SignUpForm />
      </S.SignUpModalComponent>
    )
  }
}
