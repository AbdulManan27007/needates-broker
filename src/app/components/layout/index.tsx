import { AppSidebar } from "../app-sidebar";
import { TopBar } from "../top-bar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

type Props = {
  children: React.ReactNode;
  sidebarContent: React.ReactNode;
};
export function AppLayout({ children, sidebarContent }: Props) {
  return (
    <SidebarProvider>
      <AppSidebar
        className="border-sidebar-border"
        sidebarContent={sidebarContent}
      />
      <SidebarInset>
        <TopBar />
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
