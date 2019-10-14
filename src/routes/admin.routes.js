import AdminRoot from 'app/components/admin/AdminRoot/AdminRoot'
import AdminUtilities from 'app/pages/admin/AdminUtilities'

export default [{
  path: '/admin',
  component: AdminRoot,
  meta: {
    title: 'Yawnch Admin'
  },
  routes: [{
    path: '/admin',
    exact: true,
    component: AdminUtilities,
    meta: {
      title: 'Yawnch Admin'
    }
  }, {
    path: '/admin/utilities',
    exact: true,
    component: AdminUtilities,
    meta: {
      title: 'Admin - Icons'
    }
  }]
}]
