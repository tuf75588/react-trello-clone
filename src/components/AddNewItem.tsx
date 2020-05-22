import React, { useState } from 'react';
import { AddItemButton } from '../styles/styles';
import NewItemForm from './NewItemForm';

interface AddItemProps {
  onAdd: (text: string) => void;
  toggleButtonText: string;
  dark?: boolean;
}

function AddNewItem(props: AddItemProps) {
  const [showForm, setShowForm] = useState<boolean>(false);
  const { onAdd, toggleButtonText, dark } = props;

  if (showForm) {
    // do some stuff to show the item add form
    return (
      <NewItemForm
        onAdd={(text) => {
          onAdd(text);
          setShowForm(false);
        }}
      />
    );
  }
  return (
    <AddItemButton dark={dark} onClick={() => setShowForm(true)}>
      {toggleButtonText}
    </AddItemButton>
  );
}

export default AddNewItem;
