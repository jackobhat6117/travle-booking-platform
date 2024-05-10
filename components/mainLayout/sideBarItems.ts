import {
  AvatarIcon,
  DashboardIcon,
  ListBulletIcon,
  LockClosedIcon,
} from "@radix-ui/react-icons";
import { IconProps } from "@radix-ui/react-icons/dist/types";

type ItemType = {
  name: string;
  permissionNeeded: string;
  to: string;
  icon?: React.ComponentType<IconProps>;
};
type ChildItemType = {
  childName: string;
  permissionNeeded: string;
  to: string;
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
    icon: ListBulletIcon,
    permissionNeeded: "view parentItem",
    childItems: [
      {
        childName: "Child Item One",
        permissionNeeded: "view childItemOne",
        to:"/some_place"
      },
    ],
  },
];
export const items: ItemType[] = [
  {
    name: "Dashboard",
    icon: DashboardIcon,
    to: "/dashboard",
    permissionNeeded: "view dashboard",
  },
  {
    name: "Users",
    icon: AvatarIcon,
    to: "/users",
    permissionNeeded: "view users",
  },
  {
    name: "Roles And Permission",
    icon: LockClosedIcon,
    to: "/roles_and_permission",
    permissionNeeded: "view roles_and_permission",
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
