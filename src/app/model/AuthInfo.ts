class User {
  id: Number;
  userName: String
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
