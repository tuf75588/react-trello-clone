import React, { useRef } from 'react';
import { ColumnContainer, ColumnTitle } from '../styles/styles';
import AddNewItem from './AddNewItem';
import Card from './Card';
import useAppState from '../hooks/useAppState';
import useItemDrag from '../hooks/useDrag';
// INTERFACES
interface ColumnProps {
  text: string;
  id: string;
  index: number;
}

function Column({ text, index, id }: ColumnProps) {
  const { state, dispatch } = useAppState();
  const { drag } = useItemDrag({ type: 'COLUMN', id, index, text });
  const ref = useRef<HTMLDivElement>(null);
  drag(ref);
  return (
    <ColumnContainer ref={ref}>
      <ColumnTitle>{text}</ColumnTitle>
      {state.lists[index].tasks.map((card, i) => {
        return <Card text={card.text} key={card.id} index={i} />;
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
