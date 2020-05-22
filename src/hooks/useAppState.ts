import { useContext, useEffect, useState } from 'react';
import { AppStateContext } from '../context/index';

function useAppState() {
  return useContext(AppStateContext);
}

export default useAppState;
