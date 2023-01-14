import React from "react";
import SectionLayout from "./SectionLayout";
import SectionSubtitle from "./SectionSubtitle";

const SignUp = () => {
  return (
    <section className="section-height bg-black text-white">
      <SectionLayout>
        <div className="flex flex-col gap-4">
          <span className="text-green-400 font-semibold">JOIN OUR TEAM</span>
          <SectionSubtitle>
            Creating an account is extremely easy
          </SectionSubtitle>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, unde
            incidunt architecto labore fuga deserunt nesciunt porro minima eaque
          </p>
          <button className="bg-white text-black w-[max-content] px-8 py-2 rounded-[100vh] ">
            Start Now
          </button>
        </div>

        <div className="bg-green-400"></div>
      </SectionLayout>
    </section>
  );
};

export default SignUp;
