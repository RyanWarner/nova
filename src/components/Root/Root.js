import React, { Component } from 'react'
import { renderRoutes } from 'react-router-config'
import Helmet from 'react-helmet'
import { withRouter, matchPath } from 'react-router-dom'

import * as S from './styles'
import { Global, Fonts, Type } from 'app/styles'
import ModalController from '../modals/ModalController'
import ogImage from '../../assets/images/ogImage.png'
import favicon from '../../assets/images/favicon.png'

const cdn = process.env.CDN || ''

@withRouter
export default class Root extends Component {
  componentDidUpdate = (prevProps) => {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0)
    }
  }

  render () {
    const { location } = this.props
    const activeRoute = this.props.route.routes.find(route => matchPath(location.pathname, route))
    const basePath = cdn ? cdn.slice(0, -1) : '' // remove trailing slash
    const ogUrl = `${basePath}${location.pathname}`
    const ogImageUrl = `${basePath}/${ogImage}`

    return <S.Wrap>
      <Helmet
        title={activeRoute.meta.title}
        meta={[
          { name: 'description', content: activeRoute.meta.description },
          { property: 'og:description', content: activeRoute.meta.description },
          { property: 'og:title', content: activeRoute.meta.title },
          { property: 'og:image', content: cdn + ogImage },
          { property: 'og:image:width', content: '1200' },
          { property: 'og:image:height', content: '630' },
          { property: 'og:image:secure_url', content: ogImageUrl },
          { property: 'og:type', content: 'website' },
          { property: 'og:url', content: ogUrl },
          { name: 'twitter:site', content: '@reactsproutv2' },
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:image', content: ogImageUrl }
        ]}
        link={[
          { rel: 'icon',
            type: 'image/png',
            href: favicon
          }
        ]}
      />
      <Global.GlobalStyle />
      <Fonts.GlobalStyle />
      <Type.GlobalStyle />
      <ModalController />
      <S.MaxWidth>
        { renderRoutes(this.props.route.routes) }
      </S.MaxWidth>
    </S.Wrap>
  }
}
