import Lottie from "lottie-react";
import Frame from "../src/assets/frame/user_search.json";

const HeroSection = () => {
  return (
    <section className="my-container">
      <div className="grid items-center gap-6 md:grid-cols-2">
        <div className="flex justify-end md:order-2">
          <div className="mx-auto w-full sm:w-80 md:mx-0 md:w-96">
            <Lottie animationData={Frame} />
          </div>
        </div>
        <div className="space-y-3 md:space-y-5 lg:space-y-7">
          <h1 className="text-green-2 text-[30px] font-semibold leading-none tracking-wide md:text-[40px] lg:text-[50px] lg:font-bold">
            View User List
          </h1>
          <p className="text-sm opacity-70 lg:text-base lg:!leading-7">
            User List is a handy tool that keeps track of all the people using
            platform. It helps to organized by showing the names and details.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
