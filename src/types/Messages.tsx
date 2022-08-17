export interface Message {
    value: string,
    status?: string
}

export interface User {
  id: number
  avatar: string
  name: string
  messages: Message[]
}