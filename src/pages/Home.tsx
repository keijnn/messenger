//import components
import { Chat } from "@/components/chat/Chat"
import { SideBar } from "@/components/side-bar/SideBar"

export const Home = () => {
  return (
    <div className="flex h-full">
        <SideBar />
        <Chat />
    </div>
  )
}
