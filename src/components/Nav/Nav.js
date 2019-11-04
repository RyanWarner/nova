import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as S from './styles'
import { openModal } from 'app/store/app/actions'
import { Wordmark, NavLinks } from 'app/components'

@connect(null, { openModal })
export default class Nav extends Component {
  handleSignUp = () => {
    this.props.openModal({ name: 'SignUpModal' })
  }

  handleLogIn = () => {
    // this.props.openModal({ name: 'LogInModal' })
    this.props.openModal({ name: 'SideNav', animation: 'sideNav' })
  }

  render () {
    return (
      <S.NavComponent>
        <S.LogoLink to='/'>
          <Wordmark />
        </S.LogoLink>
        <NavLinks />
        <S.AuthButtons>
          <S.LogIn
            options={{
              theme: 'text',
              size: 'small'
            }}
            onClick={this.handleLogIn}
          >
            Log in
          </S.LogIn>
          <S.SignUp
            options={{
              theme: 'orange',
              size: 'small'
            }}
            onClick={this.handleSignUp}
          >
            Sign up
          </S.SignUp>
        </S.AuthButtons>
      </S.NavComponent>
    )
  }
}
