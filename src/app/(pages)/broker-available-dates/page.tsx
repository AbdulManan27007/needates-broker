"use client";
import Image from "next/image";
import Dropdown from "./components/dropdown";
import Link from "next/link";
import RequestInfo from "./components/request-info";
import TableData from "./components/table-data";
import { BrokerLayout } from "@/app/components/layout/SidebarLayout";
import * as React from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const AvailableDates = () => {
  const [showStatusBar, setShowStatusBar] = React.useState(true);
  const [showActivityBar, setShowActivityBar] = React.useState(false);
  const [showPanel, setShowPanel] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(1);
  const rowsPerPage = 8;

  const tableData = Array(45).fill({
    location: "Washington",
    state: "DC",
    dateRange: "15 Nov, 2023 - 26 Nov, 2023",
    hotelName: "Washington Hilton",
    hotelImageSrc: "/images/brokerDashboard/hotel01.png",
  });

  const totalPages = Math.ceil(tableData.length / rowsPerPage);

  const currentRows = tableData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <BrokerLayout>
      <div className="bg-BackGray p-[36px]">
        <Link href="/broker-map">
          <button className="flex flex-row items-center py-[11px] px-[13px] rounded-[8px]  gap-[14px] bg-white shadow-custom mb-[33px]">
            <Image
              src="/images/brokerDashboard/arrow_back.png"
              width={17}
              height={17}
              alt=""
            />
            <p>Back</p>
          </button>
        </Link>
        <div className="p-4 bg-white rounded-[15px]">
          {/* DropDown */}
          <div className="flex flex-row justify-between mb-[27px]">
            {/* Input */}
            <div className="relative max-w-[394px] w-full flex items-center">
              <Image
                src="/images/brokerDashboard/search.png"
                height={16}
                width={16}
                alt=""
                className="absolute left-3 top-1/2 transform -translate-y-1/2"
              />
              <Input
                className="pl-8 w-full outline-none border rounded-md py-2"
                type="text"
                placeholder="Search"
              />
            </div>

            {/* Dropdown */}
            <div className="flex flex-row space-x-[20px] ">
              <Dropdown
                title="State"
                showStatusBar={showStatusBar}
                showActivityBar={showActivityBar}
                showPanel={showPanel}
                onStatusBarChange={setShowStatusBar}
                onActivityBarChange={setShowActivityBar}
                onPanelChange={setShowPanel}
              />
              <Dropdown
                title="Year"
                showStatusBar={showStatusBar}
                showActivityBar={showActivityBar}
                showPanel={showPanel}
                onStatusBarChange={setShowStatusBar}
                onActivityBarChange={setShowActivityBar}
                onPanelChange={setShowPanel}
              />
              <Dropdown
                title="Month"
                showStatusBar={showStatusBar}
                showActivityBar={showActivityBar}
                showPanel={showPanel}
                onStatusBarChange={setShowStatusBar}
                onActivityBarChange={setShowActivityBar}
                onPanelChange={setShowPanel}
              />
            </div>
          </div>
          {/* Table */}

          <Table>
            <TableHeader>
              <TableRow className="bg-[#F6F6F6] rounded-[12px]">
                <TableHead className="w-20% font-inter text-h7 text-[#525252] font-semibold">
                  City
                </TableHead>
                <TableHead className="w-20% text-center font-inter text-h7 text-[#525252] font-semibold">
                  State
                </TableHead>
                <TableHead className="w-20% text-center font-inter text-h7 text-[#525252] font-semibold">
                  Date Available
                </TableHead>
                <TableHead className="w-20% text-center font-inter text-h7 text-[#525252] font-semibold">
                  Select
                </TableHead>
                <TableHead className="w-20% font-inter text-h7 text-[#525252] font-semibold">
                  Hotel Name
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentRows.map((data, index) => (
                <TableData
                  key={index}
                  location={data.location}
                  state={data.state}
                  dateRange={data.dateRange}
                  hotelName={data.hotelName}
                  hotelImageSrc={data.hotelImageSrc}
                />
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="mt-[38px] flex justify-between ">
          <div className="flex flex-row items-center py-[15px] px-[20px] rounded-[48px] bg-white text-center gap-[27px] border border-[#DADADA]">
          <p className="font-poppins font-medium text-[12px] leading-[18px] text-[#525252]">
          Total {tableData.length}
          </p>
         
          <p className="py-[6px] px-[20px] rounded-[48px] font-poppins font-medium text-[12px] leading-[18px] text-[#525252] border border-[#878A9933]">
          {rowsPerPage}/pages
          </p>
          </div>
          <div>
            {" "}
            {/* Pagination */}
            <Pagination>
              <PaginationContent className="bg-white rounded-[50px]">
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={() =>
                      handlePageChange(Math.max(currentPage - 1, 1))
                    }
                    className="bg-RubyRed text-white rounded-[58px] m-2"
                  />
                </PaginationItem>
                {[...Array(totalPages)].map((_, i) => (
                  <PaginationItem key={i}>
                    <PaginationLink
                      href="#"
                      onClick={() => handlePageChange(i + 1)}
                      className={`px-3 py-1 rounded-[50px] ${
                        currentPage === i + 1
                          ? "bg-RubyRed text-white"
                          : "bg-gray-200 text-black"
                      }`}
                    >
                      {i + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={() =>
                      handlePageChange(Math.min(currentPage + 1, totalPages))
                    }
                    className="bg-RubyRed text-white rounded-[58px] m-2"
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
          <div>
            <RequestInfo />
          </div>
        </div>
      </div>
    </BrokerLayout>
  );
};

export default AvailableDates;
