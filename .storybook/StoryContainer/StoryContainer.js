import React from 'react'

import * as S from './styles'
import { Type } from 'app/styles'
import 'app/styles/FontFaces.css'

export default function StoryContainer (storyFn) {
  return <S.StoryContainerComponent>
    <Type.GlobalStyle />
    { storyFn() }
  </S.StoryContainerComponent>
}
