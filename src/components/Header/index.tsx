import React, { FC } from "react";

interface HeaderProps {
  logo?: string;
  image?: string;
  popup?: boolean;
}

const Header: FC<HeaderProps> = ({ logo, image, popup }) => {
  return (
    <div className="flex justify-between items-center w-full p-2 shadow-xl bg-gray-300 rounded-b-2xl">
      <img src={logo} alt="" className="w-[100px] h-[100px] rounded-[50%]" />

      <button className="px-10 p-4 text-white rounded-2xl bg-blue-500">
        LogIn
      </button>
    </div>
  );
};

export default Header;
