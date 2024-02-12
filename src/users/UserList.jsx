import { useContext, useState } from "react";
import ReactPaginate from "react-paginate";
import { UserContext } from "../context/userProvider";
import UserCard from "./UserCard";

const UserList = () => {
  const { searchedUsers } = useContext(UserContext);

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 12;

  // Function to handle page change
  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  // Calculate the start and end indices for the current page
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Filter and paginate the health tips based on the current page
  const paginatedUsers = searchedUsers?.slice(startIndex, endIndex);

  // Calculate the total number of pages
  const pageCount = Math.ceil(searchedUsers?.length / itemsPerPage);

  return (
    <>
      <div className="grid grid-cols-1 gap-2 pt-6 md:grid-cols-2 md:gap-6 md:pt-8 lg:grid-cols-3 lg:gap-8 lg:pt-12 xl:grid-cols-4 xl:gap-10">
        {paginatedUsers?.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
      <ReactPaginate
        className="my-auto flex items-center justify-center space-x-3 pb-5 pt-4 text-center align-middle font-semibold lg:pt-6"
        activeClassName="text-white rounded-full px-4 py-2 bg-deep-green text-white"
        breakLabel="..."
        nextLabel="Next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="Previous"
      />
    </>
  );
};

export default UserList;
