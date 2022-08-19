import SearchIcon from '@/assets/icons/search.svg'

export const Search = () => {
  return (
    <>
      <span className="flex items-center bg-white rounded-full text-gray-700 p-2">
        <img className='h-3/6 w-1/12' src={SearchIcon} alt="icon" />
        <input
          className="ml-3 w-full outline-none"
          placeholder="Search or start new chat"
        />
      </span>
    </>
  )
}
