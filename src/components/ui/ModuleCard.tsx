import Link from "next/link";
import Image from "next/image";

interface ModuleCardProps {
  number: number;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  image: string;
  href: string;
}

export function ModuleCard({
  number,
  title,
  subtitle,
  description,
  image,
  href,
}: ModuleCardProps) {
  return (
    <Link href={href} className="group block">
      <article className="h-full bg-nebula-blue/30 border border-nebula-blue/50 rounded-xl p-6 transition-all duration-300 hover:bg-nebula-blue/50 hover:border-guide-yellow/30 hover:glow-border">
        {/* Número e ícone */}
        <div className="flex items-start justify-between mb-4">
          <span className="text-5xl font-bold text-guide-yellow/30 group-hover:text-guide-yellow/50 transition-colors">
            0{number}
          </span>
          <div className="relative w-14 h-14">
            <Image
              src={image}
              alt={title}
              fill
              sizes="56px"
              className="object-contain"
            />
          </div>
        </div>

        {/* Título */}
        <h3 className="text-guide-yellow font-bold text-lg mb-1 group-hover:text-glow transition-all">
          {title}
        </h3>

        {/* Subtítulo */}
        <p className="text-star-white/80 text-sm mb-3">{subtitle}</p>

        {/* Descrição */}
        <p className="text-star-white/60 text-sm leading-relaxed">
          {description}
        </p>

        {/* Link indicator */}
        <div className="mt-4 flex items-center gap-2 text-guide-yellow/70 group-hover:text-guide-yellow transition-colors">
          <span className="text-sm">Acessar</span>
          <svg
            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </article>
    </Link>
  );
}
