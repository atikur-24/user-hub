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

  // Handle filter by users name, email & company name
  const handleSort = (value) => {
    // console.log(value);
    let newFilterOptions = { ...filterOptions };

    switch (value) {
      case "name_asc":
        newFilterOptions = "name_asc";
        break;
      case "email_asc":
        newFilterOptions = "email_asc";
        break;
      case "company_asc":
        newFilterOptions = "company_asc";
        break;
      default:
        newFilterOptions = "";
        break;
    }

    setFilterOptions(newFilterOptions);
  };

  // Apply sorting to users name, email, company name
  const filteredTransactions = users?.sort((a, b) => {
    const { sort } = filterOptions;

    // Sort transactions
    switch (sort) {
      case "name_asc":
        return a.firstName - b.firstName;
      case "email_ase":
        return a.email - b.email;
      case "company_asc":
        return a.company.name - b.company.name;
      default:
        return "";
    }
  });

  // handle search by user name
  const handleSearch = (value) => {
    setSearchQuery(value);
  };

  // apply search sort to users
  const searchedUsers = filteredTransactions?.filter((transaction) =>
    transaction.firstName.toLowerCase().includes(searchQuery.toLowerCase()),
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
