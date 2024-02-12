import { toast } from "react-toastify";

const AddUserForm = () => {
  const handleSubmitData = (event) => {
    event.preventDefault();
    const form = event.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const companyName = form.companyName.value;
    const address = form.address.value;
    const street = form.street.value;
    const city = form.city.value;
    const postalCode = form.postalCode.value;
    const image = form.image.value;

    const userData = {
      firstName,
      lastName,
      email,
      companyName,
      address,
      street,
      city,
      postalCode,
      image,
    };
    if (userData) {
      console.log(userData);
      toast.success("User Added Successful", {
        position: "top-center",
        theme: "colored",
        autoClose: 2000,
        pauseOnHover: false,
      });
      form.reset();
    }
  };
  return (
    <section className="my-container my-10 text-sm md:text-base lg:my-20">
      <h2 className="pb-4 text-center text-lg font-medium uppercase text-green-2 lg:pb-10 lg:text-2xl lg:font-bold lg:tracking-wide">
        Add User Information
      </h2>
      <div className="">
        <form onSubmit={handleSubmitData}>
          <div className="grid grid-cols-1 gap-y-6 pb-3 lg:grid-cols-2 lg:gap-x-10 lg:pb-6">
            {/* user first name input field */}
            <div className="space-y-1 lg:space-y-3">
              <label className="block">First Name:</label>
              <input
                className="w-full rounded bg-bgSecondary p-2 shadow shadow-black outline-none outline-offset-0 transition-all placeholder:text-secondary focus:outline-deep-green lg:px-3 lg:py-2.5"
                type="text"
                placeholder="Enter first Name"
                name="firstName"
                required
              />
            </div>
            {/* user last name input field */}
            <div className="space-y-1 lg:space-y-3">
              <label className="block">Last Name:</label>
              <input
                className="w-full rounded bg-bgSecondary p-2 shadow shadow-black outline-none outline-offset-0 transition-all placeholder:text-secondary focus:outline-deep-green lg:px-3 lg:py-2.5"
                type="text"
                placeholder="Enter last name"
                name="lastName"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-y-6 pb-3 lg:grid-cols-2 lg:gap-x-10 lg:pb-6">
            {/* user email input field */}
            <div className="space-y-1 lg:space-y-3">
              <label className="block">Email:</label>
              <input
                className="w-full rounded bg-bgSecondary p-2 shadow shadow-black outline-none outline-offset-0 transition-all focus:outline-deep-green lg:px-3 lg:py-2.5"
                type="email"
                placeholder="Enter Email"
                name="email"
                required
              />
            </div>
            {/* user company name input field */}
            <div className="space-y-1 lg:space-y-3">
              <label className="block">Company Name:</label>
              <input
                className="w-full rounded bg-bgSecondary p-2 shadow shadow-black outline-none outline-offset-0 transition-all focus:outline-deep-green lg:px-3 lg:py-2.5"
                type="text"
                placeholder="Enter company name"
                name="companyName"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-y-6 pb-3 lg:grid-cols-2 lg:gap-x-10 lg:pb-6">
            {/* user address input field */}
            <div className="space-y-1 lg:space-y-3">
              <label className="block">Address:</label>
              <input
                className="w-full rounded bg-bgSecondary p-2 shadow shadow-black outline-none outline-offset-0 transition-all focus:outline-deep-green lg:px-3 lg:py-2.5"
                type="text"
                placeholder="Enter address"
                name="address"
                required
              />
            </div>
            {/* user street input field */}
            <div className="space-y-1 lg:space-y-3">
              <label className="block">Street:</label>
              <input
                className="w-full rounded bg-bgSecondary p-2 shadow shadow-black outline-none outline-offset-0 transition-all placeholder:text-secondary focus:outline-deep-green lg:px-3 lg:py-2.5"
                type="text"
                placeholder="Enter street"
                name="street"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-y-6 pb-3 lg:grid-cols-2 lg:gap-x-10 lg:pb-6">
            {/* user city input field */}
            <div className="space-y-1 lg:space-y-3">
              <label className="block">City:</label>
              <input
                className="w-full rounded bg-bgSecondary p-2 shadow shadow-black outline-none outline-offset-0 transition-all focus:outline-deep-green lg:px-3 lg:py-2.5"
                type="text"
                placeholder="Enter city"
                name="city"
                required
              />
            </div>
            {/* user state input field */}
            <div className="space-y-1 lg:space-y-3">
              <label className="block">State:</label>
              <input
                className="w-full rounded bg-bgSecondary p-2 shadow shadow-black outline-none outline-offset-0 transition-all placeholder:text-secondary focus:outline-deep-green lg:px-3 lg:py-2.5"
                type="text"
                placeholder="Enter state"
                name="state"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-y-6 pb-3 lg:grid-cols-2 lg:gap-x-10 lg:pb-6">
            {/* user postal code input field */}
            <div className="space-y-1 lg:space-y-3">
              <label className="block">Postal Code:</label>
              <input
                className="w-full rounded bg-bgSecondary p-2 shadow shadow-black outline-none outline-offset-0 transition-all focus:outline-deep-green lg:px-3 lg:py-2.5"
                type="number"
                placeholder="Enter postal code"
                name="postalCode"
                required
              />
            </div>
            {/* user Avatar input field */}
            <div className="space-y-1 lg:space-y-3">
              <label className="block">Upload Image:</label>
              <input
                className="w-full rounded bg-bgSecondary p-2 shadow shadow-black outline-none outline-offset-0 transition-all file:bg-secondary focus:outline-deep-green lg:px-3 lg:py-2.5"
                type="file"
                name="image"
                required
              />
            </div>
          </div>
          <div className="mt-2 flex items-center justify-center lg:mt-6">
            <button type="submit" className="add-btn">
              Add New User
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddUserForm;
