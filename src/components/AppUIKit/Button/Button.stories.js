import React from 'react'
import Button from './Button'

export default {
  title: 'Components|UI Kit/Button',
  component: Button
}

export const basic = () => <Button>Button</Button>
export const loading = () => <Button loading>Button</Button>
export const disabled = () => <Button disabled>Button</Button>
