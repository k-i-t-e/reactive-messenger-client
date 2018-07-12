class User {
  constructor(public id: number, public userName: string) {}

  toContact(): Contact {
    return {
      id: this.id,
      name: this.userName
    }
  }
}

class AuthInfo {
  user: User;
  token: string
}

interface Contact {
  id?: number;
  name: string;
  status?: string;
  date?: Date;
}

export {
  AuthInfo,
  User,
  Contact
}
