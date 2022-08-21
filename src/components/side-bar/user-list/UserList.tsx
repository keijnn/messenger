import { $users, $filter, usersFiltered } from '@/features/api/messages'
import { useUnit } from "effector-react"
import { Title } from "./Title"
import { getUserId } from '@/features/api/send-message'


export const UserList = () => {
    const users = useUnit($users)
    const filter = useUnit($filter)
    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(filter.toLowerCase())
    )

  const usersList = filtered.map((user) => (
    <div
      key={user.id}
      onClick={() => { 
        getUserId(user.id)
        usersFiltered('')
      }}
      className="flex border-b-2 py-6 cursor-pointer"
    >
      <img className="rounded-full h-12 w-12" src={user.avatar} alt="ava" />
      <div className="ml-4">
        <p>{user.name}</p>
        <p className="mt-2 text-gray-500">{user.messages[0]?.value}</p>
      </div>
    </div>
  ))
  return (
    <div className="w-full h-full overflow-auto px-2">
      <Title />
      {usersList ? usersList : null}
    </div>
  )
}


