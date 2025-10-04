import React from "react";
import { FloatingDock } from "./ui/FloatingDock";
import {
  IconHome,
  IconUser,
  IconDeviceDesktopCode,
  IconFileSmile,
  IconAddressBook,
} from "@tabler/icons-react";

const Navbar = () => {
  const links = [
    { title: "Inicio", icon: <IconHome className="h-full w-full text-neutral-500" />, href: "/" },
    { title: "Sobre Mi", icon: <IconUser className="h-full w-full text-neutral-500" />, href: "/about-me" },
    { title: "Proyectos", icon: <IconDeviceDesktopCode className="h-full w-full text-neutral-500" />, href: "/projects" },
    { title: "Contacto", icon: <IconAddressBook className="h-full w-full text-neutral-500" />, href: "/contact" },
  ];

  // Se envían los links al FloatingDock
  return (
    <div className="flex items-center justify-center h-20 w-full">
      <FloatingDock
        items={links.map(link => ({
          ...link,
          href: link.href,
        }))}
      />
    </div>
  );
};

export default Navbar;
