import * as React from "react";
import Image from "next/image";
import {
  TableCell,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";

interface TableDataProps {
  location: string;
  state: string;
  dateRange: string;
  hotelName: string;
  hotelImageSrc: string;
}

const TableData: React.FC<TableDataProps> = ({ location, state, dateRange, hotelName, hotelImageSrc }) => {
  return (
      <TableRow>
        <TableCell className="text-h10 font-inter text-[#525252]">
          {location}
        </TableCell>
        <TableCell className="text-center text-h10 font-inter text-[#525252]">
          {state}
        </TableCell>
        <TableCell className="flex justify-center">
          <div className="border border-[#878A9980] rounded-[50px] flex-row flex px-[22px] py-2 gap-[9px]">
            <p>
              <Image
                src="/images/brokerDashboard/event.png"
                height={14}
                width={14}
                alt=""
              />
            </p>
            <p className="text-h10 font-inter text-[#525252]">
              {dateRange}
            </p>
          </div>
        </TableCell>
        <TableCell>
          <div className="text-center">
            <Checkbox id="terms" />
          </div>
        </TableCell>
        <TableCell>
          <div className="flex flex-row items-center gap-2">
            <p>
              <Image
                src={hotelImageSrc}
                height={26}
                width={26}
                alt=""
              />
            </p>
            <p className="text-h10 font-inter text-[#525252]">
              {hotelName}
            </p>
          </div>
        </TableCell>
      </TableRow>
  );
};

export default TableData;
