import { createStore, createEffect, sample } from 'effector'
import { getAllMessages } from '../messages'

export const getJackMessageFx = createEffect(async () => {
  const request = await fetch('https://api.chucknorris.io/jokes/random')
  if (!request.ok) throw request
  return request.json()
}) //get answer

export const $joke = createStore<string>('').on(
  getJackMessageFx.doneData,
  (_, data) => data.value
) //create store and set answer to state

sample({
  clock: getAllMessages,
  target: getJackMessageFx,
})

getJackMessageFx()
