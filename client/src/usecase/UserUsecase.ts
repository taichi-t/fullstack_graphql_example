class UserUsecase {
  private store: Store<State>;
  private userWebApi: UserWebApi;

  constructor({
    store,
    userWebApi,
  }: {
    store: Store<State>;
    userWebApi: UserWebApi;
  }) {
    this.store = store;
    this.userWebApi = userWebApi;
  }

  public getMe = async (): Promise<User | void> => {
    let user: User;

    try {
      // Service.UserWebAPI を使って User を取得
      user = await this.userWebApi.getMe();
    } catch (err) {
      throw err;
    }
    // Reducer に取得した User を投げる
    this.store.dispatch(setUser(user));
  };
}

export default UserUsecase;
