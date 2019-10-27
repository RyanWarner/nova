import styled from 'styled-components'

import { Colors } from 'app/styles'

export const HelpComponent = styled.div`
  width: 100vw;
  background: linear-gradient(#3F3D43, ${Colors.gray10});
  height: 512px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h2`
  color: ${Colors.beige20};
`

export const Description = styled.p`
  color: ${Colors.beige10};
`
