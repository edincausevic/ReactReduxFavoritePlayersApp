import { SHOW_MODAL, HIDE_MODAL } from '../actions/types';

const initialState = {
  modalVisibility: false,
  blackBackVisibility: false,
  playerName: ''
}

export default function(state = initialState, action) {
  switch(action.type) {

    case SHOW_MODAL:
      return {
        ...state,
        playerName: action.payload.name,
        modalVisibility: true,
        blackBackVisibility: true
      }

    case HIDE_MODAL:
      return {
        ...initialState
      }

    default:
      return state;
  }
}