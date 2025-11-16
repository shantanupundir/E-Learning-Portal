import React from "react";

export default function ShadowLight() {
  return (
    <div className="absolute  text-white  w-[90%] md:w-[95%] xl:w-[85%] left-0 right-0 mx-auto">
      <div className="">
        <p className="hidden lg:block absolute top-0 -left-28 rotate-45 w-[400px] h-[15px] bg-[linear-gradient(135.39deg,#FFFFFF_1.67%,#D3D8DF_60.17%)] rounded-[90%] border border-t-slate-600/40 blur-[30px]"></p>
        <p className="hidden lg:block absolute top-0 -left-96 rotate-45 w-[550px] h-[25px] bg-[linear-gradient(135.39deg,#FFFFFF_1.67%,#B6B8B7_8.17%)] rounded-[90%] border border-t-slate-600/20 blur-[26px]"></p>
        <p className="hidden lg:block absolute top-0 lg:right-20 xl:-right-36 rotate-45 lg:w-[350px] xl:w-[400px] h-[15px] bg-[linear-gradient(135.39deg,#FFFFFF_1.67%,#D3D8DF_60.17%)] rounded-[90%] border border-t-slate-600/40 blur-[26px]"></p>

        <p className="hidden lg:block absolute top-0 lg:-right-20  xl:-right-16 rotate-45 lg:w-[450px] xl:w-[550px] h-[25px] bg-[linear-gradient(135.39deg,#FFFFFF_1.67%,#B6B8B7_8.17%)] rounded-[90%] border border-t-slate-600/20 blur-[44px]"></p>
      </div>
    </div>
  );
}
