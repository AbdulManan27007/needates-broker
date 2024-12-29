"use client";
import Link from "next/link";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { brokerNavItems} from "./nav-items.utils";
import { usePathname } from "next/navigation";

export function BrokerSidebarContent() {
  const pathname = usePathname();

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden mt-3">
      {brokerNavItems.groupLabel && (
        <SidebarGroupLabel>{brokerNavItems.groupLabel}</SidebarGroupLabel>
      )}

      <SidebarMenu className="space-y-3">
        {brokerNavItems.data.map((item) => {
          return (
            <SidebarMenuItem key={item.name}>
              <SidebarMenuButton asChild isActive={pathname.includes(item.url)}>
                <Link href={item.url}>
                  <item.icon />
                  <span>{item.name}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}


