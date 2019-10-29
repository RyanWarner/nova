import styled from 'styled-components'

import { Type, Colors } from 'app/styles'

export const TechComponent = styled.div`
  display: flex;
  align-items: center;
`

export const Text = styled.div`
  margin-left: 20px;
`

export const Title = styled.div`
  font-weight: ${Type.fontWeights.semiBold};
  margin-bottom: 2px;
`

export const Description = styled.p`
  color: ${Colors.gray20};
  font-size: 12px;
`
