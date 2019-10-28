import React from 'react'

import * as S from './styles'

export default ({ icon, title, ...rest }) =>
  <S.FeatureCardComponent {...rest}>
    {icon}
    <S.Title>{title}</S.Title>
  </S.FeatureCardComponent>
