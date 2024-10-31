interface Message {
  sender: 'user' | 'bot';
  text: string;
}

export interface Conversation {
  id: number;
  title: string;
  messages: Message[];
}

export type Conversations = Conversation[];
