
// import { ActionTypes } from './actions'

export const initialState = { topicsCarouselIndex: 0 }

export default (state = initialState, action) => {
  const { type } = action
  switch (type) {
    case 'SET_ACTIVE_MODAL':
      return Object.assign({}, state, { activeModal: action.modal })
    case 'SET_FLOATING_PERSON_NUM':
      return Object.assign({}, state, { floatingPersonNum: action.floatingPersonNum })
    case 'SET_TOPICS_CAROUSEL_INDEX':
      return Object.assign({}, state, { topicsCarouselIndex: action.index })
  }

  return state
}
