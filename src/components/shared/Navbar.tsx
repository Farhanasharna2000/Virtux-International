import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className="py-2 flex items-center justify-between">
      <div className="flex items-center ">
        <Image src="/logo.png" width={70} height={70} alt="" />
        <div className="font-bold">
          <p>VIRTUX</p>
          <p>INTERNATIONAL</p>
        </div>
      </div>
      <div className="flex items-center justify-between"></div>
    </nav>
  );
};

export default Navbar;
