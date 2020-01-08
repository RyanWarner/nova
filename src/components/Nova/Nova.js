import React from 'react'

import * as S from './styles'
import {
  globe,
  globeWebp,
  rings,
  ringsWebp,
  space
} from 'app/assets/images'

export default props => (
  <S.NovaComponent {...props}>
    <S.StyledSpace src={space} />
    <S.Nova>
      <picture>
        <source srcSet={globeWebp} type='image/webp' />
        <source srcSet={globe} type='image/png' />
        <S.StyledGlobe src={globe} />
      </picture>
      <picture>
        <source srcSet={ringsWebp} type='image/webp' />
        <source srcSet={rings} type='image/png' />
        <S.StyledRings src={rings} />
      </picture>
    </S.Nova>
  </S.NovaComponent>
)
