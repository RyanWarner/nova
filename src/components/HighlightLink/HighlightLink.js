import React from 'react'

import * as S from './styles'

export default ({ text, icon, color, ...rest }) =>
  <S.HighlightLinkComponent {...rest}>
    <S.Text color={color}>{text}</S.Text>
    <S.Arrow />
  </S.HighlightLinkComponent>
