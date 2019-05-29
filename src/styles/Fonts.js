import { createGlobalStyle } from 'styled-components'

import CabinRegularTTF from '../assets/fonts/Cabin-Regular.ttf'
import CabinRegularWOFF from '../assets/fonts/Cabin-Regular.woff'
import CabinRegularWOFF2 from '../assets/fonts/Cabin-Regular.woff2'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'PensumPro';
    src: url(${CabinRegularTTF}) format('truetype'),
         url(${CabinRegularWOFF}) format('woff'),
         url(${CabinRegularWOFF2}) format('woff2');
    font-weight: normal;
    font-style: normal;
  }
`
