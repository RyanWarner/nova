import React, { Component } from 'react'

import * as S from './styles'

export default class MobileNav extends Component {
  render () {
    return (
      <S.SuccessModalComponent>
        <S.StyledNavLinks linkStyle={S.linkStyle} />
      </S.SuccessModalComponent>
    )
  }
}
