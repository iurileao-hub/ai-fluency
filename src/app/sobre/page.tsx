import { Metadata } from "next";
import Link from "next/link";
import { MarkdownContent } from "@/components/ui/MarkdownContent";
import { sobreContent } from "@/content/sobre";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Sobre o curso AI Fluency, o instrutor Dr. Iúri Almeida e a inspiração no Guia do Mochileiro das Galáxias.",
};

export default function SobrePage() {
  return (
    <div className="animate-fade-in py-12">
      <div className="container-guide">
        {/* Conteúdo completo do markdown */}
        <div className="max-w-3xl mx-auto">
          <MarkdownContent content={sobreContent} />
        </div>

        {/* CTA */}
        <div className="max-w-3xl mx-auto mt-12 text-center">
          <Link
            href="/modulos/1"
            className="inline-flex items-center justify-center gap-2 bg-guide-yellow !text-[#060A13] font-bold px-8 py-4 rounded-lg hover:bg-guide-yellow/90 transition-colors shadow-lg"
          >
            Começar o Curso
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
        </div>
      </div>
    </div>
  );
}
