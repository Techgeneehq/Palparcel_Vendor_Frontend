
import Icon from '../Icons';

const Search = ({placeholder}:any) => {
  return (
    <form className="flex items-center border border-[#FE9900] rounded-full relative overflow-hidden w-full p-0 pl-8">
      <Icon.SearchIcon className="ml-8" />
      <input
        type="search"
        name=""
        placeholder={placeholder}
        className="w-9/12 pl-4 py-4 bg-transparent focus:border-0 focus:outline-none text-[#969696] text-sm"
      />
      <button
        type="submit"
        className="bg-[#FE9900] text-white border border-[#FE9900] py-4 px-6 ml-5 text-base font-medium w-[104px]"
      >
        Search
      </button>
    </form>
  );
};

export default Search;
