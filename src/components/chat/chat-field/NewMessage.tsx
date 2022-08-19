import s from './new-message.module.css'
import Send from '@/assets/icons/send.svg'
import { sendedMessage } from '@/features/api/send-message'
import { getAllMessages } from '@/features/api/messages'
import { useState, useEffect, ChangeEvent, KeyboardEventHandler } from 'react'

export const NewMessage = () => {

  const [messageValue, setMessageValue] = useState<string>('')

  const getMessageValue = (e:ChangeEvent<HTMLInputElement>) => {
    setMessageValue(e.target.value)
  }

  const messageSended = () => {
    getAllMessages()
    messageValue ? sendedMessage({
      value: messageValue,
      status: 'user',
    }) : null
    setMessageValue('')
  }

    const listener = (e:any) => {
      if (e.key === 'Enter') {
        messageSended()
      }
    }

  return (
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
  )
}



