import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { Sizes } from 'app/styles'
import Wordmark from '../Wordmark/Wordmark'

export const SideNavComponent = styled.div`
  width: ${Sizes.sideNavWidth};
  background-color: rgba(255, 255, 255, 0.80);
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
`

export const StyledWordmark = styled(Wordmark)`
  margin-top: 40px;
  margin-left: 15px;
`

export const NavItem = styled(Link)`
  display: block;
`
