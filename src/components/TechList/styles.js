import styled from 'styled-components'

import { Breakpoints, Colors, Mixins } from 'app/styles'
import HighlightLink from '../HighlightLink/HighlightLink'

export const TechListComponent = styled.div`
  flex-direction: column;
  align-items: center;
  display: flex;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 100px;
  grid-row-gap: 24px;
  ${Mixins.widthContainer};

  @media(max-width: ${Breakpoints.main}) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 1fr);
    grid-column-gap: 50px;
  }
`

export const Title = styled.h3`
  color: ${Colors.gray20};
  margin: 70px 0 55px 0;
`

export const StyledHighlightLink = styled(HighlightLink)`
  margin: 75px 0;
`
