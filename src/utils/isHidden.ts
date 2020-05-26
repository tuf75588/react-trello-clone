import { DragItem } from '../DragItem';

/*
this function compares the type and id of the currently dragged item with the type
and id we pass to it as arguments.
*/

export const isHidden = (
  draggedItem: DragItem | undefined,
  itemType: string,
  id: string
): boolean => {
  return (
    // type cast to true or false
    !!draggedItem && draggedItem.type === itemType && draggedItem.id === id
  );
};
