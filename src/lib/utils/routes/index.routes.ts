import { IconType } from "react-icons/lib";
import { USER_SIDEBAR_ITEMS } from "./user.routes";

export interface SidebarItem {
  link: string;
  text: string;
  icon: IconType;
  child?: {
    header?: string;
    items: SidebarItem[];
  };
}

export interface SidebarGroup {
  header?: string;
  items: SidebarItem[];
}

export const roleAccessConfig = {
  admin: ["/"],
  approver: ["/approver", "/onboarding"],
  analyst: ["/analyst", "/onboarding"],
  investigator: ["/investigator", "/onboarding"],
  si: ["/si", "/onboarding"],
  sa: ["/sa", "/onboarding"],
  user: ["/onboarding"],
};

export const SIDEBAR_ITEMS = {
  USER: USER_SIDEBAR_ITEMS,
};
