import { Header } from "./header/Header";
import { UserList } from "./user-list/UserList";

export const SideBar = () => (
  <div className="h-full w-6/12">
    <Header />
    <UserList />
  </div>
)

