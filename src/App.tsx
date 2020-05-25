import React from 'react';
import { AppContainer } from './styles/styles';
import Column from './components/Column';
import AddNewItem from './components/AddNewItem';
import useAppState from './hooks/useAppState';
function App() {
  const { state, dispatch } = useAppState();
  return (
    <AppContainer className="App">
      {state.lists.map((list, i) => {
        return <Column text={list.text} id={list.id} index={i} key={list.id} />;
      })}
      <AddNewItem
        toggleButtonText="+ Add Another list"
        onAdd={(text) => {
          dispatch({ type: 'ADD_LIST', payload: text });
        }}
      />
    </AppContainer>
  );
}

export default App;
