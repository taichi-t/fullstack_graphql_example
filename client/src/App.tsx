import * as React from 'react';
import Hello from './Hello';

interface InitialState {
  data?: string;
}

const initialState = { data: undefined };

export const UserContext = React.createContext<InitialState>(initialState);

export const useUserContext = () => React.useContext(UserContext);

export default function App() {
  return (
    <>
      <UserContext.Provider value={{ data: 'hello' }}>
        <Hello />
      </UserContext.Provider>
    </>
  );
}
