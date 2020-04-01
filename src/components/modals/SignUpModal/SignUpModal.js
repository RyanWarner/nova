import React from 'react'

import * as S from './styles'
import SignUpForm from '../../SignUpForm/SignUpForm'

export default () =>
  <S.SignUpModalComponent>
    <S.Title>Create your account</S.Title>
    <S.Description>
      This is for demonstration purposes only. No information is stored.
    </S.Description>
    <SignUpForm />
  </S.SignUpModalComponent>
