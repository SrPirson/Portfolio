"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    /* CONTENEDOR PADRE */
    <div
      className="w-full font-sans md:px-10"
      ref={containerRef}
    >
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
      {/* CONTENEDOR DE CADA ITEM */}
      {data.map((item, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row justify-start pt-10 md:pt-20 md:gap-10"
        >
          {/* BLOQUE DEL TÍTULO Y CÍRCULO */}
          <div className="relative md:sticky flex flex-row z-40 items-center top-0 md:top-40 self-start w-full md:max-w-xs lg:max-w-sm">
            {/* CÍRCULO */}
            <div className="h-7 absolute left-3 md:left-3 w-7 rounded-full bg-neutral-300 dark:bg-neutral-900 flex items-center justify-center">
              <div className="h-3 w-3 rounded-full bg-neutral-100 dark:bg-neutral-600 border border-neutral-300 dark:border-neutral-900" />
            </div>
            
            {/* TÍTULO */}
            <h3 className="block text-2xl pl-16 md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500">
              {item.title}
            </h3>
          </div>

          {/* BLOQUE DEL CONTENIDO */}
          <div className="relative w-full mt-4 md:mt-0 px-4 md:px-0">
            <div className="pl-12 md:pl-4">
              {item.content}
            </div>
          </div>
        </div>
      ))}

        {/* LA LÍNEA VERTICAL (EL RAIL) */}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          {/* LA LÍNEA DE PROGRESO (LA QUE SE MUEVE) */}
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};