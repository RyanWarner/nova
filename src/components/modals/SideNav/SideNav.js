import React from 'react'

import * as S from './styles'
import SideNav from '../../SideNav/SideNav'

export default () =>
  <S.SideNavModalComponent>
    <SideNav options={{ mobile: true }} />
  </S.SideNavModalComponent>
