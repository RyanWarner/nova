import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { withRouter, matchPath } from 'react-router-dom'

import { favicon } from 'app/assets/images'

@withRouter
export default class AppHelmet extends Component {
  getActiveRoute = ({ pathname, route }) => {
    const activeRoute = route.routes.find(route => matchPath(pathname, route))
    if (activeRoute.routes) return this.getActiveRoute({ pathname, route: activeRoute })
    return activeRoute
  }

  render () {
    const { location, route } = this.props
    const { pathname } = location
    const activeRoute = this.getActiveRoute({ pathname, route })

    if (!activeRoute) {
      console.warn('No active route found: ', activeRoute)
      return null
    }

    return (
      <Helmet
        title={activeRoute.meta.title}
        meta={[
          { name: 'description', content: activeRoute.meta.description },
          { property: 'og:description', content: activeRoute.meta.description },
          { property: 'og:title', content: activeRoute.meta.title }
        ]}
        link={[
          {
            rel: 'icon',
            type: 'image/png',
            href: favicon
          }
        ]}
      />
    )
  }
}
