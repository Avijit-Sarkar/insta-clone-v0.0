import Image from "next/image";
import React from "react";

function Header() {
  return (
    <div>
      <div className="flex justify-between max-w-6xl">
        {/* Left */}
        <div className="relative hidden lg:inline-grid h-24 w-24 cursor-pointer">
          <Image
            src="http://links.papareact.com/ocw"
            alt=""
            objectFit="contain"
            layout="fill"
          />
        </div>
        <div className="relative w-10 h-10 lg:hidden flex-shrink-0 cursor-pointer">
          <Image
            src="http://links.papareact.com/jjm"
            alt=""
            objectFit="contain"
            layout="fill"
          />
        </div>
        {/* Middle - input search filed */}
        {/* Right */}
      </div>
    </div>
  );
}

export default Header;
