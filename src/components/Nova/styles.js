import styled from 'styled-components'

import { Animations } from 'app/styles'

export const NovaComponent = styled.div`
  width: 633px;
  height: 633px;
  position: relative;
  margin-left: 30px;
  margin-top: 30px;
`

export const StyledSpace = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 633px;
  height: 633px;
`

export const Nova = styled.div`
  width: 340px;
  height: 340px;
  position: absolute;
  left: 260px;
  top: 150px;
`

export const StyledGlobe = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -142px 0 0 -142px;
  width: 285px;
  height: 285px;
`

export const StyledRings = styled.img`
  animation: 140s linear ${Animations.spin} infinite;
  position: absolute;
  width: 340px;
  height: 340px;
  top: 0;
  left: 0;
`
