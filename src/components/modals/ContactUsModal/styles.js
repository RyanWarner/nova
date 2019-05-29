import styled from 'styled-components'

import { Button } from 'app/ui-kit'
import { Colors, Breakpoints } from 'app/styles'

export const ContactUsModalComponent = styled.div`
  padding: 48px 96px;
  width: 753px;
  box-sizing: border-box;
  background-color: ${Colors.white};
  border-radius: 12px;

  @media(max-width: ${Breakpoints.main}){
    width: 100vw;
    padding: 48px 25px;
  }
`

export const Title = styled.h3`
  margin-bottom: 40px;
  line-height: 30px;
  color: ${Colors.darkBlue};
  text-align: center;
`

export const TextFields = styled.div`
  display: flex;
  flex-direction: column;
`

export const SignUpButton = styled(Button)`
  margin-top: 20px;
  align-self: center;
`
