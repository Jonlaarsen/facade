import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  Fa42Group,
  Fa5,
  FaHeart,
  FaHorse,
  FaShoePrints,
} from "react-icons/fa6";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { title } from "process";

// Menu items.
const items = [
  {
    title: "Skateboards",
    urls: ["2025", "2024", "2023"],
    icon: <FaShoePrints />,
  },
  {
    title: "Upper",
    urls: ["2025", "2024", "2023"],
    icon: <FaHorse />,
  },
  {
    title: "Pants",
    urls: ["2025", "2024", "2023"],
    icon: <Fa42Group />,
  },
  { title: "Hats", urls: ["2025", "2024", "2023"], icon: <FaHeart /> },
  { title: "Accessories", urls: ["2025", "2024", "2023"], icon: <Fa5 /> },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent className="pt-10 bg-black text-white">
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem
                  key={item.title}
                  className="pb-5 px-2 cursor-pointer"
                >
                  <Collapsible>
                    <CollapsibleTrigger className="font-bold flex items-center justify-center space-x-2">
                      <div className="h-5 w-5">{item.icon}</div>

                      {item.title}
                    </CollapsibleTrigger>
                    <CollapsibleContent className="flex flex-col justify-start items-start space-y-2">
                      {item.urls.map((url, index) => (
                        <div
                          className="flex items-center justify-center"
                          key={index}
                        >
                          <a>{url}</a>
                        </div>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
