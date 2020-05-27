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
        hoverIndex,
        dragIndex,
        targetColumn,
        sourceColumn,
      } = action.payload;
      const sourceLane = findItemIndexById(
        state.lists,
        action.payload.sourceColumn
      );
      const targetLaneIndex = findItemIndexById(state.lists, targetColumn);
      console.log(sourceLane);
      return {
        ...state,
      };
    }

    default:
      return state;
  }
}

export default appReducer;
