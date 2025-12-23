import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Recursos",
  description:
    "Vídeos, ferramentas e leituras recomendadas para continuar aprendendo sobre IA.",
};

const videos = [
  {
    titulo: "A História da Inteligência Artificial",
    descricao:
      "Dos primeiros conceitos nos anos 1950 até os LLMs modernos — uma jornada fascinante.",
    duracao: "13 min",
    url: "https://youtu.be/SkX6MKU9gAQ",
    uso: "Módulo 1",
  },
  {
    titulo: "O Futuro da IA",
    descricao:
      "Para onde estamos indo? Uma visão equilibrada sobre as possibilidades e desafios.",
    duracao: "10 min",
    url: "https://youtu.be/gN9QAFG2A2w",
    uso: "Módulo 4",
  },
];

const ferramentas = [
  {
    nome: "ChatGPT",
    descricao: "O chatbot mais popular, desenvolvido pela OpenAI. Ótimo para começar.",
    url: "https://chat.openai.com",
    gratuito: true,
  },
  {
    nome: "Claude",
    descricao:
      "Assistente da Anthropic, conhecido por respostas mais nuançadas e seguras.",
    url: "https://claude.ai",
    gratuito: true,
  },
  {
    nome: "Gemini",
    descricao:
      "Assistente do Google com integração nativa aos serviços Google.",
    url: "https://gemini.google.com",
    gratuito: true,
  },
  {
    nome: "Perplexity",
    descricao:
      "Motor de busca conversacional que cita fontes automaticamente.",
    url: "https://perplexity.ai",
    gratuito: true,
  },
];

const leituras = [
  {
    titulo: "Prompt Engineering Guide",
    descricao:
      "Guia completo e gratuito sobre técnicas de prompting, do básico ao avançado.",
    url: "https://www.promptingguide.ai/",
  },
  {
    titulo: "Anthropic's Prompt Engineering Guide",
    descricao:
      "Documentação oficial da Anthropic sobre como escrever prompts eficazes para Claude.",
    url: "https://docs.anthropic.com/claude/docs/prompt-engineering",
  },
  {
    titulo: "Learn Prompting",
    descricao: "Curso interativo e gratuito sobre prompting, com exercícios práticos.",
    url: "https://learnprompting.org/",
  },
];

export default function RecursosPage() {
  return (
    <div className="animate-fade-in py-12">
      <div className="container-guide">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-star-white mb-4">
            Recursos Adicionais
          </h1>
          <p className="text-star-white/70 text-lg leading-relaxed">
            Vídeos, ferramentas e leituras para continuar sua jornada de
            fluência em IA.
          </p>
        </div>

        {/* Vídeos */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-star-white mb-6 flex items-center gap-2">
            <span>🎬</span> Vídeos do Curso
          </h2>
          <div className="grid gap-4">
            {videos.map((video, index) => (
              <a
                key={index}
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-nebula-blue/20 border border-nebula-blue/30 rounded-xl p-6 hover:bg-nebula-blue/30 transition-colors group"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-guide-yellow font-bold mb-2 group-hover:text-glow transition-all">
                      {video.titulo}
                    </h3>
                    <p className="text-star-white/70 text-sm mb-3">
                      {video.descricao}
                    </p>
                    <div className="flex items-center gap-4 text-star-white/50 text-xs">
                      <span>⏱️ {video.duracao}</span>
                      <span>📖 {video.uso}</span>
                    </div>
                  </div>
                  <svg
                    className="w-5 h-5 text-star-white/30 group-hover:text-guide-yellow transition-colors flex-shrink-0 mt-1"
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
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Ferramentas */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-star-white mb-6 flex items-center gap-2">
            <span>🛠️</span> Ferramentas de IA
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {ferramentas.map((ferramenta, index) => (
              <a
                key={index}
                href={ferramenta.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-nebula-blue/20 border border-nebula-blue/30 rounded-xl p-6 hover:bg-nebula-blue/30 transition-colors group"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-guide-yellow font-bold group-hover:text-glow transition-all">
                    {ferramenta.nome}
                  </h3>
                  {ferramenta.gratuito && (
                    <span className="bg-towel-green/20 text-towel-green text-xs px-2 py-1 rounded">
                      Gratuito
                    </span>
                  )}
                </div>
                <p className="text-star-white/70 text-sm">
                  {ferramenta.descricao}
                </p>
              </a>
            ))}
          </div>
        </section>

        {/* Leituras */}
        <section className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-star-white mb-6 flex items-center gap-2">
            <span>📚</span> Leituras Recomendadas
          </h2>
          <div className="space-y-4">
            {leituras.map((leitura, index) => (
              <a
                key={index}
                href={leitura.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-nebula-blue/20 border border-nebula-blue/30 rounded-xl p-6 hover:bg-nebula-blue/30 transition-colors group"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-guide-yellow font-bold mb-2 group-hover:text-glow transition-all">
                      {leitura.titulo}
                    </h3>
                    <p className="text-star-white/70 text-sm">
                      {leitura.descricao}
                    </p>
                  </div>
                  <svg
                    className="w-5 h-5 text-star-white/30 group-hover:text-guide-yellow transition-colors flex-shrink-0 mt-1"
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
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Plano Pessoal */}
        <section className="max-w-3xl mx-auto">
          <div className="bg-guide-yellow/10 border border-guide-yellow/30 rounded-xl p-8 text-center">
            <h2 className="text-xl font-bold text-guide-yellow mb-4">
              📋 Template: Plano Pessoal de Fluência
            </h2>
            <p className="text-star-white/70 mb-6">
              Baixe o template usado no Módulo 4 para criar seu plano pessoal de
              desenvolvimento em IA.
            </p>
            <Link
              href="/modulos/4"
              className="inline-flex items-center justify-center gap-2 bg-guide-yellow !text-[#060A13] font-bold px-6 py-3 rounded-lg hover:bg-guide-yellow/90 transition-colors shadow-lg"
            >
              Ver no Módulo 4
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
