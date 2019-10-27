import React, { Component } from 'react'

import * as S from './styles'
import { techList } from 'app/data'
import { Tech } from 'app/components'

export default class TechList extends Component {
  render () {
    return (
      <S.TechListComponent>
        {Object.values(techList).map(item =>
          <Tech data={item} key={item.display} />
        )}
      </S.TechListComponent>
    )
  }
}
