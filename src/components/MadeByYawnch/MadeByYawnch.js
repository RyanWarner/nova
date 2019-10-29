import React, { Component } from 'react'

import * as S from './styles'

export default class MadeByYawnch extends Component {
  render () {
    return (
      <S.MadeByYawnchComponent
        href='https://yawnch.com'
        target='_blank'
      >
        🚀 Made by Yawnch
      </S.MadeByYawnchComponent>
    )
  }
}
