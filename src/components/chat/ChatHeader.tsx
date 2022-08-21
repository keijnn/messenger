//import modules
import { useUnit } from 'effector-react'

//import components
import { $userId } from '@/features/api/send-message'
import { $users, $filter } from '@/features/api/messages'

//import styles
import s from './header.module.css'

export const ChatHeader = () => {
  const users = useUnit($users) //all users
  const userId = useUnit($userId) //user id
  const filter = useUnit($filter) //filtered users

  const userProfile = users.map((user) => {
    if (user.id === userId) {
      return (
        <div key={user.id} className="flex h-full px-3 items-center">
          <img className="w-[5%] rounded-full" src={user.avatar} alt="ava" />
          <p className="ml-4 text-xl font-medium">{user.name}</p>
        </div>
      )
    }
  })

  return <div className={s.header}>{!filter ? userProfile : null}</div>
}
