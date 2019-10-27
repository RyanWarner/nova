import styled from 'styled-components'

import { Button } from 'app/ui-kit'
import { Type } from 'app/styles'

export const HeroComponent = styled.div`
  display: flex;
  align-items: center;
`

export const Text = styled.div`
  margin-right: 150px;
`

export const Title = styled.h1`
  margin-bottom: 13px;
`

export const Description = styled.p`
  ${Type.body30};
  width: 510px;
`

export const StyledButton = styled(Button)``
