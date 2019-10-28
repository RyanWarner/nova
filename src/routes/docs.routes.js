import { Docs } from 'app/pages'
import { DocsRoot } from 'app/components'

export default [{
  path: '/docs',
  component: DocsRoot,
  routes: [{
    path: '/docs',
    exact: true,
    component: Docs,
    meta: {
      title: 'Yawnch - Docs',
      description: 'Documentation'
    }
  }, {
    path: '/docs/:doc',
    exact: true,
    component: Docs,
    meta: {
      title: 'Yawnch - Docs',
      description: 'Documentation'
    }
  }]
}]
