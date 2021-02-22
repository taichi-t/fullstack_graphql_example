import * as React from 'react';
import { useUserContext } from './App';

export default function Hello() {
  const { data } = useUserContext();

  return <div>{data}</div>;
}
