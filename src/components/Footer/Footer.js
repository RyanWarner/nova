import React, { Component } from 'react'

import * as S from './styles'
import { NavLinks, MadeByYawnch } from 'app/components'

export default class Footer extends Component {
  render () {
    return (
      <S.FooterComponent>
        <S.MaxWidth>
          <MadeByYawnch />
          <NavLinks />
          <S.Copyright>MIT Licence</S.Copyright>
        </S.MaxWidth>
      </S.FooterComponent>
    )
  }
}
