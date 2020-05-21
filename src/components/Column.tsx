import React from 'react';
import { ColumnContainer, ColumnTitle } from '../styles/styles';

// INTERFACES
interface ColumnProps {
  title?: string;
}

function Column({ title, children }: React.PropsWithChildren<ColumnProps>) {
  return (
    <ColumnContainer>
      <ColumnTitle>{title}</ColumnTitle>
      {children}
    </ColumnContainer>
  );
}

export default Column;
