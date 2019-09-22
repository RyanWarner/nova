import React, { Component } from 'react'

import * as S from './styles'
import FIELDS from './fields'
import { withInformed } from 'app/components'

@withInformed
export default class ContactUsModal extends Component {
  state = { loading: false }

  componentDidMount = () => {
    this.props.setOnSubmit(this.submit)
  }

  submit = async (event) => {
    event.preventDefault()
    const { loading } = this.state
    if (loading) return
    this.setState({ loading: true })
    const { formState } = this.props

    try {
      // await ContactUs.create({
      //   email: email.value,
      //   message: message.value,
      //   name: name.value
      // })
      this.props.openModal('SuccessModal')
    } catch (error) {
      console.log('err', error)
    }
  }

  render () {
    const { loading } = this.state

    return (
      <S.ContactUsModalComponent>
        <S.Title>Contact us</S.Title>
        <S.TextFields>

          <S.SignUpButton loading={loading}>
            Send
          </S.SignUpButton>
        </S.TextFields>
      </S.ContactUsModalComponent>
    )
  }
}
