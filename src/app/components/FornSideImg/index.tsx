import React from "react";
import Image from "next/image";
export const FormSideImg = () => {
  return (
    <>
      {/* form side img start */}
      <div className="w-full lg:max-w-[717px] bg-white h-full lg:h-[100%] xl:fixed hidden lg:flex">
        <div className=" bg-[url('/images/Authpics/auth-objects.png')] bg-contain bg-no-repeat bg-bottom w-[100%]  flex flex-col items-center justify-starth-full lg:h-[100%] ">
          <div className=" relative pb-[106px] pt-[106px] ">
            <div className=" absolute inset-0 z-0 pt-[190px]">
              <Image
                src="/images/Authpics/auth-square.png"
                width={207}
                height={218}
                alt="Square"
              />
            </div>
            <div className=" relative z-10 pl-[106px] ">
              <Image
                src="/images/Authpics/auth-person.png"
                width={354}
                height={416}
                alt="Square"
              />
            </div>
          </div>
          <div className="pb-[120px]">
            <Image
              src="/images/Authpics/auth-logo.png"
              width={230}
              height={129}
              alt="Square"
            />
          </div>
        </div>
      </div>
      {/* form side img end */}
    </>
  );
};
