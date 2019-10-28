import React, { Component } from 'react'

import * as S from './styles'
import { authFields as fields } from 'app/data'
import { Button, TextField } from 'app/ui-kit'

export default class SignUpForm extends Component {
  render () {
    return (
      <S.SignUpFormComponent>
        <TextField {...fields.email} />
        <TextField {...fields.password} />
        <Button>Sign Up</Button>
      </S.SignUpFormComponent>
    )
  }
}
