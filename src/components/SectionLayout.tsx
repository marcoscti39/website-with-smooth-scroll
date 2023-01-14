import React from "react";

const SectionLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-[1000px] gap-4 w-full grid grid-cols-2 mx-auto pt-[4rem]">
      {children}
    </div>
  );
};

export default SectionLayout;
