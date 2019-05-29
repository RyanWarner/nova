import styled from 'styled-components'

import { Breakpoints, Colors } from 'app/styles'
import { stars } from 'app/assets/images'
import { Button } from 'app/ui-kit'

export const NotFoundPage = styled.div`
  min-height: calc(100vh - 140px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${Colors.white};
  background-color: ${Colors.darkBlue};
  margin-top: -140px;
  padding-top: 140px;
`

export const MaxWidth = styled.div`
  max-width: 720px;
  padding: 0 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  position: relative;
  margin-top: 100px;

  @media(max-width: ${Breakpoints.main}){
    max-width: 360px;
  }
`

export const RadialGradient = styled.div`
  background: radial-gradient(554.50px at 50% 50%, #5E6B95 0%, #3D496E 100%);
  opacity: 0.6;
  width: 1679px;
  height: 1109px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -555px;
  margin-left: -840px;
  z-index: 1;

  @media(max-width: ${Breakpoints.main}){
    width: 610px;
    height: 515px;
    margin-left: -305px;
    top: -110px;
    margin-top: 0;
    background: radial-gradient(257.50px at 50% 50%, #5E6B95 0%, #3D496E 100%);
  }
`

export const Stars = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-left: -794px;
  margin-top: -600px;
  width: 1589px;
  height: 1049px;
  background-image: url(${stars});
  background-size: cover;
  z-index: 2;

  @media(max-width: ${Breakpoints.main}){
    width: 562px;
    height: 481px;
    margin-left: -281px;
    margin-top: 0;
    top: -120px;
  }
`

export const Monk = styled.img`
  width: 275px;
  height: 348px;
  margin-bottom: 50px;
  z-index: 3;

  @media(max-width: ${Breakpoints.main}){
    width: 189px;
    height: 239px;
    margin-bottom: 20px;
  }
`

export const Title = styled.h3`
  margin-bottom: 30px;
  z-index: 3;
`

export const Description = styled.div`
  margin-bottom: 58px;
  z-index: 3;
  font-size: 30px;
  font-weight: normal;

  @media(max-width: ${Breakpoints.main}){
    font-size: 18px;
  }
`

export const StyledButton = styled(Button)`
  z-index: 3;
  margin-bottom: 160px;
`
