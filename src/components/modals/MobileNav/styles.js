import styled, { css } from 'styled-components'

import { Colors, Breakpoints } from 'app/styles'
import NavLinks from '../../NavLinks/NavLinks'

export const SuccessModalComponent = styled.div`
  padding: 24px 44px;
  width: 753px;
  box-sizing: border-box;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.white090};
  backdrop-filter: blur(5px);

  @media(max-width: ${Breakpoints.main}){
    width: 90vw;
    height: 90vh;
  }
`

export const Title = styled.h3`
  font-weight: bold;
  text-align: center;
  color: ${Colors.gray10};
  padding: 120px 0;
`

export const linkStyle = css`
  font-size: 18px;
  padding: 16px 0;
`

export const StyledNavLinks = styled(NavLinks)`
  flex-direction: column;
`
