import styled from 'styled-components'

import { Colors, Type } from 'app/styles'

export const HighlightLinkComponent = styled.a`
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
    background: ${Colors.orange30};
    z-index: -1;
    transition: all 120ms ease-in-out;
  }
`
