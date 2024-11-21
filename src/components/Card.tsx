import React from "react";

export const Card = ({ title, description, image, link, color }: any) => {
  return (
    <a
      href={link}
      className="flex relative flex-col items-start p-6 pt-5 rounded-2xl w-full border border-gray-300 dark:border-slate-700 hover:bg-blue-500 dark:hover:bg-blue-500 text-black dark:text-white transition-transform ease-in-out hover:-translate-y-3"
    >
      {image}
      <br/>
      <h4 className="text-xl mt-2 font-medium z-10">{title}</h4>
      <p className="my-2 mb-8 z-10 text-base">{description}</p>
    </a>
  );
};