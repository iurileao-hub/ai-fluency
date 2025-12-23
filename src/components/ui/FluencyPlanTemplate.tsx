"use client";

export function FluencyPlanTemplate() {
  return (
    <div className="my-8 bg-gradient-to-br from-nebula-blue/30 to-space-blue border border-nebula-blue/50 rounded-2xl overflow-hidden shadow-xl">
      {/* Header */}
      <div className="bg-guide-yellow/10 border-b border-guide-yellow/30 px-6 py-4">
        <h3 className="text-guide-yellow font-bold text-lg flex items-center gap-2">
          <span>📋</span>
          Meu Plano de Fluência em IA
        </h3>
        <p className="text-star-white/60 text-sm mt-1">
          Template para construir seu plano pessoal de desenvolvimento
        </p>
      </div>

      {/* Seção 1: Avaliação Atual */}
      <div className="p-6 border-b border-nebula-blue/30">
        <div className="flex items-center gap-2 mb-4">
          <span className="bg-guide-yellow text-space-blue font-bold text-xs px-2 py-1 rounded">
            PARTE 1
          </span>
          <h4 className="text-star-white font-bold">Minha Avaliação Atual</h4>
        </div>

        <div className="space-y-4">
          <FormField label="Competência mais forte" />
          <FormField label="Competência para desenvolver" />
          <FormField label="Modo de interação que mais uso" />
          <FormField label="Modo que quero desenvolver" />
        </div>
      </div>

      {/* Seção 2: Meus Compromissos */}
      <div className="p-6 border-b border-nebula-blue/30">
        <div className="flex items-center gap-2 mb-4">
          <span className="bg-guide-yellow text-space-blue font-bold text-xs px-2 py-1 rounded">
            PARTE 2
          </span>
          <h4 className="text-star-white font-bold">Meus Compromissos</h4>
        </div>

        <div className="space-y-4">
          <div>
            <p className="text-star-white/70 text-sm mb-3">
              3 tarefas do meu trabalho que pretendo delegar à IA:
            </p>
            <div className="space-y-2">
              <NumberedField number={1} />
              <NumberedField number={2} />
              <NumberedField number={3} />
            </div>
          </div>

          <FormField label="1 habilidade de prompting que quero desenvolver" />
          <FormField label="1 prática de verificação que adotarei" />
        </div>
      </div>

      {/* Seção 3: Próximos Passos */}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="bg-guide-yellow text-space-blue font-bold text-xs px-2 py-1 rounded">
            PARTE 3
          </span>
          <h4 className="text-star-white font-bold">Próximos Passos</h4>
        </div>

        <div className="space-y-4">
          <FormField label="Esta semana, vou" icon="📅" />
          <FormField label="Este mês, vou" icon="🗓️" />
        </div>
      </div>

      {/* Footer */}
      <div className="bg-nebula-blue/20 px-6 py-3 border-t border-nebula-blue/30">
        <p className="text-star-white/50 text-xs text-center">
          Imprima ou copie este template para acompanhar seu progresso
        </p>
      </div>
    </div>
  );
}

function FormField({ label, icon }: { label: string; icon?: string }) {
  return (
    <div className="group">
      <label className="text-star-white/80 text-sm flex items-center gap-2 mb-2">
        {icon && <span>{icon}</span>}
        {label}:
      </label>
      <div className="bg-space-blue/50 border border-nebula-blue/40 rounded-lg px-4 py-3 group-hover:border-guide-yellow/30 transition-colors">
        <div className="h-5 border-b border-dashed border-star-white/20" />
      </div>
    </div>
  );
}

function NumberedField({ number }: { number: number }) {
  return (
    <div className="flex items-center gap-3 group">
      <span className="bg-nebula-blue/50 text-guide-yellow font-bold text-sm w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0">
        {number}
      </span>
      <div className="flex-1 bg-space-blue/50 border border-nebula-blue/40 rounded-lg px-4 py-2 group-hover:border-guide-yellow/30 transition-colors">
        <div className="h-5 border-b border-dashed border-star-white/20" />
      </div>
    </div>
  );
}
