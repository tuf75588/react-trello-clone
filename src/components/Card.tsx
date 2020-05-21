import React from 'react';

import { CardContainer } from '../styles/styles';

// INTERFACES
interface CardProps {
  text?: string;
}

function Card({ text }: CardProps) {
  return <CardContainer>{text}</CardContainer>;
}

export default Card;
