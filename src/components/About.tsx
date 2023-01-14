import React from "react";
import SectionLayout from "./SectionLayout";
import SectionSubtitle from "./SectionSubtitle";

const About = () => {
  return (
    <section className="section-height">
      <SectionLayout>
        <div className="flex flex-col gap-4">
          <span className="text-green-400">PREMIUM BANK</span>
          <SectionSubtitle>
            Unlimited Transactions with zero fees
          </SectionSubtitle>

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
      </SectionLayout>
    </section>
  );
};

export default About;
