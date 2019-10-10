import { IUser } from '../models/user.interface';

export class User implements IUser {
  id: string;
  firstName: string;
  lastName: string;
}
