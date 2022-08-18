import { restore, createEffect} from 'effector'
import { User } from '@/types/Messages'

const getMessagesFx = createEffect( async () => {
    const request = await fetch('https://62fd0587b9e38585cd4b3739.mockapi.io/users')
    if (!request.ok) throw request
    return request.json()
})

export const $users = restore<User[]>(getMessagesFx, [])

getMessagesFx()
