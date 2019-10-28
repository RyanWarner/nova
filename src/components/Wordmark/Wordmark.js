import React, { Component } from 'react'

import * as S from './styles'

export default class Wordmark extends Component {
  render () {
    return (
      <S.WordmarkComponent>
        <S.StyledNovaSmall />
        <S.Text>Nova</S.Text>
      </S.WordmarkComponent>
    )
  }
}
