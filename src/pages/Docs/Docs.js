import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import * as S from './styles'
import docs from 'app/data/docs'

@withRouter
export default class Docs extends Component {
  render () {
    const { params } = this.props.match
    const { section, doc } = params
    const MDXDocument = docs[section][doc].default

    return (
      <S.DocsPage>
        <MDXDocument />
      </S.DocsPage>
    )
  }
}
