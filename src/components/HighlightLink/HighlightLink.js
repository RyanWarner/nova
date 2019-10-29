import React from 'react'

import * as S from './styles'

export default ({ text, icon, ...rest }) =>
  <S.HighlightLinkComponent {...rest}>
    <S.Text>{text}</S.Text>
    <S.Arrow />
  </S.HighlightLinkComponent>
