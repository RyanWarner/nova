import styled from 'styled-components'

import { Breakpoints, Colors, Type } from 'app/styles'

export const FeatureCardComponent = styled.div`
  background-color: ${Colors.gray40};
  border-radius: 6px;
  width: 184px;
  height: 68px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media(max-width: ${Breakpoints.main}) {
    width: 164px;
    height: 64px;
  }
`

export const Title = styled.p`
  font-size: 18px;
  color: ${Colors.beige20};
  font-weight: ${Type.fontWeights.semiBold};
  margin-left: 10px;

  @media(max-width: ${Breakpoints.main}) {
    font-size: 16px;
  }
`
