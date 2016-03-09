export const showToast = ({ dispatch }, message, type) => {
  dispatch(types.ADD_TOAST_MESSAGE, message, type)
  window.setTimeout(() => {
    dispatch(types.REMOVE_TOAST_MESSAGE)
  }, 10000)
}

export const clearToasts = ({ dispatch }) => {
  dispatch(types.CLEAR_TOASTS)
}
