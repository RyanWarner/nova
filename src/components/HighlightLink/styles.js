import styled from 'styled-components'

import { Colors, Type } from 'app/styles'
import { ArrowRight } from 'react-feather'

export const HighlightLinkComponent = styled.a`
  display: flex;
  align-items: center;
  color: ${Colors.gray10};
`

export const Text = styled.p`
  position: relative;
  z-index: 1;
  font-weight: ${Type.fontWeights.semiBold};
  font-size: 16px;

  &:after {
    content: '';
    display: block;
    position: absolute;
    bottom: 0;
    height: 7px;
    left: 0;
    right: 0;
    background: ${props => Colors[props.color || 'orange40']};
    z-index: -1;
    transition: all 120ms ease-in-out;
  }
`

export const Arrow = styled(ArrowRight)`
  width: 18px;
  margin-left: 8px;
`
