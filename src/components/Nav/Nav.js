import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import * as S from './styles'
import { navItems } from 'app/data'
import analytics from 'app/analytics'

@withRouter
export default class Nav extends Component {
  desktopNavItemClick = (path) => {
    analytics.event({
      eventType: 'NAV ITEM CLICK',
      pathname: this.props.location.pathname
    })
  }

  render () {
    const { theme } = this.props

    return <S.NavComponent theme={theme}>
      <S.MaxWidth>
        <S.LogoLink to='/'>logo</S.LogoLink>
        <S.NavItems>
          { Object.values(navItems).map((item, index) => <S.NavItem
            theme={theme} to={item.url} key={index}
            onClick={() => { this.desktopNavItemClick(item.url) }}
          >
            {item.display}
          </S.NavItem>
          )}
        </S.NavItems>
      </S.MaxWidth>
    </S.NavComponent>
  }
}
