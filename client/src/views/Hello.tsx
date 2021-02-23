import * as React from 'react';
import { useUserContext } from '../state/index';
import GraphQLClient from '../api/adapter/GraphQLClient';
import { END_POINTS } from '../config';
import { UserWebApi } from '../api/service/UserWebApi';
import { UserUsecase } from '../api/usecase/UserUsecase';

export default function Hello() {
  const { state, dispatch } = useUserContext();
  React.useEffect(() => {
    const client = new GraphQLClient({
      endpointUrl: END_POINTS,
    });
    const api = new UserWebApi({ graphqlClient: client });
    const userUsecase = new UserUsecase({ dispatch, userWebApi: api });

    userUsecase.getMe();
  }, []);

  const items = state.user ? (
    state.user.map((item) => <li key={item.id}>{item.name}</li>)
  ) : (
    <p>loading</p>
  );

  return <ul>{items}</ul>;
}
