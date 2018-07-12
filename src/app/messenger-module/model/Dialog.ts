class Message {
  constructor(text: string, date: Date, from: string, to: string) {
    this.text = text;
    this.date = date;
    this.from = from;
    this.to = to;
  }

  text: string;
  date: Date;
  from: string;
  to:   string
}

class Dialog {
  constructor(contact: string, lastMessage: Message) {
    this.contact = contact;
    this.lastMessage = lastMessage;
  }

  contact: string;
  lastMessage: Message
}

export {
  Message,
  Dialog
}