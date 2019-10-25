import { css } from 'styled-components'

import { Colors, Type } from 'app/styles'

export const base = css`
  border-radius: 4px;
  box-shadow: none;
  border: 0;
  height: 37px;
  padding: 0 10px;
`

export const label = css`
  ${Type.body}
  position: relative;
  color: ${Colors.font10};
  display: block;
`

export const error = css`
  ${Type.smallBody}
  color: ${Colors.error};
  position: relative;
  height: 20px;
  margin: 3px 0 0 3px;
`
