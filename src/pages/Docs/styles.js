import styled from 'styled-components'

import { Colors, Sizes, Type } from 'app/styles'

export const DocsPage = styled.div`
  margin-left: ${Sizes.sideNavWidth};
  padding: 30px 50px;
  max-width: 700px;
  box-sizing: border-box;

  h1 {
    ${Type.header2};
    margin: 0 0 30px 0;
  }

  p {
    line-height: 180%;
  }

  li {
    line-height: 220%;
  }

  code {
    background-color: rgba(0, 0, 0, 0.11);
    padding: 3px 6px;
    border-radius: 4px;
    font-family: ${Type.monospace};
  }

  pre {
    background-color: ${Colors.gray10};
    color: ${Colors.beige20};
    padding: 16px 22px;
    border-radius: 6px;
    line-height: 150%;

    code {
      background-color: transparent;
      padding: 0;
      border-radius: 0;
    }
  }
`
