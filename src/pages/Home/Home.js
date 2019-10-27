import React, { Component } from 'react'

import * as S from './styles'
import { Hero, TechList, Help } from 'app/components'

export default class Home extends Component {
  render () {
    return (
      <S.HomePage>
        <Hero />
        <TechList />
        <Help />
      </S.HomePage>
    )
  }
}
