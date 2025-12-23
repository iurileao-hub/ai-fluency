import { Metadata } from "next";
import { ModuleCard } from "@/components/ui/ModuleCard";
import { modulos } from "@/content/modulos";

export const metadata: Metadata = {
  title: "Módulos do Curso",
  description:
    "4 módulos de fluência em IA: Delegation, Description, Discernment e Diligence.",
};

export default function ModulosPage() {
  return (
    <div className="animate-fade-in py-12">
      <div className="container-guide">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-star-white mb-4">
            Módulos do Curso
          </h1>
          <p className="text-star-white/70 text-lg leading-relaxed">
            O curso é dividido em 4 módulos de 40 minutos cada. Cada módulo
            desenvolve uma das competências do Framework 4D, com teoria,
            exemplos práticos e exercícios.
          </p>
        </div>

        {/* Grid de módulos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {modulos.map((modulo) => (
            <ModuleCard
              key={modulo.id}
              number={modulo.id}
              title={modulo.titulo}
              subtitle={modulo.subtitulo}
              description={modulo.descricao}
              icon={modulo.icon}
              href={`/modulos/${modulo.slug}`}
            />
          ))}
        </div>

        {/* Informações adicionais */}
        <div className="max-w-3xl mx-auto mt-12 text-center">
          <div className="bg-nebula-blue/20 border border-nebula-blue/30 rounded-xl p-6">
            <h3 className="text-guide-yellow font-bold mb-2">
              Estrutura de cada módulo
            </h3>
            <ul className="text-star-white/70 text-sm space-y-2">
              <li>📖 Slides com conceitos e exemplos</li>
              <li>📝 Texto de referência para consulta</li>
              <li>🎯 Exercício prático para aplicar o aprendizado</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
