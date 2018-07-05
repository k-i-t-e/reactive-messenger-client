class Message {
  constructor(text: String, date: Date, from: String, to: String) {
    this.text = text;
    this.date = date;
    this.from = from;
    this.to = to;
  }

  text: String;
  date: Date;
  from: String;
  to:   String
}

class Dialog {
  constructor(contact: String, lastMessage: Message) {
    this.contact = contact;
    this.lastMessage = lastMessage;
  }

  contact: String;
  lastMessage: Message
}

export {
  Message,
  Dialog
}