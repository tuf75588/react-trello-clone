import React from 'react';
import { CardDragItem } from '../DragItem';
import { useDrop } from 'react-dnd';
import { CardContainer } from '../styles/styles';

// INTERFACES
interface CardProps {
  text: string;
  index: number;
  id: string;
  columnId: string;
  isPreview?: boolean;
}

function Card({ text, index, id, isPreview, columnId }: CardProps) {
  const [, drop] = useDrop({
    accept: 'CARD',
    hover: (item: CardDragItem) => {},
  });
  return <CardContainer>{text}</CardContainer>;
}

export default Card;
