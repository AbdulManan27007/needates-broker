"use client"
import Link from 'next/link';
import Image from "next/image";
import React, { useState } from 'react';
import { TypographyLarge } from "../Typography";
import { CustomSidebarTrigger } from "../app-sidebar/SidebarTrigger";


export function TopBar() {
  const [notificationCount, setNotificationCount] = useState(0);

  const increment = () => setNotificationCount((prev) => prev + 1);
  const decrement = () =>
    setNotificationCount((prev) => (prev > 0 ? prev - 1 : 0));


  return (
    <header className=" flex bg-sidebar justify-between border-b border-sidebar-border h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2 px-4">

        <CustomSidebarTrigger />
        <TypographyLarge>Upload Needates</TypographyLarge>
      </div>
      <div className=" flex items-center justify-center flex-row h-full space-x-[40px] mr-[58px]">
      <Image src="/images/brokerDashboard/Flag.png" width={30} height={30} alt=""/>
      <Image src="/images/brokerDashboard/IconSet.png" width={32} height={32} alt=""/>
      <div className="relative inline-block ">
      <Image
        src="/images/brokerDashboard/bell.png"
        width={34}
        height={39}
        alt="Notification Icon"
      />
      {notificationCount > 0 && (
        <span className="absolute -top-2 -right-1 flex  h-5 w-5 bg-RubyRed items-center justify-center rounded-full bg-red-600 text-xs text-white">
          {notificationCount}
        </span>
      )}
    </div>
    <Link href="/broker-profile" className=''>
      <span className="max-w-[190px] px-[28px] cursor-pointer w-full h-[90px] flex flex-row  items-center justify-center  bg-[#94131B] bg-opacity-5  gap-[11px]">
       <Image src="/images/brokerDashboard/user.png" width={40} height={40} alt=""/>
        <p className="font-inter text-h8  font-medium text-[#495057]">John Smith</p>
      </span>
      </Link>
      </div>
    </header>
  );
}
