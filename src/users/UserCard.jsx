import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  const { id, image, firstName, lastName, email, company, address } =
    user || {};
  return (
    <div className="space-y-3 rounded border border-gray-600 p-3 shadow-2xl md:p-5 lg:p-6">
      <div className="flex justify-center pb-4">
        <img className="h-20" src={image} alt={firstName} />
      </div>
      <Link to={`/user-details/${id}`}>
        <h3 className="cursor-pointer text-center text-base font-medium tracking-wide underline-offset-4 transition-all hover:text-green-2 hover:underline md:text-lg md:font-semibold lg:text-xl">
          {firstName + " " + lastName}
        </h3>
      </Link>
      <p className="text-center">{email}</p>

      <p>Company: {company?.name}</p>
      <div className="text-secondary">
        <p>Street: {address?.address}</p>
        <p>City: {address?.city}</p>
        <p className="flex items-center justify-between">
          <span>State: {address?.state}</span>
          <span>Post Code: {address?.postalCode}</span>
        </p>
      </div>
    </div>
  );
};

export default UserCard;
