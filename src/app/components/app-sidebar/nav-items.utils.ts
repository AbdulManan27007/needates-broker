import { MapPin , CalendarCheck2 } from "lucide-react";
import { SidebarContentProps } from "./types";
import { APP_ROUTES } from "@/app/routes";

export const brokerNavItems: SidebarContentProps = {
    data: [
        {
            name: "Map",
            icon: MapPin,
            url: APP_ROUTES.Broker.BrokerMap
        },
        {
            name: "Available Dates",
            icon: CalendarCheck2,
            url: APP_ROUTES.Broker.AvailableDates
        },
    ],
    groupLabel: ""
}