import React, { useRef } from 'react';
import { CardDragItem } from '../DragItem';
import { useDrop } from 'react-dnd';
import { CardContainer } from '../styles/styles';
import useItemDrag from '../hooks/useDrag';
import useAppState from '../hooks/useAppState';
// INTERFACES
interface CardProps {
  text: string;
  index: number;
  id: string;
  columnId: string;
  isPreview?: boolean;
}

function Card({ text, index, id, isPreview, columnId }: CardProps) {
  const { state, dispatch } = useAppState();
  const ref = useRef<HTMLDivElement>(null);
  const { drag } = useItemDrag({ type: 'CARD', id, index, text, columnId });
  const [, drop] = useDrop({
    accept: 'CARD',
    hover(item: CardDragItem) {
      if (item.id === id) {
        return;
      }

      const dragIndex = item.index;
      const hoverIndex = index;
      const sourceColumn = item.columnId;
      const targetColumn = columnId;

      dispatch({
        type: 'MOVE_TASK',
        payload: { dragIndex, hoverIndex, sourceColumn, targetColumn },
      });
      item.index = hoverIndex;
      item.columnId = targetColumn;
    },
  });

  drag(drop(ref));
  return <CardContainer ref={ref}>{text}</CardContainer>;
}

export default Card;
