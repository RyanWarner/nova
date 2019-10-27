import React from 'react'

import * as S from './styles'
import { techList } from 'app/data'
import { Tech } from 'app/components'

export default props =>
  <S.TechListComponent {...props}>
    <S.Title>Tech stack</S.Title>
    <S.Grid>
      {Object.values(techList).map(item =>
        <Tech data={item} key={item.display} />
      )}
    </S.Grid>
    <S.StyledHighlightLink text='Read more' icon='rightArrow' />
  </S.TechListComponent>
