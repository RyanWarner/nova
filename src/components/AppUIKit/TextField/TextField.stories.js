import React from 'react'
import TextField from './TextField'
import { Form } from 'informed'

export default {
  title: 'Components|UI Kit/TextField',
  component: TextField
}

export const basic = () => (
  <Form>
    <TextField
      field='name'
      label='Name'
      placeholder='Your name here'
    />
  </Form>
)
