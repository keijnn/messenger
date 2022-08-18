import { Profile } from "./profile-and-search/Profile"
import { Search } from "./profile-and-search/Search"
import s from './header.module.css'

export const Header = () => {
  return (
    <div className={s.header}>
      <Profile />
      <Search />
    </div>
  )
}
