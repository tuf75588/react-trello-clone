import { AppState } from '../context/index';
import { Action } from '../actions/index';
import findItemIndexById from '../utils/findItemByIndexId';

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
      const targetLaneIndex = findItemIndexById(
        state.lists,
        action.payload.columnId
      );
      state.lists[targetLaneIndex].tasks.push({
        id: v4(),
        text: action.payload.text,
      });
      return {
        ...state,
      };
    }
    case 'SET_DRAGGED_ITEM': {
      return { ...state, draggedItem: action.payload };
    }

    default:
      return state;
  }
}

export default appReducer;
