import React from 'react'
import LogiscanLogo from "../../../public/logiscan logo.png";
import LogiscanLogoDark from "../../../public/logiscan logo-dark.png";
import Image from "next/image";
import Link from "next/link";
import {cn} from "@/lib/utils";

type Props = {
  className?: string;
  height?: number;
  width?: number;
}

const Logo = (props:Props) => {
  return (
    <Link href="/">
      <div className={cn("flex items-center justify-center dark:hidden aspect-auto",props.className)}>
        <Image
          src={LogiscanLogo}
          alt={"favicon-icon"}
          width={props.width ?? 200}
          height={props.height ?? 40}
          className="object-contain object-center"
        />
      </div>
      <div className={cn("hidden dark:flex items-center justify-center aspect-auto", props.className)}>
        <Image
          src={LogiscanLogoDark}
          alt={"favicon-icon"}
          width={props.width ?? 200}
          height={props.height ?? 40}
          className="object-contain object-center"
        />
      </div>
    </Link>
  )
}
export default Logo
