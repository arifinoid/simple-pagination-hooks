import React from "react";

export const CardContainer = ({ children }) => (
  <div className="grid grid-cols-3 gap-4 mt-8">{children}</div>
);

const Card = ({ data }) => {
  const { title, id, thumbnailUrl } = data;

  return (
    <div className="md:flex max-w-sm rounded-lg overflow-hidden shadow-lg p-4">
      <img
        className="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6"
        src={thumbnailUrl}
        alt="profile"
      />
      <div className="text-center md:text-left">
        <h2 className="text-lg">{title}</h2>
        <div className="text-purple-500">ID: #{id}</div>
      </div>
    </div>
  );
};

export default Card;
