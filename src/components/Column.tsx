import React from 'react';
import { ColumnContainer, ColumnTitle } from '../styles/styles';
import AddNewItem from './AddNewItem';

// INTERFACES
interface ColumnProps {
  title?: string;
}

function Column({ title, children }: React.PropsWithChildren<ColumnProps>) {
  return (
    <ColumnContainer>
      <ColumnTitle>{title}</ColumnTitle>
      {children}
      <AddNewItem
        toggleButtonText="+ Add another task"
        onAdd={() => console.log('adding another task to the list')}
        dark
      />
    </ColumnContainer>
  );
}

export default Column;
