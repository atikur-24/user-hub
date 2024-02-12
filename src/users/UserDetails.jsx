import React from "react";
import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const loadUser = useLoaderData();
  const {
    image,
    firstName,
    lastName,
    email,
    company,
    address,
    gender,
    birthDate,
  } = loadUser || {};
  return (
    <div className="my-container my-8 md:my-12 lg:my-16">
      <h3 className="pb-4 text-center text-lg font-semibold uppercase tracking-wide text-green-2 md:text-xl lg:pb-6 lg:font-bold">
        User Details
      </h3>
      <div className="divide grid grid-cols-1 justify-items-stretch gap-y-5 divide-y divide-dashed divide-secondary rounded-sm border border-deep-green p-5 md:rounded-md md:p-7 lg:grid-cols-3 lg:justify-items-start lg:gap-x-10 lg:divide-x lg:divide-y-0 lg:p-9">
        <div>
          <h5 className="text-base font-medium md:text-lg lg:font-semibold">
            Personal Information:
          </h5>
          <div className="pt-3 md:pt-5 lg:pt-6">
            <div className="flex justify-center rounded bg-white/95 py-2 lg:py-4">
              <img className="h-20  lg:h-24" src={image} alt={firstName} />
            </div>
            <div className="space-y-1 pt-2 text-sm md:text-base lg:space-y-2 lg:pt-3">
              <p>
                <span className="text-gray-300/80">Full Name:</span>{" "}
                {firstName + " " + lastName}
              </p>
              <p>
                <span className="text-gray-300/80">Email:</span> {email}
              </p>
              <p>
                <span className="text-gray-300/80">Gender:</span> {gender}
              </p>
              <p>
                <span className="text-gray-300/80">Date of Birth:</span>{" "}
                {birthDate}
              </p>
            </div>
          </div>
        </div>
        <div className="pt-3 lg:pl-5 lg:pt-0">
          <h5 className="text-base font-medium md:text-lg lg:font-semibold">
            Company Information:
          </h5>
          <div className="space-y-1 pt-4 text-sm md:text-base lg:space-y-2 lg:pt-10">
            <p>
              <span className="text-gray-300/80">Company Name:</span>{" "}
              {company?.name}
            </p>
            <p>
              <span className="text-gray-300/80">Address:</span>{" "}
              {company?.address?.address}
            </p>
            <p>
              <span className="text-gray-300/80">Company City:</span>{" "}
              {company?.address?.city}
            </p>
            <p>
              <span className="text-gray-300/80">Postal Code:</span>{" "}
              {company?.address?.postalCode}
            </p>
          </div>
        </div>
        <div className="pt-3 lg:pl-5 lg:pt-0">
          <h5 className="text-base font-medium md:text-lg lg:font-semibold">
            Address Information:
          </h5>
          <div className="space-y-1 pt-4 text-sm md:text-base lg:space-y-2 lg:pt-10">
            <p>
              <span className="text-gray-300/80">Address:</span>{" "}
              {address?.address}
            </p>
            <p>
              <span className="text-gray-300/80">City:</span> {address?.city}
            </p>
            <p>
              <span className="text-gray-300/80">State:</span> {address?.state}
            </p>
            <p>
              <span className="text-gray-300/80">Postal Code:</span>{" "}
              {address?.postalCode}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
