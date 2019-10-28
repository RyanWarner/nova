import styled from 'styled-components'

import { Button } from 'app/ui-kit'
import { Colors, Mixins, Type } from 'app/styles'

export const HeroComponent = styled.div`
  display: flex;
  align-items: center;
  ${Mixins.widthContainer};
  height: 620px;
`

export const Text = styled.div`
  margin-right: auto;
`

export const Title = styled.h1`
  margin-bottom: 13px;
  width: 510px;
`

export const Description = styled.p`
  ${Type.body30};
  width: 510px;
  color: ${Colors.gray20};
  margin-bottom: 50px;
`

export const StyledButton = styled(Button)``
