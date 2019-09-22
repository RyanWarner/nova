import React, { Component } from 'react'

import * as S from './styles'

export default function withInformed (WrappedComponent) {
  return class HOC extends Component {
    state = {}

    setOnSubmit = (handleSubmit) => {
      this.setState({ handleSubmit })
    }

    render () {
      const { initialValues } = this.props

      return (
        <S.StyledForm
          initialValues={initialValues}
          onSubmit={this.state.handleSubmit}
          allowEmptyStrings
        >
          <WrappedComponent
            setOnSubmit={this.setOnSubmit}
            {...this.props}
          />
        </S.StyledForm>
      )
    }
  }
}
