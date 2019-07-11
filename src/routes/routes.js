import { Root } from 'app/components'
import { Home, NotFound } from 'app/pages'

export default [{
  component: Root,
  routes: [{
    path: '/',
    exact: true,
    component: Home,
    meta: {
      title: 'Home',
      description: 'React Starter by Yawnch'
    }
  }, {
    path: '*',
    component: NotFound,
    meta: {
      title: 'Not found',
      description: '404 - Not Found'
    }
  }]
}]
