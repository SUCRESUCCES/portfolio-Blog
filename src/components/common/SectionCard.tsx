import React from "react";

interface SectionCardProps {
  children: React.ReactNode;
  title: string;
  titleHighlight?: string;
  className?: string;
}

const SectionCard = ({
  children,
  title,
  titleHighlight,
  className = "",
}: SectionCardProps) => {
  return (
    <section
      className={`bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-3xl shadow-xl dark:shadow-2xl p-8 sm:p-12 w-full max-w-4xl transition-all duration-300 ${className}`}
    >
      <h2 className="text-3xl font-bold mb-10 text-gray-900 dark:text-white border-b border-gray-100 dark:border-white/10 pb-6 tracking-tight">
        {title}{" "}
        {titleHighlight && (
          <span className="text-blue-600 dark:text-blue-400">
            {titleHighlight}
          </span>
        )}
      </h2>
      {children}
    </section>
  );
};

export default SectionCard;
