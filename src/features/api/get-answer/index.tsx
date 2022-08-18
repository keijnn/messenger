import { createStore, createEffect } from 'effector'

export const getJackMessageFx = createEffect(async () => {
  const request = await fetch('https://api.chucknorris.io/jokes/random')
  if (!request.ok) throw request
  return request.json()
})

export const $joke = createStore<string>('').on(
  getJackMessageFx.doneData,
  (_, data) => data.value
)

getJackMessageFx()

