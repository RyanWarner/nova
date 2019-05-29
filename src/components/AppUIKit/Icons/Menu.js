import React from 'react'

import { Colors } from 'app/styles'

export default (props) =>
  <svg {...props} width='30' height='22' viewBox='0 0 30 22' fill='none'>
    <line x1='29' y1='1' x2='1' y2='1' stroke={Colors.peach} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
    <line x1='29' y1='11' x2='1' y2='11' stroke={Colors.peach} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
    <line x1='29' y1='21' x2='1' y2='21' stroke={Colors.peach} strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
