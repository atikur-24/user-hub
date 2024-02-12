import { useState } from "react";
import { UserContext } from "../context/userProvider";
import useUsersData from "../hook/useUsersData";
import SearchUser from "./SearchUser";
import SortUser from "./SortUser";
import UserList from "./UserList";

const UsersData = () => {
  const [users, loading] = useUsersData();
  const [filterOptions, setFilterOptions] = useState({ sort: "" });
  const [searchQuery, setSearchQuery] = useState("");

  // handle sort by users name, email & company name
  const handleSort = (value) => {
    let newSortOptions = { ...filterOptions };

    switch (value) {
      case "name_asc":
        newSortOptions.sort = "name_asc";
        break;
      case "email_asc":
        newSortOptions.sort = "email_asc";
        break;
      case "company_asc":
        newSortOptions.sort = "company_asc";
        break;
      default:
        newSortOptions.sort = "";
        break;
    }

    setFilterOptions(newSortOptions);
  };

  // apply sorting to users name, email, company name
  const filteredUsers = users?.sort((a, b) => {
    const { sort } = filterOptions;

    switch (sort) {
      case "name_asc":
        return a.firstName.localeCompare(b.firstName);
      case "email_asc":
        return a.email.localeCompare(b.email);
      case "company_asc":
        return a.company.name.localeCompare(b.company.name);
      default:
        return 0;
    }
  });

  // handle search by user name
  const handleSearch = (value) => {
    setSearchQuery(value);
  };

  // apply search sort to users
  const searchedUsers = filteredUsers?.filter((user) =>
    user.firstName.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const data = {
    searchedUsers,
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
