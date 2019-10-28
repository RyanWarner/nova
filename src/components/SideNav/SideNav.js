import React, { Component } from 'react'
import { Home, Package, Shield, Sliders, HardDrive } from 'react-feather'
import { withRouter } from 'react-router-dom'

import * as S from './styles'
import docs from 'app/data/docs'
import { Colors } from 'app/styles'

const docsMap = {
  gettingStarted: {
    title: 'Getting started',
    id: 'getting-started',
    Icon: Home,
    pages: [
      'installation'
    ]
  },
  ui: {
    title: 'UI & Components',
    id: 'ui-and-components',
    Icon: Package,
    pages: [
      'ui-kit',
      'forms',
      'modals'
    ]
  },
  'state-and-api': {
    title: 'State & API',
    id: 'state-and-api',
    Icon: Shield,
    pages: [
      'redux',
      'api-middleware',
      'local-storage'
    ]
  },
  tooling: {
    title: 'Tooling',
    id: 'tooling',
    Icon: Sliders,
    pages: [
      'storybook',
      'amplitude',
      'sentry',
      'plop'
    ]
  },
  deployment: {
    title: 'Deployment',
    id: 'deployment',
    Icon: HardDrive,
    pages: [
      'aws',
      'circle-ci'
    ]
  }
}

@withRouter
export default class SideNav extends Component {
  render () {
    const { pathname } = this.props.location

    return (
      <S.SideNavComponent>
        <S.StyledWordmark />
        {Object.values(docsMap).map((section, index) => {
          const selected = pathname.split('/')[2] === section.id
          const url = `/docs/${section.id}/${section.pages[0]}`

          return (
            <S.NavSection key={index}>
              <S.SectionTitle selected={selected} to={url}>
                <S.IconWrap>
                  <section.Icon color={selected ? Colors.brand30 : Colors.gray20} />
                </S.IconWrap>
                {section.title}
              </S.SectionTitle>

              {section.pages.map((item, index) => {
                const url = `/docs/${section.id}/${item}`
                const selected = this.props.location.pathname === url

                return (
                  <S.NavItemWrap key={index}>
                    <S.NavItem to={url} selected={selected}>
                      {docs[section.id][item].meta.title}
                    </S.NavItem>
                  </S.NavItemWrap>
                )
              })}
            </S.NavSection>
          )
        })}
      </S.SideNavComponent>
    )
  }
}
