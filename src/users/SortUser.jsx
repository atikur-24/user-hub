const SortUser = ({ onSort }) => {
  return (
    <div className="flex items-stretch space-x-3 text-sm lg:text-base">
      <select
        onChange={(e) => onSort(e.target.value)}
        className="w-full cursor-pointer overflow-hidden rounded bg-bgSecondary px-4 py-2.5 pl-9 text-white shadow shadow-black outline outline-1  outline-gray-600 focus:outline-green-2 md:min-w-[300px] lg:w-[400px]"
      >
        <option disabled value="">
          Sort By
        </option>
        <option value="name_asc">Sort By Name</option>
        <option value="email_asc">Sort By Email</option>
        <option value="company_asc">Sort By Company Name</option>
      </select>
    </div>
  );
};

export default SortUser;
