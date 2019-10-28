import React, { Component } from 'react'

import * as S from './styles'
import { Nova } from 'app/components'

export default class Hero extends Component {
  render () {
    return (
      <S.HeroComponent>
        <S.Text>
          <S.Title>Launch web apps faster</S.Title>
          <S.Description>
            Nova is an open source, feature rich React boilerplate used to kickstart production ready web apps.
          </S.Description>
          <S.StyledButton>Explore</S.StyledButton>
        </S.Text>
        <Nova />
      </S.HeroComponent>
    )
  }
}
