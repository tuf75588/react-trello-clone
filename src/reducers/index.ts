import { AppState } from '../context/index';
import { Action } from '../actions/index';
import findItemIndexById from '../utils/findItemByIndexId';

import { v4 } from 'uuid';
import moveItem from '../utils/moveItem';
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
        action.payload.taskId
      );
      state.lists[targetLaneIndex].tasks.push({
        id: v4(),
        text: action.payload.text,
      });
      return {
        ...state,
      };
    }
    case 'MOVE_LIST': {
      const { dragIndex, hoverIndex } = action.payload;
      const lists = [...state.lists];
      state.lists = moveItem(lists, dragIndex, hoverIndex);
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
