import { UserContext } from "../context/userProvider";
import useUsersData from "../hook/useUsersData";
import SearchUser from "./SearchUser";
import SortUser from "./SortUser";
import UserList from "./UserList";

const UsersData = () => {
  const [users, loading] = useUsersData();

  //   handle sort by user name, email and company name
  const handleSort = (value) => {
    console.log(value);
  };

  // Handle search by user name
  const handleSearch = (value) => {
    console.log(value);
    // setSearchQuery(value);
  };

  const data = {
    users,
    loading,
  };

  return (
    <UserContext.Provider value={data}>
      <section className="my-container">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <SearchUser onSearch={handleSearch} />
          <SortUser onSort={handleSort} />
        </div>
        <div>
          <UserList />
        </div>
      </section>
    </UserContext.Provider>
  );
};

export default UsersData;
