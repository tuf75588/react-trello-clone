import React, { useState } from 'react';
import { AddItemButton } from '../styles/styles';

interface AddItemProps {
  addItem: (text: string) => void;
  toggleButtonText: string;
  dark?: boolean;
}

function AddItem(props: AddItemProps) {
  const [showForm, setShowForm] = useState<boolean>(false);
  const { addItem, toggleButtonText, dark } = props;

  if (showForm) {
    // do some stuff to show the item add form
  }
  return <div>Add item component</div>;
}

export default AddItem;
