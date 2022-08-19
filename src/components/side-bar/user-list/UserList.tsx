import { $users } from '@/features/api/messages'
import { useList } from "effector-react"
import { Title } from "./Title"
import { getUserId } from '@/features/api/send-message'


export const UserList = () => {
  const users = useList($users, (user) => (
    <div onClick={() => getUserId(user.id)} className="flex border-b-2 py-6 cursor-pointer">
      <img className="rounded-full w-[14%]" src={user.avatar} alt="ava" />
      <div className="ml-4">
        <p>{user.name}</p>
        <p className='mt-2 text-gray-500'>{user.messages[0]?.value}</p>
      </div>
    </div>
  ))
  return (
    <div className="w-full max-h-full overflow-auto px-2">
      <Title />
      {users ? users : null}
    </div>
  )
}


