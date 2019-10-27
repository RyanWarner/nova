import React, { Component } from 'react'

import * as S from './styles'

export default class Help extends Component {
  render () {
    return (
      <S.HelpComponent>
        <S.Title>Need help?</S.Title>
        <S.Description>
          Subscribe to Yawnch and unlock unlimited access to
        </S.Description>
      </S.HelpComponent>
    )
  }
}
