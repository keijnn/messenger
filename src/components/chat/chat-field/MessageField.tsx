import { $users } from '@/features/api/messages'
import { $userId } from '@/features/api/send-message'
import { useUnit } from 'effector-react'

export const MessageField = () => {
  const userId = useUnit($userId)
  const users = useUnit($users)

  console.log(users)

  const messages = users.map((user, index) => {
    if (user.id === userId) {
      return (
        <div
          key={index}
          className="h-full flex flex-col-reverse overflow-auto py-3"
        >
          {user.messages.map((item, index) => (
            <div key={index} className="mb-6 flex w-full">
              {item.status === 'friend' ? (
                <div className="flex ml-3 justify-start">
                  <img
                    className="rounded-full w-12"
                    src={user.avatar}
                    alt="ava"
                  />
                  <p className="ml-3 h-12 flex items-center px-3 text-white text-left rounded-full bg-zinc-700">
                    {item.value}
                  </p>
                </div>
              ) : (
                <div className="flex w-full mr-3 justify-end">
                  <p className="ml-3 h-12 flex items-center px-3 self-end text-right w-fit rounded-full bg-gray-300">
                    {item.value}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      )
    }
  })
  return (
    <div className="h-full overflow-auto">{messages ? messages : null}</div>
  )
}
