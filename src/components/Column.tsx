import React from 'react';
import { ColumnContainer, ColumnTitle } from '../styles/styles';
import AddNewItem from './AddNewItem';
import Card from './Card';
import useAppState from '../hooks/useAppState';
// INTERFACES
interface ColumnProps {
  title?: string;
  index: number;
}

function Column({ title, index }: React.PropsWithChildren<ColumnProps>) {
  const { state } = useAppState();
  return (
    <ColumnContainer>
      <ColumnTitle>{title}</ColumnTitle>
      {state.lists[index].tasks.map((card) => {
        return <Card text={card.text} key={card.id} />;
      })}
      <AddNewItem
        toggleButtonText="+ Add another task"
        onAdd={() => console.log('adding another task to the list')}
        dark
      />
    </ColumnContainer>
  );
}

export default Column;
