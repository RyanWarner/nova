import React from 'react'

import * as S from './styles'
import LogInForm from '../../SignUpForm/SignUpForm'

export default () =>
  <S.LogInModalComponent>
    <S.Title>Log in</S.Title>
    <S.Description>
      This is for demonstration purposes only. No information is stored.
    </S.Description>
    <LogInForm />
  </S.LogInModalComponent>
