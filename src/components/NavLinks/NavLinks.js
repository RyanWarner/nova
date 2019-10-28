import React from 'react'

import * as S from './styles'
import { navItems } from 'app/data'

export default props =>
  <S.NavLinksComponent {...props}>
    {Object.values(navItems).map(item => (
      <S.A href={item.url} key={item.display}>
        {item.display}
      </S.A>
    ))}
  </S.NavLinksComponent>
