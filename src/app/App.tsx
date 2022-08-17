import { $message } from '@/features/api/response'
import { useUnit } from "effector-react"

export const App = () => {
  const joke = useUnit($message)
  return (
    <div className="bg-[red]">
      123
    </div>
  )
}

