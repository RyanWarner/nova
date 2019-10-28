import React, { Component } from 'react'

import * as S from './styles'
import { MadeByYawnch } from 'app/components'

export default class Footer extends Component {
  render () {
    return (
      <S.FooterComponent>
        <S.MaxWidth>
          <MadeByYawnch />
          <S.StyledNavLinks />
          <S.Copyright
            href='https://opensource.org/licenses/MIT'
            target='_blank'
            rel='noreferrer noopener'
          >
            MIT Licence
          </S.Copyright>
        </S.MaxWidth>
      </S.FooterComponent>
    )
  }
}
