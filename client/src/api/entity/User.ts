import { User as UserType } from '../../types';

class User {
  public readonly id: number;
  public readonly name: string;

  constructor({ id, name }: UserType) {
    this.id = id;
    this.name = name;
  }

  public static fromJSON = (json: any) => {
    const { id, name } = Object.assign({}, json);

    if (typeof id !== 'number') throw new Error('id must be a string');
    if (typeof name !== 'string') throw new Error('name must be a string');

    return new User({
      id,
      name,
    });
  };
}

export default User;
