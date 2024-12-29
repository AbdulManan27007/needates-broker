import Image from "next/image";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import React from "react";

type Props = { sidebarContent: React.ReactNode } & React.ComponentProps<
  typeof Sidebar
>;

export function AppSidebar({ sidebarContent, ...props }: Props) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <Image src={"/images/Authpics/Logo.png"} width={88} height={49} alt="Logo" />
      </SidebarHeader>
      <SidebarContent>{sidebarContent}</SidebarContent>

      <SidebarRail />
    </Sidebar>
  );
}
