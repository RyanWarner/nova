// https://storybook.js.org/docs/configurations/theming/
import { create } from '@storybook/theming'

import { Colors, Type } from 'app/styles'
// import { logo } from 'app/assets/images'

export default create({
  // base: Colors.background,

  colorPrimary: Colors.brand,
  colorSecondary: Colors.blue,
  sidebarSvgIconColor: Colors.brand,

  // UI
  // appBg: Colors.mediumGray,
  // appContentBg: Colors.white,
  // appBorderColor: Colors.mediumGray,
  appBorderRadius: 6,

  // Typography
  fontBase: Type.fontFace,
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'black',
  barSelectedColor: Colors.brand,
  // barBg: Colors.white,

  // Form colors
  // inputBg: Colors.background,
  inputBorder: 'transparent',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'Yawnch - Nova',
  brandUrl: 'https://yawnch.com',
  // brandImage: logo,
});
