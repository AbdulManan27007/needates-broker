import React from "react";
import Image from "next/image";
import { BrokerLayout } from "@/app/components/layout/SidebarLayout";

const BrokerProfile = () => {
  return (
    <BrokerLayout>
      <div className="bg-BackGray p-[36px] ">
    <div className="w-100% h-100% bg-white rounded-[15px] ">
      <div className="px-[38px]">
        <div className=" flex flex-row justify-between py-[26px] items-center">
          <p className="font-inter font-bold text-TextGray text-h2">
            Edit Profile
          </p>
          <button className="flex flex-row items-center space-x-[7px] py-[13px] px-[32px] border border-RubyRed rounded-[7px] bg-[#94131B] bg-opacity-5 ">
            <Image
              src="/images/brokerDashboard/shutdown.png"
              width={16}
              height={16}
              alt=""
            />
            <p className="font-inter text-h6 text-RubyRed font-semibold">
              Logout
            </p>
          </button>
        </div>
        <div className="b-dashboard-container h-[1px] bg-[#BFBFBF]"></div>

        <div className="pt-[38px] flex justify-between ">
          <div className="max-w-[422px] w-full ">
            <p className="font-inter text-h3 text-[#525252]">Contact Details</p>
            <p className="font-inter text-h6 text-[#525252CC] pt-[24px] ">
              These information will be shown when you will ask for any query
              for hotels
            </p>
            <form action="" className="flex flex-col justify-between pt-[38px] h-[85%]">
            <div className="space-y-[26px]">
              <div className="flex flex-col max-w-[422px] w-full">
                <label
                  htmlFor="username"
                  className=" text-gray-700 mb-2 font-inter text-h10 text-[#52525299]"
                >
                  Full Name
                </label>
                <div className="flex justify-between items-center gap-3">
                <input
                  type="text"
                  id="username"
                  defaultValue="John Smith"
                  className="w-full  py-2 border border-gray-300 rounded-md focus:outline-none border-none font-inter text-h4 font-medium"
                />
                <p className="cursor-pointer">
                  <Image
                  src="/images/brokerDashboard/edit-pencil.png"
                  width={14}
                  height={14}
                  alt="edit"/>
                </p>
                </div>
              </div>
              <div className="flex flex-col max-w-[422px] w-full">
                <label
                  htmlFor="email"
                  className=" text-gray-700 mb-2 font-inter text-h10 text-[#52525299]"
                >
                  Email
                </label>
                <div className="flex justify-between items-center gap-3">
                <input
                  type="email"
                  id="email"
                  defaultValue="john12@gmail.com"
                  className="w-full  py-2 border border-gray-300 rounded-md focus:outline-none border-none font-inter text-h4 font-medium"
                />
                <p className="cursor-pointer">
                  <Image
                  src="/images/brokerDashboard/edit-pencil.png"
                  width={14}
                  height={14}
                  alt="edit"/>
                </p>
                </div>
              </div>
              <div className="flex flex-col max-w-[422px] w-full">
                <label
                  htmlFor="phone"
                  className=" text-gray-700 mb-2 font-inter text-h10 text-[#52525299]"
                >
                  Phone
                </label>
                <div className="flex justify-between items-center gap-3">
                <input
                  type="text"
                  id="phone"
                  defaultValue="+1 (123) 1234 1234"
                  className="w-full  py-2 border border-gray-300 rounded-md focus:outline-none border-none font-inter text-h4 font-medium"
                />
                <p className="cursor-pointer">
                  <Image
                  src="/images/brokerDashboard/edit-pencil.png"
                  width={14}
                  height={14}
                  alt="edit"/>
                </p>
                </div>
              </div>
              </div>
              <div className="mb-[43px]">
                    <button className="w-[258px] bg-RubyRed rounded-[32px]">
                      <h1 className="font-inter font-semibold text-[15px] text-white leading-[20px] py-[17px]">
                        Save Profile
                      </h1>
                    </button>
                  </div>
            </form>
          </div>
          <p className="h-[580px] w-[1px] bg-[#BFBFBFCC] mr-[145px] ml-[77px]"></p>
          <div className="flex flex-col justify-start max-w-[996px] w-full ">
          <p className="font-inter text-h3 text-[#525252]">Login Details</p>
        <form action="">
          <div className="flex flex-col max-w-[296px] w-full pt-[34px]">
                <label
                  htmlFor="email"
                  className=" text-gray-700 mb-2 font-inter text-h10 text-[#52525299]"
                >
                  Email
                </label>
                <div className="flex justify-between items-center gap-3">
                <input
                  type="text"
                  id="email"
                  defaultValue="John Smith"
                  className="w-full  py-2 border border-gray-300 rounded-md focus:outline-none border-none font-inter text-h4 font-medium"
                />
                <p className="cursor-pointer font-inter text-h10 text-RubyRed underline font-semibold">
                change
                </p>
                </div>
              </div>
              <div className="flex flex-col max-w-[296px] w-full pt-[34px]">
                <label
                  htmlFor="password"
                  className=" text-gray-700 mb-2 font-inter text-h10 text-[#52525299]"
                >
                  Password
                </label>
                <div className="flex justify-between items-center gap-3">
                <input
                  type="password"
                  id="password"
                  defaultValue="John Smith"
                  className="w-full  py-2 border border-gray-300 rounded-md focus:outline-none border-none font-inter text-h4 font-medium"
                />
                <p className="cursor-pointer font-inter text-h10 text-RubyRed underline font-semibold">
                change
                </p>
                </div>
              </div>
              </form>
          </div>
        </div>
      </div>
    </div>
    </div>
    </BrokerLayout>

  );
};
export default BrokerProfile;
