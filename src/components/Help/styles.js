import styled from 'styled-components'

import { Colors } from 'app/styles'
import FeatureCard from '../FeatureCard/FeatureCard'
import HighlightLink from '../HighlightLink/HighlightLink'

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
  font-size: 18px;
  width: 320px;
  text-align: center;
  opacity: 0.85;
  margin-top: 10px;
`

export const Features = styled.div`
  display: flex;
  margin-top: 40px;
`

export const StyledFeatureCard = styled(FeatureCard)`
  margin-right: 15px;

  &:last-child {
    margin: 0;
  }
`

export const StyledHighlightLink = styled(HighlightLink)`
  margin-top: 50px;
  color: ${Colors.beige10};
`
