import { LucideIcon } from "lucide-react";

export type SidebarContentProps = {
    groupLabel?: string;
    data: {
        name: string;
        url: string;
        icon: LucideIcon;
    }[];
}


export type SidebarContentType = "hotel" | "broker";