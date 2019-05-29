import React, { PureComponent } from 'react'

import * as S from './styles'

export default class Home extends PureComponent {
  render () {
    return <S.HomeComponent>
      <S.StyledLogo />
      <S.LogoText>
        yawnch/react-starter
      </S.LogoText>
    </S.HomeComponent>
  }
}
