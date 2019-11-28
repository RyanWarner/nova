import { Root, AppRoot } from 'app/components'
import { Home, Privacy, NotFound } from 'app/pages'
import docsRoutes from './docs.routes'

export default [{
  component: Root,
  path: '/',
  routes: [
    ...docsRoutes, {
      path: '/',
      component: AppRoot,
      routes: [{
        path: '/',
        exact: true,
        component: Home,
        meta: {
          title: 'Nova',
          description: 'An opinionated starting point for web applications.'
        }
      }, {
        path: '/privacy',
        exact: true,
        component: Privacy,
        meta: {
          title: 'Nova - Privacy Policy',
          description: 'Privacy policy'
        }
      }, {
        path: '*',
        component: NotFound,
        meta: {
          title: 'Nova - Not found',
          description: 'An opinionated starting point for web applications.'
        }
      }]
    }]
}]
