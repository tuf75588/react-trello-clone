import React, { useRef } from 'react';
import { useDrop } from 'react-dnd';
import { ColumnContainer, ColumnTitle } from '../styles/styles';
import AddNewItem from './AddNewItem';
import Card from './Card';
import useAppState from '../hooks/useAppState';
import useItemDrag from '../hooks/useDrag';
import { DragItem } from '../DragItem';
import { isHidden } from '../utils/isHidden';
// INTERFACES
interface ColumnProps {
  text: string;
  id: string;
  index: number;
  isPreview?: boolean;
}

function Column({ text, index, id, isPreview }: ColumnProps) {
  const { state, dispatch } = useAppState();
  const [, drop] = useDrop({
    accept: ['CARD', 'COLUMN'],
    hover: (item: DragItem) => {
      if (item.type === 'COLUMN') {
        const dragIndex = item.index;
        const hoverIndex = index;
        dispatch({ type: 'MOVE_LIST', payload: { dragIndex, hoverIndex } });
        item.index = hoverIndex;
        if (dragIndex === hoverIndex) {
          return;
        }
      } else {
        // slightly different logic for dragging cards
        const dragIndex = item.index;
        const hoverIndex = 0;
        const sourceColumn = item.columnId;
        const targetColumn = id;
        if (targetColumn === sourceColumn) return;
        dispatch({
          type: 'MOVE_TASK',
          payload: { dragIndex, hoverIndex, sourceColumn, targetColumn },
        });
        item.index = hoverIndex;
        item.columnId = targetColumn;
      }
      // make sure we do not drop into the original column
    },
  });

  const { drag } = useItemDrag({ type: 'COLUMN', id, index, text });
  const ref = useRef<HTMLDivElement>(null);
  drag(drop(ref));
  return (
    <ColumnContainer
      isPreview={isPreview}
      ref={ref}
      isHidden={isHidden(isPreview, state.draggedItem, 'COLUMN', id)}
    >
      <ColumnTitle>{text}</ColumnTitle>
      {state.lists[index].tasks.map((card, i) => {
        return (
          <Card
            text={card.text}
            id={card.id}
            key={card.id}
            index={i}
            columnId={id}
          />
        );
      })}
      <AddNewItem
        toggleButtonText="+ Add another task"
        onAdd={(text) => {
          dispatch({ type: 'ADD_TASK', payload: { text, columnId: id } });
        }}
        dark
      />
    </ColumnContainer>
  );
}

export default Column;
