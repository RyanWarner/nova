import styled from 'styled-components'

import { Sizes, Type } from 'app/styles'

export const DocsPage = styled.div`
  margin-left: ${Sizes.sideNavWidth};
  padding: 30px 50px;

  h1 {
    ${Type.header2};
    margin: 0;
  }
`
