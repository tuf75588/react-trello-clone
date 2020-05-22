import React, { useState } from 'react';

import {
  NewItemButton,
  NewItemFormContainer,
  NewItemInput,
} from '../styles/styles';
import useFocus from '../hooks/useFocus';

interface NewItemFormProps {
  onAdd: (text: string) => void;
}

function NewItemForm(props: NewItemFormProps) {
  const [text, setText] = useState<string>('');
  const { onAdd } = props;
  const inputRef = useFocus();
  return (
    <NewItemFormContainer>
      <NewItemInput
        value={text}
        onChange={(e) => setText(e.target.value)}
        ref={inputRef}
      />

      <NewItemButton onClick={() => onAdd(text)}>Create</NewItemButton>
    </NewItemFormContainer>
  );
}
export default NewItemForm;
