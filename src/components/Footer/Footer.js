import React from 'react'

import * as S from './styles'
import MadeBy from '../MadeBy/MadeBy'

export default () =>
  <S.FooterComponent>
    <S.MaxWidth>
      <MadeBy />
      <S.StyledNavLinks />
      <S.Copyright
        href='https://opensource.org/licenses/MIT'
        target='_blank'
        rel='noreferrer noopener'
      >
        MIT License
      </S.Copyright>
    </S.MaxWidth>
  </S.FooterComponent>
