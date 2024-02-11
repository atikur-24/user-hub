const SortUser = (onSort) => {
  return (
    <div className="flex items-stretch space-x-3 text-sm lg:text-base">
      <select
        onChange={(e) => onSort(e.target.value)}
        className="border-secondary bg-bgSecondary w-full cursor-pointer overflow-hidden rounded border px-4 py-2.5 pl-9 text-white focus:border-green-600 focus:outline-green-500 active:border-green-500 md:min-w-[300px] lg:w-[440px]"
      >
        <option disabled value="" selected>
          Sort By
        </option>
        <option value="name_asc">Sort By Name</option>s
        <option value="email_asc">Sort By Email</option>
        <option value="company_asc">Sort By Company Name</option>
      </select>
    </div>
  );
};

export default SortUser;
