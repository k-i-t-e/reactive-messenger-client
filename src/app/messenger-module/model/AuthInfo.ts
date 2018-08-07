class User {
  constructor(public id: number, public userName: string) {}

  static toContact(user: User) : Contact {
    return {
      id: user.id,
      name: user.userName
    }
  }
}

class AuthInfo {
  user: User;
  token: string;

  constructor(user: User, token: string) {
    this.user = user;
    this.token = token;
  }
}

const UNAUTHORIZED = new AuthInfo(null, null);

interface Contact {
  id?: number;
  name: string;
  status?: string;
  date?: Date;
}

export {
  AuthInfo,
  User,
  Contact,
  UNAUTHORIZED
}
