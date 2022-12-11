import React from "react";

const About = () => {
  return (
    <section className="section-height">
      <div className="max-w-[1000px] w-full grid grid-cols-2 mx-auto pt-[4rem]">
        <div className="flex flex-col gap-4">
          <span className="text-green-400">PREMIUM BANK</span>

          <h2 className="text-[4rem] leading-[4rem] font-bold">
            Unlimited Transactions with zero fees
          </h2>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Necessitatibus, tenetur fugit minima possimus placeat adipisci velit
            qui accusantium nostrum reprehenderit optio labore ex blanditiis.
            Omnis eius ab porro voluptate quisquam?
          </p>

          <button className="w-[max-content] font-semibold text-black py-2 px-[1.25rem] rounded-[100vh] bg-green-400">
            Get Started
          </button>
        </div>
        <div className="bg-green-400"></div>
      </div>
    </section>
  );
};

export default About;
