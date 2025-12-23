import Link from "next/link";
import { ModuleCard } from "@/components/ui/ModuleCard";
import { AlertBox } from "@/components/ui/AlertBox";
import { modulos } from "@/content/modulos";

export default function Home() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container-guide text-center">
          {/* Don't Panic Badge */}
          <div className="inline-flex items-center gap-2 bg-guide-yellow/10 border border-guide-yellow/30 rounded-full px-4 py-2 mb-8">
            <span className="text-guide-yellow font-bold text-sm tracking-wider">
              DON&apos;T PANIC
            </span>
          </div>

          {/* Título principal */}
          <h1 className="text-4xl md:text-6xl font-bold text-star-white mb-6">
            Curso de Fluência em{" "}
            <span className="text-guide-yellow text-glow">
              Inteligência Artificial
            </span>
          </h1>

          {/* Subtítulo */}
          <p className="text-xl md:text-2xl text-star-white/70 max-w-3xl mx-auto mb-8 leading-relaxed">
            Aprenda a trabalhar com IA de forma estratégica, eficaz e
            responsável usando o{" "}
            <span className="text-guide-yellow">Framework 4D</span>.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
            <Link
              href="/framework"
              className="inline-flex items-center justify-center gap-2 border border-star-white/30 text-star-white font-medium px-8 py-4 rounded-lg hover:bg-star-white/5 transition-colors"
            >
              Conhecer o Framework
            </Link>
          </div>
        </div>
      </section>

      {/* O que é o 4D Framework */}
      <section className="py-16 bg-nebula-blue/20">
        <div className="container-guide">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-star-white mb-4">
              O Framework 4D
            </h2>
            <p className="text-star-white/70 leading-relaxed">
              Quatro competências essenciais para trabalhar com Inteligência
              Artificial de forma fluente — da decisão estratégica à
              responsabilidade ética.
            </p>
          </div>

          {/* 4 D's em linha */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              {
                letter: "D",
                word: "elegation",
                desc: "O que delegar?",
                icon: "🖥️",
              },
              {
                letter: "D",
                word: "escription",
                desc: "Como pedir?",
                icon: "🐟",
              },
              {
                letter: "D",
                word: "iscernment",
                desc: "Como avaliar?",
                icon: "👁️",
              },
              {
                letter: "D",
                word: "iligence",
                desc: "Como usar bem?",
                icon: "🧭",
              },
            ].map((d, i) => (
              <div
                key={i}
                className="text-center p-6 rounded-xl bg-space-blue/50 border border-nebula-blue/50"
              >
                <span className="text-4xl mb-3 block">{d.icon}</span>
                <p className="text-guide-yellow font-bold text-lg">
                  <span className="text-2xl">{d.letter}</span>
                  {d.word}
                </p>
                <p className="text-star-white/60 text-sm mt-1">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Módulos */}
      <section className="py-16">
        <div className="container-guide">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-star-white mb-4">
              Módulos do Curso
            </h2>
            <p className="text-star-white/70 leading-relaxed">
              4 aulas de 40 minutos cada, com teoria, exemplos práticos e
              exercícios. Cada módulo se conecta com o próximo em uma jornada
              progressiva.
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
        </div>
      </section>

      {/* Alerta Don't Panic */}
      <section className="py-16 bg-nebula-blue/20">
        <div className="container-guide max-w-3xl">
          <AlertBox variant="panic">
            <p>
              Você não precisa dominar tudo hoje. Este curso é um{" "}
              <strong>ponto de partida</strong>, não a linha de chegada. Assim
              como o Guia do Mochileiro das Galáxias, ele vai te dar as
              ferramentas essenciais para navegar um universo que pode parecer
              intimidador — mas que é, na verdade, cheio de possibilidades.
            </p>
          </AlertBox>

          <div className="text-center mt-8">
            <Link
              href="/vocabulario"
              className="text-guide-yellow hover:text-guide-yellow/80 transition-colors inline-flex items-center gap-2"
            >
              <span>🐟</span>
              <span>Ver Vocabulário Essencial de IA</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Sobre o instrutor */}
      <section className="py-16">
        <div className="container-guide">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-star-white mb-4">
              Sobre o Instrutor
            </h2>
            <p className="text-star-white/70 leading-relaxed mb-6">
              <strong className="text-star-white">Dr. Iúri Almeida</strong> é
              médico pediatra especialista em infectologia pediátrica, oficial médico 
              trabalhando em gestão de saúde na PMDF e estudante de Ciência da Computação.
              Acredita que fluência em IA é uma competência essencial para profissionais
              de todas as áreas.
            </p>
            <Link
              href="/sobre"
              className="text-guide-yellow hover:text-guide-yellow/80 transition-colors"
            >
              Saber mais →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
