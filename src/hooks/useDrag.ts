import { useDrag } from 'react-dnd';
import useAppState from './useAppState';
import { DragItem } from '../DragItem';

const useItemDrag = (item: DragItem) => {
  const { dispatch } = useAppState();
  const [, drag] = useDrag({
    item,
    begin: () =>
      dispatch({
        type: 'SET_DRAGGED_ITEM',
        payload: item,
      }),
    end: () => dispatch({ type: 'SET_DRAGGED_ITEM', payload: undefined }),
  });
  return { drag };
};

export default useItemDrag;
