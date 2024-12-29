import * as React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";

// Define an interface for the props
interface DropdownProps {
  showStatusBar: boolean;
  showActivityBar: boolean;
  showPanel: boolean;
  onStatusBarChange: (checked: boolean) => void;
  onActivityBarChange: (checked: boolean) => void;
  onPanelChange: (checked: boolean) => void;
  title: string;
}

type Checked = DropdownMenuCheckboxItemProps["checked"];

const Dropdown: React.FC<DropdownProps> = ({
  showStatusBar,
  showActivityBar,
  showPanel,
  onStatusBarChange,
  onActivityBarChange,
  onPanelChange,
  title,
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="max-w-[136px] w-full border-[#878A9933] rounded-[10px]" asChild>
        <Button
          variant="outline"
          className="flex items-center justify-between w-full px-4 py-2"
        >
         {title}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4 ml-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={showStatusBar}
          onCheckedChange={onStatusBarChange}
        >
          Status Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showActivityBar}
          onCheckedChange={onActivityBarChange}
          disabled
        >
          Activity Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showPanel}
          onCheckedChange={onPanelChange}
        >
          Panel
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Dropdown;
