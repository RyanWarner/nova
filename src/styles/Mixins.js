import { css } from 'styled-components'

import { Breakpoints, Sizes } from 'app/styles'

export const widthContainer = css`
  width: 1000px;
  padding: 0 ${Sizes.xAppPadding};

  @media(max-width: ${Breakpoints.mobile}) {
    width: 100vw;
    padding: 0 ${Sizes.xAppPaddingMobile};
  }
`
