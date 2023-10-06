import Icon from "../global/Icons"

const AuthNavSearch = () => {
  return (
    <form className="flex items-center border border-[#FE9900] rounded-full relative overflow-hidden w-full p-0 pl-8">
      <Icon.SearchIcon className='w-1/12' />
      <input 
        type="search" 
        placeholder="Search essential, groceries and many more..." 
        className="w-9/12 ml-6 py-4 bg-transparent focus:border-0 focus:outline-none text-[#969696] text-sm"
      />
      <button type="submit" className="bg-[#FE9900] border border-[#FE9900] py-4 px-6 ml-5 text-base font-medium">Search</button>
    </form>
  )
}

export default AuthNavSearch