import {
  createEvent,
  createEffect,
  sample,
  restore,
} from 'effector'
import { Message } from '@/types/Messages'

const sendMessageFx = createEffect(
  async ({ message, id }: { message: Message; id: number }) => {
    const response = await fetch(
      `https://62fd0587b9e38585cd4b3739.mockapi.io/users/${id}/messages`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(message),
      }
    )
    if (!response.ok) throw response
  }
)
export const getUserId = createEvent<number>()
export const sendedMessage = createEvent<Message>()
export const $userId = restore<number>(getUserId, 0)

sample({
  clock: sendedMessage,
  source: getUserId,
  fn: (id, message) => ({ id, message }),
  target: sendMessageFx,
})






