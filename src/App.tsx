import React from 'react';
import { AppContainer } from './styles/styles';
import Column from './components/Column';
import Card from './components/Card';
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
    </AppContainer>
  );
}

export default App;
