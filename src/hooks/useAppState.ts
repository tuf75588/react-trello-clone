import { useContext } from 'react';
import { AppStateContext } from '../context/index';

function useAppState() {
  return useContext(AppStateContext);
}

export default useAppState;
