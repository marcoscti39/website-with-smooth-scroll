import React from "react";

const Hero = () => {
  return (
    <main className="bg-black text-white flex flex-col items-center justify-center min-h-screen">
      <div className="max-w-[600px] flex items-center flex-col">
        <h1 className="text-5xl font-bold mb-3 text-center">
          Virtual Banking Made Easy
        </h1>
        <p className="text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
          consequuntur, aliquam vero ipsum, nemo enim culpa eveniet officia
        </p>

        <a
          href=""
          className="py-2 px-4 font-semibold text-black bg-green-500 flex gap-2 w-[max-content] mx-auto rounded-[100vh] mt-6"
        >
          Get Started <span>&gt;</span>
        </a>
      </div>
    </main>
  );
};

export default Hero;
