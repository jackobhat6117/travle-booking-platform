import { BarChartIcon, DashIcon, ListBulletIcon } from "@radix-ui/react-icons";
import { IconProps } from "@radix-ui/react-icons/dist/types";
import { ReactElement } from "react";
import { HiUserCircle } from "react-icons/hi";
import { MdSettingsApplications } from "react-icons/md";

type ItemType = {
  name: string;
  permissionNeeded: string;
  icon?: React.ComponentType<IconProps>;
};
type ChildItemType = {
  childName: string;
  permissionNeeded: string;
  icon?: React.ComponentType<IconProps>;
};
type ParentItemType = {
  parentName: string;
  icon?: React.ComponentType<IconProps>;
  permissionNeeded: string;
  childItems: ChildItemType[];
};

export const parentItems: ParentItemType[] = [
  {
    parentName: "Parent Item One",
    icon:ListBulletIcon,
    permissionNeeded: "view parentItem",
    childItems: [
      {
        childName: "Child Item One",
        permissionNeeded: "view childItemOne",
      },
    ],
  },
];
export const items: ItemType[] = [
  {
    name: "Overview",
    icon:DashIcon,
    permissionNeeded: "view overview", 
  },
  {
    name: "Analytics",
    icon:BarChartIcon,
    permissionNeeded: "view analytics",
  },
  {
    name: "Users",
    icon:HiUserCircle,
    permissionNeeded: "view users",
  },
  {
    name: "Settings",
    icon:MdSettingsApplications,
    permissionNeeded: "view settings",
  },
];

export const permissionMapper = (
  permissionList: string[]
): { items: ItemType[]; parentItems: ParentItemType[] } => {
  const returnedParentItems: ParentItemType[] = parentItems
    .filter((parent) => permissionList.includes(parent.permissionNeeded))
    .map((parent) => {
      const filteredChildItems = parent.childItems.filter((child) =>
        permissionList.includes(child.permissionNeeded)
      );
      return {
        ...parent,
        childItems: filteredChildItems,
      };
    });

  const returnedItems: ItemType[] = items.filter((el) =>
    permissionList.includes(el.permissionNeeded)
  );

  return {
    items: returnedItems,
    parentItems: returnedParentItems,
  };
};
