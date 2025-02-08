import { homeReducer, initialHomeStates } from '@/stores/homeStore';
import { createContext, useReducer, useContext, ReactNode, Dispatch, Context } from 'react';

type THomeContext = { state: THomeStates; dispatch: Dispatch<THomeActions> }

const HomeStatesContext = createContext<THomeContext | null>(null);

const HomeStatesProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(homeReducer, initialHomeStates);
  return (
    <HomeStatesContext.Provider value={{ state, dispatch }}>
      {children}
    </HomeStatesContext.Provider>
  );
};

const useHomeStatesContext = () => {
  const context = useContext(HomeStatesContext as Context<THomeContext>);

  return context;
};

export { HomeStatesProvider, useHomeStatesContext };
