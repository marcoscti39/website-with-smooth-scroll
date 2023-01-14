import React from "react";

const SectionSubtitle = ({ children }: { children: string }) => {
  return (
    <h2 className="text-[4rem] leading-[4rem] font-bold" id="about">
      {children}
    </h2>
  );
};

export default SectionSubtitle;
