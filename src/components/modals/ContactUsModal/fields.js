import { EMAIL_REGEX } from 'app/utilities'

export default {
  name: {
    label: 'Name',
    slug: 'name',
    inputType: 'text',
    placeholder: 'Enter your first and last name',
    required: true
  },
  email: {
    label: 'Email',
    slug: 'email',
    inputType: 'email',
    placeholder: 'Enter your email',
    required: true,
    validate: (value) => {
      if (!EMAIL_REGEX.test(value)) return 'Invalid email'
      return null
    }
  },
  message: {
    label: 'Message',
    placeholder: 'Type your message',
    slug: 'message',
    inputType: 'textArea',
    required: true
  }
}
