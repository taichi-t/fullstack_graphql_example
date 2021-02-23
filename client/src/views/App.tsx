import * as React from 'react';
import Hello from './Hello';
import { UserProvider } from '../state/index';

export default function App() {
  return (
    <UserProvider>
      <Hello />
    </UserProvider>
  );
}
