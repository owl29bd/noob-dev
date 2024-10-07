import { SidebarGroup } from "./index.routes";
import {
  RiPieChart2Line as AnalyticsIcon,
  RiApps2Line as OverviewIcon,
} from "react-icons/ri";

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
        link: "/user/analytics",
        text: "Analytics",
        icon: AnalyticsIcon,
      },
    ],
  },
];
