import { AppLayout } from ".";
import { BrokerSidebarContent } from "../app-sidebar/SidebarContent";

export function BrokerLayout({ children }: { children: React.ReactNode }) {
  return (
    <AppLayout sidebarContent={<BrokerSidebarContent />}>{children}</AppLayout>
  );
}
