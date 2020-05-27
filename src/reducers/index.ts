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
    case 'MOVE_LIST': {
      const { dragIndex, hoverIndex } = action.payload;
      state.lists = moveItem(state.lists, dragIndex, hoverIndex);
      return {
        ...state,
      };
    }
    case 'MOVE_TASK': {
      const {
        dragIndex,
        hoverIndex,
        sourceColumn,
        targetColumn,
      } = action.payload;
      const sourceLane = findItemIndexById(state.lists, sourceColumn);
      const targetLaneIndex = findItemIndexById(state.lists, targetColumn);
      const item = state.lists[sourceLane].tasks.splice(dragIndex, 1)[0];
      state.lists[targetLaneIndex].tasks.splice(hoverIndex, 0, item);
      return { ...state };
    }

    default:
      return state;
  }
}

export default appReducer;
