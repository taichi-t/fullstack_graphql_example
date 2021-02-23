import { User } from '../../types.d';
import { ActionTypes } from './actions';

type State = {
  user?: User[];
};

type Action = {
  type: ActionTypes;
  payload: any;
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export { State, Action, reducer };
