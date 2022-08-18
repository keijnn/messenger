import s from './new-message.module.css'
import Send from '@/assets/icons/send.svg'

export const NewMessage = () => {
  return (
    <div className={s.bg}>
      <span className="px-6 h-3/6 outline-none rounded-full w-full bg-white flex items-center">
        <input
          placeholder="Type your message"
          className="outline-none h-full text-gray-400 w-full"
        />
        <img
          src={Send}
          className="ml-4 h-3/6"
        />
      </span>
    </div>
  )
}
