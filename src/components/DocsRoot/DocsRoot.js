import React, { Component } from 'react'
import { renderRoutes } from 'react-router-config'

import * as S from './styles'
import SideNav from '../SideNav/SideNav'
import MobileNav from '../MobileNav/MobileNav'

export default class AppRoot extends Component {
  render () {
    const { route } = this.props
    return (
      <S.AppRootComponent>
        <SideNav />
        <MobileNav nav='docs' />
        {renderRoutes(route.routes)}
      </S.AppRootComponent>
    )
  }
}
