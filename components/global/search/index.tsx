
import Icon from '../Icons';

const SearchInput = ({placeholder}:any) => {
  return (
    <form className="flex items-center !border  !border-[#FE9900] bg-white rounded-full relative overflow-hidden w-full p-0 pl-8">
      <Icon.SearchIcon className="ml-8 w-[40px]" />
      <input
        type="search"
        name=""
        placeholder={placeholder}
        className="w-9/12  !py-4 focus:border-0 focus:outline-none text-[#969696] text-sm"
      />
      <button
        type="submit"
        className="bg-[#FE9900] text-white  !py-4 !px-6 ml-5 text-base font-medium "
      >
        Search
      </button>
    </form>
  );
};

export default SearchInput;
