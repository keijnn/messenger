//import modules
import { useState, ChangeEvent } from 'react'
import { useUnit } from 'effector-react'

//import components
import { sendedMessage, $userId } from '@/features/api/send-message'
import { $filter, getAllMessages } from '@/features/api/messages'
import { $joke } from '@/features/api/get-answer'

//import styles
import s from './new-message.module.css'
import Send from '@/assets/icons/send.svg'

export const NewMessage = () => {
  const userId = useUnit($userId) //user id
  const filter = useUnit($filter) //filtered users
  const joke = useUnit($joke) //user answer

  const [messageValue, setMessageValue] = useState<string>('')

  const getMessageValue = (e: ChangeEvent<HTMLInputElement>) => {
    setMessageValue(e.target.value)
  }

  const messageSended = () => {
    getAllMessages()
    if (messageValue) {
      const sendJoke = setInterval(() => {
        sendedMessage({
          value: joke,
          status: false,
          date: new Date().toLocaleString(),
        })
        getAllMessages()
        clearInterval(sendJoke)
      }, 7000)
      sendedMessage({
        value: messageValue,
        status: true,
        date: new Date().toLocaleString(),
      })
    }
    setMessageValue('')
  }

  const listener = (e: any) => {
    if (e.key === 'Enter') {
      messageSended()
    }
  }

  return userId && !filter ? (
    <div className={s.bg}>
      <span className="px-6 h-3/6 outline-none rounded-full w-full bg-white flex items-center">
        <input
          value={messageValue}
          onKeyDown={listener}
          onChange={(e) => getMessageValue(e)}
          placeholder="Type your message"
          className="outline-none h-full text-gray-600 w-full"
        />
        <img
          onClick={messageSended}
          src={Send}
          alt="send"
          className="ml-4 h-3/6 cursor-pointer"
        />
      </span>
    </div>
  ) : null
}
