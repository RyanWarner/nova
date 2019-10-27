import styled from 'styled-components'

import { Colors } from 'app/styles'

export const NotFoundPage = styled.div`
  min-height: calc(100vh - 140px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${Colors.beige10};
  background-color: ${Colors.gray10};
  margin-top: -140px;
  padding-top: 140px;
`

export const Title = styled.h3`
  margin-bottom: 30px;
  z-index: 3;
`
