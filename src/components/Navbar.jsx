import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FloatingDock } from "./ui/FloatingDock";
import {
  IconHome,
  IconUser,
  IconDeviceDesktopCode,
  IconAddressBook,
} from "@tabler/icons-react";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [t] = useTranslation("global");
  const navigate = useNavigate();
  const location = useLocation();
  const links = [
    { title: t("navbar.home"), icon: <IconHome className="h-full w-full" />, href: "/" },
    { title: t("navbar.about"), icon: <IconUser className="h-full w-full" />, href: t("routes.about-me") },
    { title: t("navbar.projects"), icon: <IconDeviceDesktopCode className="h-full w-full" />, href: t("routes.projects") },
    { title: t("navbar.contact"), icon: <IconAddressBook className="h-full w-full" />, href: t("routes.contact") },
  ];

  return (
    <div className="flex items-center justify-center h-20 w-full">
      <FloatingDock
        items={links.map((link) => ({
          title: link.title,
          icon: (
            <div
              className={`transition-colors duration-300 ${
                location.pathname === link.href
                  ? "text-icon-select"
                  : "text-icon hover:text-icon-hover"
              }`}
            >
              {link.icon}
            </div>
          ),
          href: link.href,
          onClick: () => navigate(link.href),
        }))}
      />
    </div>
  );
};

export default Navbar;
