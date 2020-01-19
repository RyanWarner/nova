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
        <S.StyledGlobe src={globe} alt='An illustration of a planet-like sphere' />
      </picture>
      <picture>
        <source srcSet={ringsWebp} type='image/webp' />
        <source srcSet={rings} type='image/png' />
        <S.StyledRings src={rings} alt='An illustration of rings around a planet' />
      </picture>
    </S.Nova>
  </S.NovaComponent>
)
