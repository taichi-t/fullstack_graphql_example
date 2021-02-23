import { Query } from '../../types.d';

enum ActionTypes {
  GET_USERS = 'GET_USERS',
}

const getUser = async (data: Query['users']) => {
  return {
    payload: data,
    type: ActionTypes.GET_USERS,
  };
};

export { ActionTypes, getUser };
