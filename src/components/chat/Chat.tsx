import { MessageField } from "./chat-field/MessageField";
import { NewMessage } from "./chat-field/NewMessage";
import { ChatHeader } from "./ChatHeader";

export const Chat = () => (
    <div className="h-full w-full flex flex-col justify-between">
        <ChatHeader />
        <MessageField />
        <NewMessage />
    </div>
)