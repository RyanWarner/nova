import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as S from './styles'
import { openModal } from 'app/store/app/actions'

@connect(null, { openModal })
export default class MobileNav extends Component {
  handleMenuClick = () => {
    this.props.openModal({ name: 'MobileNav' })
  }

  render () {
    return (
      <S.MobileNavComponent onClick={this.handleMenuClick}>
        <S.StyledMenu />
      </S.MobileNavComponent>
    )
  }
}
