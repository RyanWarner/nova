import React, { Component } from 'react'

import * as S from './styles'

export default class Tech extends Component {
  render () {
    const { data } = this.props

    return (
      <S.TechComponent>
        {data.icon}
        <S.Text>
          <S.Title>{data.display}</S.Title>
          <S.Description>{data.description}</S.Description>
        </S.Text>
      </S.TechComponent>
    )
  }
}
