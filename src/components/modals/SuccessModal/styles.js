import styled from 'styled-components'

import { Colors, Breakpoints } from 'app/styles'

export const SuccessModalComponent = styled.div`
  padding: 48px 96px;
  width: 753px;
  box-sizing: border-box;
  background-color: ${Colors.beige20};
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media(max-width: ${Breakpoints.main}){
    width: 100vw;
  }
`

export const Title = styled.h3`
  font-weight: bold;
  text-align: center;
  color: ${Colors.gray10};
  padding: 120px 0;
`
