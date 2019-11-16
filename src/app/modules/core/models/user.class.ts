export interface IUser {
  name: string;
  password: string;
}

export class User implements IUser {
  public name: string;
  public password: string;

  constructor({name, password}: IUser) {
    this.name = name;
    this.password = password;
  }
}
