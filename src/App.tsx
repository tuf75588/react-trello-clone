import React from 'react';
import { AppContainer } from './styles/styles';
import Column from './components/Column';
function App() {
  return (
    <AppContainer className="App">
      <Column title="Column 1"></Column>
      <Column title="Column 2" />
      <Column title="Column 3" />
    </AppContainer>
  );
}

export default App;
