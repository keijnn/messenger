export interface Message {
  value: string
  status?: boolean
  date: string
}

export interface User {
  id: number
  avatar: string
  name: string
  messages: Message[]
}