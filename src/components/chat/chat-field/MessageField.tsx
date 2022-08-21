//import modules
import { useUnit } from 'effector-react'

//import components
import { $users, $filter } from '@/features/api/messages'
import { $userId } from '@/features/api/send-message'

export const MessageField = () => {
  const userId = useUnit($userId) //user id
  const users = useUnit($users) //all users
  const filter = useUnit($filter) // filterd users

  const messages = users.map((user, index) => {
    if (user.id === userId) {
      return (
        <div
          key={index}
          className="h-full flex flex-col-reverse overflow-auto p-3"
        >
          {user.messages.map((item, index) => (
            <div key={index} className="mb-6 flex w-full">
              {!item.status ? (
                <div className="flex ml-3 justify-start">
                  <img
                    className="rounded-full h-12 w-12"
                    src={user.avatar}
                    alt="ava"
                  />
                  <div className="px-3">
                    <p className=" min-h-12 flex items-center px-5 py-2 text-white text-left rounded-full bg-zinc-700">
                      {item.value}
                    </p>
                    <p className="mt-2 ml-2 text-sm text-gray-600">
                      {item.date}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex w-full mr-3 justify-end">
                  <div className="flex flex-col items-end px-3">
                    <p className=" min-h-12 flex items-center px-5 py-2 self-end text-right w-fit rounded-full bg-gray-300">
                      {item.value}
                    </p>

                    <p className="text-sm mt-2 mr-2  text-gray-600">
                      {item.date}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )
    }
  })
  return (
    <div className="h-full overflow-auto">
      {messages && !filter ? messages : null}
    </div>
  )
}
