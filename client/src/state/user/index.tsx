import * as React from 'react';
import { State, Action, reducer } from './reducer';

interface InitialState {
  state: State;
  dispatch: React.Dispatch<Action>;
}

const initialState = {
  state: {},
  dispatch: () => {},
};

const UserContext = React.createContext<InitialState>(initialState);

const useUserContext = () => React.useContext(UserContext);

const UserProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer<React.Reducer<State, Action>>(
    reducer,
    {}
  );
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export { useUserContext, UserProvider };
