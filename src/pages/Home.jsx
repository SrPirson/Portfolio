import React, { useState } from "react";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconFileCv,
  IconBrandWhatsapp,
} from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

const SocialIcon = ({ title, icon, href, download, copyText, copiedText }) => {
  const [hovered, setHovered] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleClick = async (e) => {
    if (copyText) {
      e.preventDefault();
      try {
        await navigator.clipboard.writeText(copyText);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      } catch (err) {
        console.error("No se pudo copiar al portapapeles", err);
      }
    }
  };

  return (
    <motion.a
      href={href}
      download={download}
      target={!copyText && !download ? "_blank" : undefined}
      rel={!copyText && !download ? "noopener noreferrer" : undefined}
      className="relative flex flex-col items-center justify-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={handleClick}
    >
      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        className="flex items-center justify-center w-14 h-14 rounded-4xl border-2 border-gray-400 dark:border-gray-700 bg-gray-100 dark:bg-black text-gray-400 hover:text-violet-400 transition-colors duration-500"
      >
        {icon}
      </motion.div>

      <AnimatePresence>
        {(hovered || copied) && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 6 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full mt-2 px-2 py-1 text-xs rounded-md bg-gray-100 dark:bg-gray-800 text-neutral-700 dark:text-gray-200 shadow-md whitespace-nowrap"
          >
            {copied ? copiedText : title}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.a>
  );
};

const Home = () => {
  const [t] = useTranslation("global");

  const socialLinks = [
    {
      title: t("home.social.github"),
      icon: <IconBrandGithub />,
      href: "https://github.com/srpirson",
    },
    {
      title: t("home.social.linkedin"),
      icon: <IconBrandLinkedin />,
      href: "https://www.linkedin.com/in/franciscocortespirson/",
    },
    {
      title: t("home.social.email"),
      icon: <IconMail />,
      copyText: "franciscortesp@gmail.com",
    },
    {
      title: t("home.social.whatsapp"),
      icon: <IconBrandWhatsapp />,
      href: "https://wa.me/34633586624",
    },
    {
      title: t("home.social.cv"),
      icon: <IconFileCv />,
      href: "/assets/CV/CV-FranciscoCortesPirson.pdf",
      download: true,
    },
  ];

  return (
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen place-items-center pt-20 md:pt-0 px-4">
        {/* Imagen */}
        <div className="flex justify-center">
          <img
            src="/assets/me-avatar.png"
            alt="Me"
            className="w-45 md:w-64 h-auto rounded-lg select-none pointer-events-none drop-shadow-[0_0_25px_rgba(168,85,247,0.9)] dark:drop-shadow-[0_0_25px_rgba(168,85,247,0.3)]"
          />
        </div>

        {/* Texto y redes */}
        <div className="flex flex-col items-center text-center px-4">
          <section className="mb-6">
            <h1 className="text-2xl md:text-4xl font-bold mb-4 text-title">
              {t("home.title")}
            </h1>
            <h2 className="text-xl md:text-2xl font-bold mb-6">
              <span className="text-text-secondary font-extrabold">
                &lt;<span className="ml-1">&gt;</span>
              </span>{" "}
              <span className="text-subtitle">{t("home.subtitle")}</span>{" "}
              <span className="text-text-secondary font-extrabold">
                &lt;
                <span className="text-lg md:text-xl mr-1 pl-1">/</span>&gt;
              </span>
            </h2>
            <p className="text-sm text-text max-w-md mx-auto">
              {t("home.description")}
            </p>
          </section>

          {/* Iconos Redes Sociales */}
          <section className="flex gap-6 mt-4 pb-10 md:pb-0">
            {socialLinks.map((link) => (
              <SocialIcon
                key={link.title}
                {...link}
                copiedText={t("home.copied")}
              />
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Home;
