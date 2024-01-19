import {
  IconLayoutDashboard,
  IconLogin,
  IconTypography,
} from "@tabler/icons-react";

import { uniqueId } from "lodash";

const MenuItems = () => {
  const items = [
    {
      id: uniqueId(),
      title: "Home",
      icon: IconLayoutDashboard,
      href: "/",
    },
    {
      id: uniqueId(),
      title: "Blogs",
      icon: IconTypography,
      href: "/blog",
    },
    {
      id: uniqueId(),
      title: "Categories",
      icon: IconTypography,
      href: "/categories",
    },
    {
      id: uniqueId(),
      title: "About",
      icon: IconTypography,
      href: "/about",
    },
    {
      id: uniqueId(),
      title: "Contact",
      icon: IconLogin,
      href: "/contact",
    },
  ];
  return { items };
};

export default MenuItems;
