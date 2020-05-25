import { DragItem } from '../DragItem';

export type Action =
  | {
      type: 'ADD_LIST';
      payload: string;
    }
  | {
      type: 'ADD_TASK';
      payload: { text: string; taskId: string };
    }
  | {
      type: 'MOVE_LIST';
      payload: {
        dragIndex: number;
        hoverIndex: number;
      };
    }
  // set to undefined if we are not dragging anything
  | {
      type: 'SET_DRAGGED_ITEM';
      payload: DragItem | undefined;
    };
