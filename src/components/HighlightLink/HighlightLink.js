import React from 'react'

import * as S from './styles'

export default ({ text, icon, ...rest }) =>
  <S.HighlightLinkComponent {...rest}>
    {text}
  </S.HighlightLinkComponent>
