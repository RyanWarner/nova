import React from 'react'
import styled from 'styled-components'

import {
  ReactLogo,
  Redux,
  ReactRouter,
  Cypress,
  Webpack,
  Storybook,
  Amplitude,
  Sentry,
  Aws,
  CircleCI
} from 'app/ui-kit/Icons'

import { babelLogo, nails } from 'app/assets/images'

const Logo = styled.img`
  width: 30px;
  height: 30px;
  margin: 5px;
`

const BabelLogo = styled.img`
  width: 38px;
  margin: 1px;
`

export default {
  react: {
    display: 'React',
    description: 'Industry leading UI framework',
    url: '/docs',
    icon: <ReactLogo />
  },
  styledComponents: {
    display: 'Styled Components',
    description: 'Mature css-in-js solution',
    url: '/docs',
    icon: <Logo src={nails} />
  },
  amplitude: {
    display: 'Amplitude',
    description: 'Analytics',
    url: '/docs',
    icon: <Amplitude />
  },
  redux: {
    display: 'Redux',
    description: 'Predictable state container',
    url: '/docs',
    icon: <Redux />
  },
  webpack: {
    display: 'Webpack',
    description: 'Module bundler',
    url: '/docs',
    icon: <Webpack />
  },
  sentry: {
    display: 'Sentry',
    description: 'Error reporting',
    url: '/docs',
    icon: <Sentry />
  },
  reactRouter: {
    display: 'React Router',
    description: 'Declarative routing for React',
    url: '/docs',
    icon: <ReactRouter />
  },
  babel: {
    display: 'Babel',
    description: 'JavaScript from the future',
    url: '/docs',
    icon: <BabelLogo src={babelLogo} />
  },
  aws: {
    display: 'Amazon Web Services',
    description: 'Hosting, DNS, CDN',
    url: '/docs',
    icon: <Aws />
  },
  cypress: {
    display: 'Testing',
    description: 'Coming soon!',
    url: '/docs',
    icon: <Cypress />,
    comingSoon: true
  },
  storybook: {
    display: 'Storybook',
    description: 'Component driven development',
    url: '/docs',
    icon: <Storybook />
  },
  circleci: {
    display: 'CircleCI',
    description: 'Continuous delivery',
    url: '/docs',
    icon: <CircleCI />
  }
}
