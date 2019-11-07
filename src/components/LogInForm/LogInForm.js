import React, { Component } from 'react'
import { withFormState } from 'informed'

import * as S from './styles'
import { authFields as fields } from 'app/data'
import { Button, TextField } from 'app/ui-kit'
import withInformed from '../withInformed/withInformed'

@withInformed
@withFormState
export default class LogInForm extends Component {
  componentDidMount = () => {
    this.props.setOnSubmit(this.submit)
  }

  submit = () => {
    // const { formState } = this.props
    // const { email, password } = formState
  }

  render () {
    return (
      <S.LogInFormComponent>
        <TextField {...fields.email} />
        <TextField {...fields.password} />
        <Button>Log in</Button>
      </S.LogInFormComponent>
    )
  }
}
