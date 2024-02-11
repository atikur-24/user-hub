import { IoIosSearch } from "react-icons/io";

const SearchUser = () => {
  // const [searchValue, setSearchValue] = useState("");

  // const handleSubmit = (e) => {
  //     e.preventDefault();
  //     onSearch(searchValue);
  //   };
  return (
    // <form>
    <div className="flex text-sm md:text-base">
      <div className="relative w-full overflow-hidden rounded sm:min-w-[100px] md:min-w-[320px] lg:min-w-[440px]">
        <div className="absolute left-2 top-0 flex h-full items-center">
          <IoIosSearch className="text-2xl" />
        </div>
        <input
          type="search"
          className="bg-bgSecondary border-secondary outline-secondary focus:outline-green-2 z-20 block w-full rounded border px-4 py-2.5 pl-10 text-white outline-offset-0 focus:border-0 focus:border-green-500 focus:outline-1"
          placeholder="Search User Name"
          // value={searchValue}
          // onChange={(e) => setSearchValue(e.target.value)}
          // required
        />
      </div>
    </div>

    // </form>
  );
};

export default SearchUser;
