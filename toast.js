import {
  ADD_TOAST_MESSAGE,
  REMOVE_TOAST_MESSAGE,
  CLEAR_TOASTS
} from '../mutation-types'

export const toastInitialState = {
  type: '',
  message: []
}
export const toastMutations = {
  [ADD_TOAST_MESSAGE] (state, message, type) {
    var initialMessage = state.toast.message
    for (var m in initialMessage) {
      if (initialMessage[m] === message) {
        return
      }
    }
    state.toast.type = type
    state.toast.message.push(message)
  },
  [REMOVE_TOAST_MESSAGE] (state) {
    state.toast.message.shift()
    if (state.toast.message.lenght === 0) {
      state.toast.type = ''
    }
  },
  [CLEAR_TOASTS] (state) {
    state.toast.message = []
  }
}
