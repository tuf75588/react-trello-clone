import React from 'react';
import { ColumnContainer, ColumnTitle } from '../styles/styles';
import AddNewItem from './AddNewItem';
import Card from './Card';
import useAppState from '../hooks/useAppState';
// INTERFACES
interface ColumnProps {
  title?: string;
  id?: string;
  index: number;
}

function Column({ title, index, id }: React.PropsWithChildren<ColumnProps>) {
  const { state, dispatch } = useAppState();
  return (
    <ColumnContainer>
      <ColumnTitle>{title}</ColumnTitle>
      {state.lists[index].tasks.map((card, i) => {
        return <Card text={card.text} key={card.id} index={i} />;
      })}
      <AddNewItem
        toggleButtonText="+ Add another task"
        onAdd={(text) => {
          dispatch({ type: 'ADD_TASK', payload: { text, taskId: id } });
        }}
        dark
      />
    </ColumnContainer>
  );
}

export default Column;
