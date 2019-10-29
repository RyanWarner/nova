import { Root, AppRoot } from 'app/components'
import { Home, Faq, Privacy, NotFound } from 'app/pages'
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
        path: '/faq',
        exact: true,
        component: Faq,
        meta: {
          title: 'Nova - FAQ',
          description: 'Frequently asked questions'
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
