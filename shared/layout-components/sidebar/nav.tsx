import React from "react";

const HomeIcon = <i className="bx bx-home side-menu__icon"></i>;
const NotificationsIcon = <i className="bx bx-bell side-menu__icon"></i>;
const ChatIcon = <i className="bx bx-chat side-menu__icon"></i>;
const ProfileIcon = <i className="bx bx-user side-menu__icon"></i>;
const SettingsIcon = <i className="bx bx-cog side-menu__icon"></i>;

const ErrorIcon = <i className="bx bx-error side-menu__icon"></i>;

const NestedmenuIcon = <i className="bx bx-layer side-menu__icon"></i>;

const badge = (
  <span className="badge !bg-warning/10 !text-warning !py-[0.25rem] !px-[0.45rem] !text-[0.75em] ms-2">
    12
  </span>
);
const badge1 = (
  <span className="text-secondary text-[0.75em] rounded-sm !py-[0.25rem] !px-[0.45rem] badge !bg-secondary/10 ms-2">
    New
  </span>
);
const badge2 = (
  <span className="text-danger text-[0.75em] rounded-sm badge !py-[0.25rem] !px-[0.45rem] !bg-danger/10 ms-2">
    Hot
  </span>
);
const badge4 = (
  <span className="text-success text-[0.75em] badge !py-[0.25rem] !px-[0.45rem] rounded-sm bg-success/10 ms-2">
    3
  </span>
);

export const MenuItems: any = [

  {
    icon: HomeIcon,
    path: "/home/home-page",
    title: "Home",
    type: "link",
    active: false,
    class: "text-sm"
  },
  {
    icon: NotificationsIcon,
    title: "Notifications",
    type: "link",
    active: false,
  },
  {
    icon: ChatIcon,
    title: "Chat",
    type: "link",
    active: false,
  },
  {
    icon: ProfileIcon,
    title: "Profile",
    type: "link",
    active: false,
  },
  {
    icon: SettingsIcon,
    title: "Settings",
    type: "link",
    active: false,
  },
];
export default MenuItems;
