import { useContext } from "react";
import { UserContext } from "../context/userProvider";
import UserCard from "./UserCard";

const UserList = () => {
  const { searchedUsers } = useContext(UserContext);
  return (
    <div className="grid grid-cols-1 gap-2 pt-6 md:grid-cols-2 md:gap-6 md:pt-8 lg:grid-cols-3 lg:gap-8 lg:pt-12 xl:grid-cols-4 xl:gap-10">
      {searchedUsers?.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
