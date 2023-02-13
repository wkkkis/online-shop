import React, { FC } from "react";

interface HeaderProps {
  logo: string;
}

// function name (title: string) {
//     console.log(title)
// }

// name("dede")

const Header: FC<HeaderProps> = ({ logo }) => {
  return <div>Header</div>;
};

export default Header;
