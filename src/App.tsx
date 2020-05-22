import React from 'react';
import { AppContainer, AddItemButton } from './styles/styles';
import Column from './components/Column';
import Card from './components/Card';
import AddNewItem from './components/AddNewItem';
function App() {
  let text = 'Andrew';

  return (
    <AppContainer className="App">
      <Column title="To Do">
        <Card text="Generate app scaffold" />
      </Column>
      <Column title="In Progress">
        <Card text="Learn TypeScript" />
      </Column>
      <Column title="Done">
        <Card text="Begin to use static typing" />
      </Column>
      <AddNewItem
        toggleButtonText="+ Add Another list"
        dark
        onAdd={() => console.log('running!')}
      />
    </AppContainer>
  );
}

export default App;
