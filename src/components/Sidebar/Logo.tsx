import React from 'react'
import LogiscanLogo from "../../../public/logiscan logo.png";
import LogiscanLogoDark from "../../../public/logiscan logo-dark.png";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center justify-center h-16 dark:hidden">
        <Image
          src={LogiscanLogo}
          alt={"favicon-icon"}
          width={200}
          height={40}
        />
      </div>
      <div className="hidden dark:flex items-center justify-center h-16">
        <Image
          src={LogiscanLogoDark}
          alt={"favicon-icon"}
          width={200}
          height={40}
        />
      </div>
    </Link>
  )
}
export default Logo
