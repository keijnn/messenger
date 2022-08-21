import { restore, createEffect, sample, createEvent } from 'effector'
import { User } from '@/types/Messages'

const getUsersFx = createEffect(async () => {
  const request = await fetch(
    'https://62fd0587b9e38585cd4b3739.mockapi.io/users'
  )
  if (!request.ok) throw request
  return request.json()
})

export const getAllMessages = createEvent<void>()
export const usersFiltered = createEvent<string>()

export const $users = restore<User[]>(getUsersFx, [])

export const $filter = restore<string>(usersFiltered, '')

$users.map((users) => users.map((user) => user.messages.reverse()))

$users.map((users) =>
  users.sort((a, b) =>
    a.messages[0]?.date < b.messages[0]?.date ? 1 : -1
  )
)



sample({
  clock: getAllMessages,
  target: getUsersFx,
})

sample({
  clock: getAllMessages,
  target: getUsersFx,
})

sample({
  clock: getAllMessages,
  target: getUsersFx,
})

getUsersFx()
