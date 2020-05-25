import { DragItem } from '../DragItem';

export type Action =
  | {
      type: 'SET_DRAGGED_ITEM';
      payload: DragItem | undefined;
    }
  | {
      type: 'ADD_LIST';
      payload: string;
    }
  | {
      type: 'ADD_TASK';
      payload: { text: string; columnId: string };
    };
// set to undefined if we are not dragging anything
