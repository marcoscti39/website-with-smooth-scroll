import React from "react";
import SectionSubtitle from "./SectionSubtitle";

const Services = () => {
  return (
    <section className="flex flex-col items-center section-height gap-10">
      <SectionSubtitle>Our Services</SectionSubtitle>
      <div className="grid grid-cols-3 max-w-[1000px] w-full gap-4">
        <article className="h-[350px] bg-green-400 rounded"></article>
        <article className="h-[350px] bg-green-400 rounded"></article>
        <article className="h-[350px] bg-green-400 rounded"></article>
      </div>
    </section>
  );
};

export default Services;
