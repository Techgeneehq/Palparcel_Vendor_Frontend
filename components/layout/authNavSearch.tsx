import Icon from "../global/Icons"

const AuthNavSearch = () => {
  return (
    <form className="flex items-center border border-[#7132A5] rounded-full relative overflow-hidden w-full p-0 pl-6 md:pl-8 bg-white">
      <Icon.SearchIcon className='w-1/12' />
      <input 
        type="search" 
        placeholder="Search product" 
        className="w-10/12 md:w-9/12 ml-1 md:ml-6 py-[15px] md:py-4 bg-transparent focus:border-0 focus:outline-none text-[#969696] text-sm"
      />
      <button type="submit" className="hidden md:flex bg-[#7132A5] border border-[#7132A5] py-4 px-6 ml-5 text-base font-medium">Search</button>
    </form>
  )
}

export default AuthNavSearch