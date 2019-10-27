import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

export const NavLinksComponent = styled.div``

const navItemShared = css`
  margin-right: 26px;
`

export const A = styled.a`
  ${navItemShared};
`

export const NavLink = styled(Link)`
  ${navItemShared};
`
