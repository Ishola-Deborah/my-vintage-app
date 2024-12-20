const Hero = () => {
  return (
    <div className="max-w-screen-xl mx-auto  px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
        <div>
          <div className="max-w-lg md:max-w-none">
            <h2 className="text-xl font-semibold text-white sm:text-3xl">
              We are
            </h2>
            <h1 className="text-2xl">SOUTHAMTON ATHLETIC CLUB</h1>
            <p className="mt-4 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              doloremque saepe architecto maiores repudiandae amet perferendis
              repellendus, reprehenderit voluptas sequi.
            </p>
          </div>
          {/* Button */}
          <div className="py-6">
            <a
              className="group relative inline-block text-sm font-medium text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
              href="#"
            >
              <span className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-indigo-600 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>

              <span className="relative block border border-current bg-white px-8 py-3">
                {" "}
                Get Started{" "}
              </span>
            </a>

            {/* Hover */}
{/* 
            <a
              className="group relative inline-block text-sm font-medium text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
              href="#"
            >
              <span className="absolute inset-0 translate-x-0 translate-y-0 bg-indigo-600 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"></span>

              <span className="relative block border border-current bg-white px-8 py-3">
                {" "}
                Watch Video{" "}
              </span>
            </a> */}
          </div>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1731690415686-e68f78e2b5bd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="rounded"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
