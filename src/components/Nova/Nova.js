import React from 'react'

import * as S from './styles'
import { globe, rings } from 'app/assets/images'

export default props => (
  <S.NovaComponent>
    <S.StyledGlobe src={globe} />
    <S.StyledRings src={rings} />
  </S.NovaComponent>
)
