import React, { createContext } from 'react';
import { v4 } from 'uuid';

interface Task {
  id: string;
  text: string;
}

interface List {
  id: string;
  text: string;
  tasks: Task[];
}

interface AppState {
  lists: List[];
}

interface AppStateContextProps {
  state: AppState;
}

const appData: AppState = {
  lists: [
    {
      text: 'To do',
      id: v4(),
      tasks: [{ id: v4(), text: 'Generate App Scaffold' }],
    },
    {
      text: 'In Progress',
      id: v4(),
      tasks: [{ id: v4(), text: 'Learn TypeScript' }],
    },
    {
      text: 'Done',
      id: v4(),
      tasks: [{ id: v4(), text: 'Begin using static typing' }],
    },
  ],
};

export const AppStateContext = createContext<AppStateContextProps>(
  {} as AppStateContextProps
);

export const AppStateProvider = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <AppStateContext.Provider value={{ state: appData }}>
      {children}
    </AppStateContext.Provider>
  );
};
