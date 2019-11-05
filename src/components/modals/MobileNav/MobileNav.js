import React, { Component } from 'react'

import * as S from './styles'

export default class MobileNav extends Component {
  render () {
    return (
      <S.MobileNavComponent>
        <S.StyledNavLinks linkStyle={S.linkStyle} />
      </S.MobileNavComponent>
    )
  }
}
