import SearchIcon from '@/assets/icons/search.svg'
import { usersFiltered, $filter } from '@/features/api/messages'
import { useUnit } from 'effector-react'
import { ChangeEvent, useEffect, useState } from 'react'

export const Search = () => {
  const filter = useUnit($filter)

  return (
    <>
      <span className="flex items-center bg-white rounded-full text-gray-700 p-2">
        <img className="h-3/6 w-1/12" src={SearchIcon} alt="icon" />
        <input
          onChange={(e) => usersFiltered(e.target.value)}
          value={filter}
          className="ml-3 w-full outline-none"
          placeholder="Search or start new chat"
        />
      </span>
    </>
  )
}
