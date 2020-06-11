import React from 'react'

import * as S from './styles'

export default () =>
  <S.HelpComponent>
    <S.Title>Need help?</S.Title>
    <S.Description>
      Reach out to me on Twitter
    </S.Description>
    <S.Features>
      <a href='https://twitter.com/RyanWarnerCodes'>
        <S.StyledFeatureCard title='@RyanWarnerCodes' icon={<S.TwitterLogo />} />
      </a>
    </S.Features>
  </S.HelpComponent>
