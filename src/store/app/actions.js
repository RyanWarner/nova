export const ActionTypes = {
  SET_ACTIVE_MODAL: 'SET_ACTIVE_MODAL',
  SET_FLOATING_PERSON_NUM: 'SET_FLOATING_PERSON_NUM',
  SET_TOPICS_CAROUSEL_INDEX: 'SET_TOPICS_CAROUSEL_INDEX'
}

export const closeAllModals = () => ({ type: ActionTypes.SET_ACTIVE_MODAL, modal: null })
export const setFloatingPersonNum = (floatingPersonNum) => ({ type: ActionTypes.SET_FLOATING_PERSON_NUM, floatingPersonNum })
export const setTopicsCarouselIndex = (topicsCarouselIndex) => ({ type: ActionTypes.SET_TOPICS_CAROUSEL_INDEX, index: topicsCarouselIndex })
export const openModal = ({ modalName, modalState }) => ({
  type: ActionTypes.SET_ACTIVE_MODAL,
  modal: { name: modalName, modalState }
})
