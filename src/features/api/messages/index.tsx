import { restore, createEffect, sample, createEvent} from 'effector'
import { User } from '@/types/Messages'

const getUsersFx = createEffect( async () => {
    const request = await fetch('https://62fd0587b9e38585cd4b3739.mockapi.io/users')
    if (!request.ok) throw request
    return request.json()
})

export const getAllMessages = createEvent<void>()

export const $users = restore<User[]>(getUsersFx, [])

$users.map((users) => users.map((user) => user.messages.reverse()))

sample({
  clock: getAllMessages,
  target: getUsersFx
})

sample({
  clock: getAllMessages,
  target: getUsersFx,
})

sample({
  clock: getAllMessages,
  target: getUsersFx,
})

$users.watch((state) => console.log(state))

getUsersFx()


