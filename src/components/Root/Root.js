import React, { Component } from 'react'
import { renderRoutes } from 'react-router-config'

import * as S from './styles'
import { Global, Type } from 'app/styles'
import 'app/styles/FontFaces.css'
import AppHelmet from '../AppHelmet/AppHelmet'
import ModalController from '../modals/ModalController'

export default class Root extends Component {
  render () {
    const { route } = this.props
    return (
      <S.RootComponent>
        <AppHelmet route={route} />
        <Global.GlobalStyle />
        <Type.GlobalStyle />
        <ModalController />
        {renderRoutes(route.routes)}
      </S.RootComponent>
    )
  }
}
