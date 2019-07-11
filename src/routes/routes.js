import Root from '../components/Root/Root'
import Home from '../pages/Home'
import NotFound from '../components/NotFound/NotFound'

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
