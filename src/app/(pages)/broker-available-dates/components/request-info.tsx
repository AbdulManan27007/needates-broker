import { useState } from "react";
import * as React from "react";
import Image from 'next/image';
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { useMediaQuery } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";

const RequestInfo = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPopup(true); // Show the popup
    setOpen(false); 
  };

  const closePopup = () => {
    setShowPopup(false); // Hide the popup
  };

  if (isDesktop) {
    return (
      <>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="w-[258px] bg-RubyRed rounded-[32px] border-none h-[46px]">
              <p className="font-inter font-semibold text-[15px] text-white leading-[20px]">
                Request Info
              </p>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] bg-white">
            <DialogHeader>
              <DialogTitle className="text-center pb-[30px]">
                Request For Information
              </DialogTitle>
            </DialogHeader>
            <ProfileForm onSubmit={handleSubmit} />
          </DialogContent>
        </Dialog>
        {showPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center ">
            <div className="bg-white rounded-[15px] px-10 py-7 max-w-sm w-full text-center">
              <div className="flex justify-center mb-7">
                <Image
                  src="/images/brokerDashboard/send-ok.png" 
                  width={40}
                  height={40}
                  alt="Success"
                />
              </div>
              <h2 className="text-inter text-lg font-semibold">Thank you for your query!</h2>
              <p className="text-inter text-sm text-[#757575] mt-4">
                A Needates representative will reach out to you within 24 hours.
              </p>
              <Button
                className="mt-7 bg-RubyRed rounded-full px-6 py-2 text-white"
                onClick={closePopup}
              >
                Ok
              </Button>
            </div>
          </div>
        )}
      </>
    );
  }
  return (
    <>
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button variant="outline">Edit Profile</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader className="text-left">
            <DrawerTitle>Edit profile</DrawerTitle>
          </DrawerHeader>
          <ProfileForm onSubmit={handleSubmit} className="px-4" />
          <DrawerFooter className="pt-2">
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full text-center">
            <div className="flex justify-center mb-4">
              <Image
                src="/images/check-icon.png"
                width={40}
                height={40}
                alt="Success"
              />
            </div>
            <h2 className="text-lg font-semibold">Thank you for your query!</h2>
            <p className="text-sm text-gray-600 mt-2">
              A Needates representative will reach out to you within 24 hours.
            </p>
            <Button
              className="mt-4 bg-RubyRed rounded-full px-6 py-2 text-white"
              onClick={closePopup}
            >
              Ok
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

function ProfileForm({ onSubmit, className }: React.ComponentProps<"form"> & { onSubmit: React.FormEventHandler }) {
  return (
    <form onSubmit={onSubmit} className={cn("grid items-start gap-4 w-full max-w-[643px]", className)}>
      <div className="grid gap-2">
        <Input type="text" id="text" defaultValue="Subject" />
      </div>
      <div className="grid gap-2">
        <Textarea
          id="username"
          className="font-inter text-h9 text-[#25282B80] p-4 leading-relaxed"
          defaultValue={`Hi,
I’d like more information on the following needdate. Please contact me to discuss my needs.

Thank you,
John Smith

Phone: +1  (123) 1234 1234
Email:   johnsmith12@gmail.com`}
        />
      </div>
      <div className="flex justify-between items-center">
        <div className="flex flex-row items-center cursor-pointer">
          <Image src="/images/brokerDashboard/attachment.png" width={16} height={18} alt="" />
          <div className="relative">
            <Input
              id="picture"
              type="file"
              className="absolute inset-0 opacity-0"
            />
            <button
              type="button"
              className="bg-blue-500 px-4 py-2 rounded font-inter text-h8 font-medium cursor-pointer"
            >
              Add Attachment
            </button>
          </div>
        </div>
        <Button
          type="submit"
          className="max-w-[168px] w-full bg-RubyRed rounded-[32px] border-none h-[46px]"
        >
          <p className="font-inter font-semibold text-[15px] text-white leading-[20px]">
            Send
          </p>
        </Button>
      </div>
    </form>
  );
}

export default RequestInfo;
