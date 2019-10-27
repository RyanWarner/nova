import React, { Component } from 'react'

import * as S from './styles'

import { Wordmark, NavLinks } from 'app/components'

export default class Nav extends Component {
  render () {
    return (
      <S.NavComponent>
        <S.LogoLink to='/'>
          <Wordmark />
        </S.LogoLink>
        <NavLinks />
        <S.AuthButtons>
          <S.LogIn>Log in</S.LogIn>
          <S.SignUp>Sign up</S.SignUp>
        </S.AuthButtons>
      </S.NavComponent>
    )
  }
}
