import React, { Component } from 'react'

import * as S from './styles'
import FIELDS from './fields'
import withForm from '../../withForm'
import analytics from 'app/analytics'
import { withRouter } from 'react-router-dom'

@withRouter
@withForm(FIELDS)
export default class ContactUsModal extends Component {
  state = { loading: false }

  submit = async (event) => {
    event.preventDefault()
    const { loading } = this.state
    if (loading || !this.props.allFieldsValid()) return
    this.setState({ loading: true })
    const { email, message, name, location } = this.props
    const { pathname } = location

    try {
      // await ContactUs.create({
      //   email: email.value,
      //   message: message.value,
      //   name: name.value
      // })

      analytics.event({
        eventType: 'SUBMIT CONTACT FORM',
        pathname,
        props: {
          email: email.value,
          name: name.value,
          message: message.value
        }
      })
      this.props.openModal('SuccessModal')
    } catch (error) {
      console.log('err', error)
    }
  }

  render () {
    const { loading } = this.state
    return <S.ContactUsModalComponent>
      <S.Title>Contact us</S.Title>
      <S.TextFields>
        { Object.values(FIELDS).map(this.props.renderInput) }
        <S.SignUpButton onClick={this.submit} loading={loading}>
          Send
        </S.SignUpButton>
      </S.TextFields>
    </S.ContactUsModalComponent>
  }
}
