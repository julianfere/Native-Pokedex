import React, {PropsWithChildren, createContext, useReducer} from 'react';
import {AppContextType} from './types';
import {AppReducer} from './reducer';
import {initialState} from './initials';

const AppContext = createContext<AppContextType | null>(null);

export const AppProvider = ({children}: PropsWithChildren) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider value={{state, dispatch}}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
