import React from "react";
import SectionLayout from "./SectionLayout";
import SectionSubtitle from "./SectionSubtitle";

const Discover = () => {
  return (
    <section className="section-height bg-black text-white">
      <SectionLayout>
        <div className="bg-green-400" />
        <article className="flex flex-col gap-4">
          <strong className="text-green-400">UNLIMITED ACCESS</strong>
          <SectionSubtitle>Login to your account at any time</SectionSubtitle>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In, minima
            quasi natus tenetur repellat doloribus reiciendis? Maiores tempore,
          </p>

          <button className="bg-white py-2 px-4 rounded text-black w-[max-content]">
            Learn More
          </button>
        </article>
      </SectionLayout>
    </section>
  );
};

export default Discover;
