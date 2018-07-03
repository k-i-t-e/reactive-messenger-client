class Message {
  text: String;
  date: Date;
  from: String;
  to:   String
}

class Dialog {
  contact: String;
  lastMessage: Message
}

export {
  Message,
  Dialog
}