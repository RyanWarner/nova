import styled from 'styled-components'

import { Animations } from 'app/styles'

export const NovaComponent = styled.div`
  width: 382px;
  height: 382px;
  position: relative;
`

export const StyledGlobe = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -147px 0 0 -147px;
  width: 294px;
  height: 294px;
`

export const StyledRings = styled.img`
  animation: 140s linear ${Animations.spin} infinite;
  position: absolute;
  margin: auto;
  width: 382px;
  height: 382px;
  top: 0;
  left: 0;
`
