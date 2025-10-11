import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FloatingDock } from "./ui/FloatingDock";
import {
  IconHome,
  IconUser,
  IconDeviceDesktopCode,
  IconAddressBook,
} from "@tabler/icons-react";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const links = [
    { title: "Inicio", icon: <IconHome className="h-full w-full" />, href: "/" },
    { title: "Sobre Mí", icon: <IconUser className="h-full w-full" />, href: "/about-me" },
    { title: "Proyectos", icon: <IconDeviceDesktopCode className="h-full w-full" />, href: "/projects" },
    { title: "Contacto", icon: <IconAddressBook className="h-full w-full" />, href: "/contact" },
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
