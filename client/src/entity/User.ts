class User {
  public readonly id: string;
  public readonly name: string;

  constructor({ id, name }: { id: string; name: string }) {
    this.id = id;
    this.name = name;
  }

  public static fromJSON = (json: any) => {
    const { id, name } = Object.assign({}, json);

    if (typeof id !== 'string') throw new Error('id must be a string');
    if (typeof name !== 'string') throw new Error('name must be a string');

    return new User({
      id,
      name,
    });
  };
}

export default User;
