import React from 'react'

import * as S from './styles'
import { navItems } from 'app/data'

const Link = ({ item }) =>
  <S.NavLink to={item.url} key={item.display}>
    {item.display}
  </S.NavLink>

const A = ({ item }) =>
  <S.A href={item.url} key={item.display}>
    {item.display}
  </S.A>

export default props =>
  <S.NavLinksComponent {...props}>
    {Object.values(navItems).map(item =>
      item.type === 'link'
        ? <Link item={item} key={item.url} />
        : <A item={item} key={item.url} />
    )}
  </S.NavLinksComponent>
