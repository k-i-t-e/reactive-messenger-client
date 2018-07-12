class User {
  constructor(public id: Number, public userName: string) {}

  toContact(): Contact {
    return {
      id: this.id,
      name: this.userName
    }
  }
}

class AuthInfo {
  user: User;
  token: String
}

interface Contact {
  id?: Number;
  name: String;
  status?: String;
  date?: Date;
}

export {
  AuthInfo,
  User,
  Contact
}
