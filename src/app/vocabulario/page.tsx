import { Metadata } from "next";
import { MarkdownContent } from "@/components/ui/MarkdownContent";
import { vocabularioContent } from "@/content/vocabularioContent";

export const metadata: Metadata = {
  title: "Vocabulário Essencial de IA",
  description:
    "Glossário com os termos mais importantes de Inteligência Artificial explicados de forma acessível.",
};

export default function VocabularioPage() {
  return (
    <div className="animate-fade-in py-12">
      <div className="container-guide">
        {/* Conteúdo completo do markdown */}
        <div className="max-w-3xl mx-auto">
          <MarkdownContent content={vocabularioContent} />
        </div>
      </div>
    </div>
  );
}
