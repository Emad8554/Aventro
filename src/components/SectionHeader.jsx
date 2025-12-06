import React from "react";

const SectionHeader = ({ title }) => {
  return (
    <div className="w-full text-center mb-12">
      <h1 className="mainText">{title}</h1>
      <p className="text-gray-100 mx-auto max-w-2xl mt-4">
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
        consectetur velit
      </p>
    </div>
  );
};

export default SectionHeader;
