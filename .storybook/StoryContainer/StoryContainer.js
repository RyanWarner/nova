import React from 'react'
import { ConnectedRouter as Router, routerMiddleware } from 'connected-react-router'
import { Provider } from 'react-redux'
import { configureStore } from '../../src/store'
import createHistory from '../../src/store/history'

import * as S from './styles'
import { Global, Type } from 'app/styles'
import 'app/styles/FontFaces.css'

const browserHistory = createHistory()

const store = configureStore({
  initialState: {},
  middleware: [routerMiddleware(browserHistory)]
})

export default function StoryContainer (storyFn) {
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        <S.StoryContainerComponent>
          <Global.GlobalStyle />
          <Type.GlobalStyle />
          { storyFn() }
        </S.StoryContainerComponent>
      </Router>
    </Provider>
  )
}
