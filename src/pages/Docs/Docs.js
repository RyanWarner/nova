import React, { Component } from 'react'

import * as S from './styles'
import MDXDocument from 'app/data/docs/getting.mdx'

export default class Docs extends Component {
  render () {
    return (
      <S.DocsPage>
        🚀 Docs
        <MDXDocument />
      </S.DocsPage>
    )
  }
}
