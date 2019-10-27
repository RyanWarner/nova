import React, { Component } from 'react'

import * as S from './styles'
import { navItems } from 'app/data'

export default class NavLinks extends Component {
  render () {
    return (
      <S.NavLinksComponent>
        {Object.values(navItems).map(item => (
          <S.A href={item.url} key={item.display}>
            {item.display}
          </S.A>
        ))}
      </S.NavLinksComponent>
    )
  }
}
