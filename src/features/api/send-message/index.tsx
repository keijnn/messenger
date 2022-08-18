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

const getUserId = createEvent<number>()
const sendedMessage = createEvent<Message>()

export const $message = restore(sendedMessage, {
  value: '123',
})

sample({
  clock: getUserId,
  source: sendedMessage,
  fn: (message, id) => ({ message, id }),
  target: sendMessageFx,
})

sendedMessage({
  value: '123123',
})

getUserId(1)


