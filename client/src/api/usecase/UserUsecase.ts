import { Dispatch } from 'react';
import { Action } from '../../state/user/reducer';
import { getUser } from '../../state/user/actions';
import { UserWebApi } from '../service/UserWebApi';
import { Query } from '../../types';

class UserUsecase {
  private dispatch: Dispatch<Action>;
  private userWebApi: UserWebApi;

  constructor({
    dispatch,
    userWebApi,
  }: {
    dispatch: Dispatch<Action>;
    userWebApi: UserWebApi;
  }) {
    this.dispatch = dispatch;
    this.userWebApi = userWebApi;
  }

  public getMe = async (): Promise<void> => {
    let data: Query['users'];

    try {
      data = await this.userWebApi.getMe();
    } catch (err) {
      throw err;
    }

    this.dispatch(await getUser(data));
  };
}

export { UserUsecase };
