import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MarkdownContent } from "@/components/ui/MarkdownContent";
import { modulos, getModuloById, getModuloNavigation } from "@/content/modulos";
import { modulo1Content } from "@/content/modulo1Content";
import { modulo2Content } from "@/content/modulo2Content";
import { modulo3Content } from "@/content/modulo3Content";
import { modulo4Content } from "@/content/modulo4Content";

interface PageProps {
  params: Promise<{ id: string }>;
}

// Map module IDs to their content
const moduleContents: Record<string, string> = {
  "1": modulo1Content,
  "2": modulo2Content,
  "3": modulo3Content,
  "4": modulo4Content,
};

export async function generateStaticParams() {
  return modulos.map((modulo) => ({
    id: modulo.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const modulo = getModuloById(id);

  if (!modulo) {
    return { title: "Módulo não encontrado" };
  }

  return {
    title: `Módulo ${modulo.id}: ${modulo.titulo}`,
    description: modulo.descricao,
  };
}

export default async function ModuloPage({ params }: PageProps) {
  const { id } = await params;
  const modulo = getModuloById(id);

  if (!modulo) {
    notFound();
  }

  const { prev, next } = getModuloNavigation(id);
  const content = moduleContents[id] || "";

  return (
    <div className="animate-fade-in py-12">
      <div className="container-guide">
        {/* Header do módulo */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-6xl font-bold text-guide-yellow/30">
              0{modulo.id}
            </span>
            <div className="relative w-16 h-16">
              <Image
                src={modulo.image}
                alt={modulo.titulo}
                fill
                sizes="64px"
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Slides */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-nebula-blue/30 border border-nebula-blue/50 rounded-xl p-6">
            <h2 className="text-xl font-bold text-star-white mb-4 flex items-center gap-3">
              <div className="relative w-10 h-10">
                <Image
                  src="/images/icons/slides.png"
                  alt=""
                  fill
                  sizes="40px"
                  className="object-contain"
                />
              </div>
              Slides
            </h2>
            {modulo.slidesUrl ? (
              <a
                href={modulo.slidesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-guide-yellow !text-[#060A13] font-bold px-6 py-3 rounded-lg hover:bg-guide-yellow/90 transition-colors shadow-lg"
              >
                Abrir Slides (PDF)
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            ) : (
              <p className="text-star-white/50 italic">
                Slides em preparação — disponíveis em breve.
              </p>
            )}
          </div>
        </div>

        {/* Conteúdo completo do markdown */}
        <div className="max-w-4xl mx-auto">
          <MarkdownContent content={content} />
        </div>

        {/* Navegação entre módulos */}
        <div className="max-w-4xl mx-auto mt-12 pt-8 border-t border-nebula-blue/30">
          <div className="flex justify-between items-center">
            {prev ? (
              <Link
                href={`/modulos/${prev.slug}`}
                className="flex items-center gap-2 text-star-white/70 hover:text-guide-yellow transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                <span>
                  <span className="text-xs block text-star-white/50">
                    Anterior
                  </span>
                  <span className="font-medium">{prev.titulo}</span>
                </span>
              </Link>
            ) : (
              <div />
            )}

            {next ? (
              <Link
                href={`/modulos/${next.slug}`}
                className="flex items-center gap-2 text-star-white/70 hover:text-guide-yellow transition-colors text-right"
              >
                <span>
                  <span className="text-xs block text-star-white/50">
                    Próximo
                  </span>
                  <span className="font-medium">{next.titulo}</span>
                </span>
                <svg
                  className="w-5 h-5"
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
              </Link>
            ) : (
              <Link
                href="/modulos"
                className="flex items-center gap-2 text-guide-yellow hover:text-guide-yellow/80 transition-colors"
              >
                <span>Ver todos os módulos</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 10h16M4 14h16M4 18h16"
                  />
                </svg>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
