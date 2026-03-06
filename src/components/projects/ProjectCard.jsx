import React from "react";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";
import "./ProjectCard.css";
const ProjectCard = ({
  title,
  description,
  src,
  technologies,
  repository,
  deployed,
}) => {
  const [t] = useTranslation("global");

  return (
    <article className="project-card">
      <div className="project-card-header">
        <div className="project-card-dots">
          <div className="dot dot-red"></div>
          <div className="dot dot-yellow"></div>
          <div className="dot dot-green"></div>
        </div>
        <span className="project-card-title-text">{title}</span>
        <div className="w-8"></div>
      </div>

      <div className="project-card-content">
        <div className="project-image-container">
          <img
            src={src || "/assets/img/projects/placeholder.png"}
            alt={title}
            className="project-image"
          />
        </div>

        <p className="project-description">{description}</p>

        <div>
          <h4 className="project-tech-title">
            {t("projects.technologies-tittle")}
          </h4>
          <div className="project-technologies">
            {technologies.map((tech, index) => (
              <div key={index} className="tech-icon-wrapper">
                <img
                  src={tech.src}
                  alt={tech.name}
                  className="tech-icon"
                  title={tech.name}
                />
                <span className="tech-name">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="project-links">
          {repository && (
            <a
              href={repository}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              title={t("projects.show-repository")}
            >
              <IconBrandGithub />
              <span>{t("projects.code")}</span>
            </a>
          )}
          {deployed && (
            <a
              href={deployed}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
              title={t("projects.show-demo")}
            >
              <IconExternalLink />
              <span>{t("projects.show-demo")}</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
