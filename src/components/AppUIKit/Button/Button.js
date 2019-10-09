import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Loading } from 'app/ui-kit'

import * as S from './styles'

export default class Button extends Component {
  static propTypes = {
    loading: PropTypes.bool,
    disabled: PropTypes.bool,
    options: PropTypes.object
  }

  render () {
    const { loading, children, options } = this.props
    const { size, type } = options

    return (
      <S.Button {...this.props}>
        <S.ButtonText size={size} type={type}>
          {loading
            ? <Loading />
            : children}
        </S.ButtonText>
      </S.Button>
    )
  }
}
