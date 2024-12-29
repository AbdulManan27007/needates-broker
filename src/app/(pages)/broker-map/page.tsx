import React from "react";
import Image from "next/image";
import { BrokerLayout } from "@/app/components/layout/SidebarLayout";

const BrokerMap = () => {
  return (
    <BrokerLayout>

    <div className="w-100% h-100% bg-BackGray flex flex-col items-center gap-[56px] justify-center py-[33px]">
      <div className="text-center">
        <p className="font-inter font-semibold text-[25px] leading-[30px] text-[#495057]">
          Good Morning, John!
        </p>
        <p className="font-inter text-h3 text-[#878A99]">
          Select a Region to see available dates
        </p>
      </div>
      <div className="w-100% h-100%">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52938394.04350317!2d-161.92225315781042!3d35.91997508297217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2s!4v1734705255327!5m2!1sen!2s"  
  height="600"
  width="1203"
  style={{ border: '0' }}
  allowfullscreen=""
  loading="lazy"
  referrerpolicy="no-referrer-when-downgrade">
</iframe>

      </div>
    </div>
    </BrokerLayout>

  );
};

export default BrokerMap;
