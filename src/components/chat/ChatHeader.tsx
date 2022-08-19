import s from './header.module.css'
import { $userId } from '@/features/api/send-message'
import { $users } from '@/features/api/messages'
import { useUnit } from 'effector-react'

export const ChatHeader = () => {

    const users = useUnit($users)
    const userId = useUnit($userId)

    const userProfile = users.map(user => {
        if (user.id === userId) {
            return (
              <div key={user.id} className="flex h-full px-3 items-center">
                <img
                  className="w-[5%] rounded-full"
                  src={user.avatar}
                  alt="ava"
                />
                <p className="ml-4 text-xl font-medium">{user.name}</p>
              </div>
            )
        }
    })

    return <div className={s.header}>{userProfile}</div>
}