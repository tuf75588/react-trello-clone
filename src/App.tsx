import React from 'react';
import { AppContainer } from './styles/styles';
import Column from './components/Column';
import AddNewItem from './components/AddNewItem';
import useAppState from './hooks/useAppState';
function App() {
  const { state } = useAppState();
  return (
    <AppContainer className="App">
      {state.lists.map((list, i) => {
        return <Column title={list.text} index={i} key={list.id} />;
      })}
      <AddNewItem
        toggleButtonText="+ Add Another list"
        onAdd={() => console.log('running!')}
      />
    </AppContainer>
  );
}

export default App;
