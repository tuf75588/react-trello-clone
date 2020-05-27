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
    accept: 'COLUMN',
    hover: (item: DragItem) => {
      const dragIndex = item.index;
      const hoverIndex = index;
      // make sure we do not drop into the original column
      if (dragIndex === hoverIndex) {
        return;
      }
      dispatch({ type: 'MOVE_LIST', payload: { dragIndex, hoverIndex } });
      item.index = hoverIndex;
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
