import { IEndpoint } from '../models/endpoint.interface';

export class APIConst {
  private static endpoints: { [key: string]: IEndpoint } = {
    auth: {
      root: '/auth',
      login: '/login',
      userinfo: 'userinfo'
    },
    courses: {
      root: '/courses'
    },
    authors: {
      root: '/authors'
    }
  };

  public static getEndpoint(property: string): IEndpoint {
    return this.endpoints[property];
  }
}
