import { AppState } from '../context/index';
import { Action } from '../actions/index';
import { v4 } from 'uuid';
function appReducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'ADD_LIST': {
      return {
        ...state,
        lists: [...state.lists, { id: v4(), tasks: [], text: action.payload }],
      };
    }
    case 'ADD_TASK': {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
}

export default appReducer;
