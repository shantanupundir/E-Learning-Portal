
import React from "react";
import Image from "next/image";
import Logo from "../../public/Logo.png"
import ShadowLight from "./ShadowLight";

export default function E_Building() {
  return (
    <div className="relative">
      {/* <Image src={Logo} alt="image" className="absolute w-screen h-full xl:h-screen object-cover bg-cover"/> */}
      <ShadowLight/>
    </div>
  );
}
