import { Metadata } from "next";
import { MarkdownContent } from "@/components/ui/MarkdownContent";
import { comoFuncionamLLMsContent } from "@/content/comoFuncionamLLMs";

export const metadata: Metadata = {
  title: "Como Funcionam os LLMs",
  description:
    "Entenda como os Modelos de Linguagem de Grande Escala são treinados e geram respostas.",
};

export default function ComoFuncionamLLMsPage() {
  return (
    <div className="animate-fade-in py-12">
      <div className="container-guide">
        {/* Conteúdo completo do markdown */}
        <div className="max-w-3xl mx-auto">
          <MarkdownContent content={comoFuncionamLLMsContent} />
        </div>
      </div>
    </div>
  );
}
