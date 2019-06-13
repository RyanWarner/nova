
// import { ActionTypes } from './actions'

export const initialState = { topicsCarouselIndex: 0 }

export default (state = initialState, action) => {
  const { type } = action
  switch (type) {
    case 'SET_ACTIVE_MODAL':
      return Object.assign({}, state, { activeModal: action.modal })
  }

  return state
}
