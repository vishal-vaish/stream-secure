import React from 'react'
import LogiscanLogo from "../../../public/logiscan logo.png";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center justify-center h-16">
      <Image
        src={LogiscanLogo}
        alt={"favicon-icon"}
        width={200}
        height={40}
      />
    </div>
  )
}
export default Logo
