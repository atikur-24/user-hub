import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  const { id, image, firstName, lastName, email, company, address } =
    user || {};
  return (
    <div className="space-y-2 rounded border border-gray-600 bg-bgSecondary p-3 text-sm shadow-2xl md:space-y-3 md:p-5 md:text-base">
      <div className="mx-auto flex w-fit flex-col items-center rounded-md bg-primary px-8 md:w-full">
        <img className="my-5 h-20 w-28 md:my-6" src={image} alt={firstName} />
      </div>
      <Link to={`/user-details/${id}`}>
        <h3 className="cursor-pointer pt-4 text-center text-base font-medium tracking-wide underline-offset-4 transition-all hover:text-green-2 hover:underline md:pt-6 md:text-lg md:font-semibold lg:text-xl">
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
