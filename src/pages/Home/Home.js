import React, { Component } from 'react'

import * as S from './styles'
import { Hero, Help } from 'app/components'

export default class Home extends Component {
  render () {
    return (
      <S.HomePage>
        <Hero />
        <S.StyledTechList />
        <Help />
      </S.HomePage>
    )
  }
}
