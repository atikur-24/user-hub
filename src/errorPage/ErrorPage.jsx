import { HiArrowLeft } from "react-icons/hi";
import { Link, useRouteError } from "react-router-dom";
import errorImg from "../assets/frame/error.jpg";
const ErrorPage = () => {
  const { error } = useRouteError();

  return (
    <section className="my-container mt-5 flex flex-col items-center justify-center md:mt-10 lg:mt-16 lg:flex-row">
      <div className="w-1/2">
        <img className="w-2/3 rounded-md" src={errorImg} alt="error" />
      </div>
      <div className="mr-16 space-y-5 lg:mr-20 lg:space-y-8">
        <h2 className="text-4xl font-bold tracking-wide text-secondary">
          Page Not Found
        </h2>
        <h5 className="font-semibold text-red-600/80">{error?.message}</h5>
        <button className="lg:pt-10">
          <Link
            to="/"
            className="inline-flex items-center gap-3 bg-deep-green px-2 py-3 font-medium lg:font-semibold"
          >
            <HiArrowLeft /> Back to Home page
          </Link>
        </button>
      </div>
    </section>
  );
};

export default ErrorPage;
