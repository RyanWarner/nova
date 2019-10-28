import React, { Component } from 'react'

import * as S from './styles'

// function importAll (r) {
//   return r.keys().map(key => ({
//     module: r(key),
//     fileName: key
//   }))
// }

function importAll (r) {
  const allMdx = {}

  r.keys().forEach(key => {
    const split = key.split('/')
    const section = split[1]
    const name = split[split.length - 1]
    const normalizedKey = name.replace('.mdx', '')
    if (!allMdx[section]) allMdx[section] = {}
    allMdx[section][normalizedKey] = r(key)
  })

  return allMdx
}

const docsList = importAll(require.context('../../data/docs/', true, /\.mdx$/))
console.log('docsList', docsList)

const docsMap = {
  gettingStarted: {
    title: 'Getting started',
    id: 'getting-started',
    icon: '',
    pages: [
      'installation'
    ]
  },
  ui: {
    title: 'UI & Components',
    id: 'ui-and-components',
    icon: '',
    pages: [
      'ui-kit',
      'forms',
      'modals'
    ]
  }
}

export default class SideNav extends Component {
  render () {
    return (
      <S.SideNavComponent>
        <S.StyledWordmark />
        {Object.values(docsMap).map((section, index) => {
          return section.pages.map((item, index) => {
            const url = `/docs/${section.id}/${item}`
            return (
              <S.NavItem key={index} to={url}>
                {docsList[section.id][item].meta.title}
              </S.NavItem>
            )
            {/* const MDXComponent = docsList[item].default
            return <MDXComponent key={index} /> */}
          })
        })}
      </S.SideNavComponent>
    )
  }
}
