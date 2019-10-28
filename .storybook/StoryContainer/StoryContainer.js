import React from 'react'

import * as S from './styles'
import { Global, Type } from 'app/styles'
import 'app/styles/FontFaces.css'

export default function StoryContainer (storyFn) {
  return (
    <S.StoryContainerComponent>
      <Global.GlobalStyle />
      <Type.GlobalStyle />
      { storyFn() }
    </S.StoryContainerComponent>
  )
}
