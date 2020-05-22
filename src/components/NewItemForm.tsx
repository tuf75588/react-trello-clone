import React, { useState } from 'react';

import {
  NewItemButton,
  NewItemFormContainer,
  NewItemInput,
} from '../styles/styles';

interface NewItemFormProps {
  onAdd: (text: string) => void;
}

function NewItemForm(props: NewItemFormProps) {
  const [text, setText] = useState<string>('');
  return (
    <NewItemFormContainer>
      <NewItemInput
        type="text"
        placeholder="new item"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <NewItemButton onClick={() => props.onAdd(text)}>Create</NewItemButton>
    </NewItemFormContainer>
  );
}
export default NewItemForm;
