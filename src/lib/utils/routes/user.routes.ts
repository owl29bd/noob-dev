import { SidebarGroup } from "./index.routes";
import { RiApps2Line as OverviewIcon } from "react-icons/ri";
import { ListTodo } from "lucide-react";
import { IconType } from "react-icons";

export const USER_SIDEBAR_ITEMS: SidebarGroup[] = [
  {
    header: "User Dashboard",
    items: [
      {
        link: "/user/dashboard",
        text: "Dashboard",
        icon: OverviewIcon,
      },
      {
        link: "/user/todo",
        text: "ToDo List",
        icon: ListTodo as unknown as IconType,
      },
    ],
  },
];
