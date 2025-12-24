import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { GuideQuote } from "@/components/ui/GuideQuote";

export const metadata: Metadata = {
  title: "O Framework 4D",
  description:
    "Conheça as 4 competências essenciais para fluência em IA: Delegation, Description, Discernment e Diligence.",
};

const framework = [
  {
    id: 1,
    letter: "D",
    name: "elegation",
    fullName: "Delegation",
    question: "O que delegar à IA?",
    image: "/images/modules/delegation.png",
    description:
      "A primeira competência é saber decidir estrategicamente o que humanos devem fazer versus o que a IA pode fazer. Não é sobre delegar tudo, mas sobre delegar com sabedoria.",
    subskills: [
      {
        name: "Problem Awareness",
        desc: "Clareza sobre qual problema você está tentando resolver",
      },
      {
        name: "Platform Awareness",
        desc: "Conhecer as capacidades e limitações das ferramentas de IA",
      },
      {
        name: "Task Delegation",
        desc: "Divisão estratégica do trabalho entre você e a IA",
      },
    ],
  },
  {
    id: 2,
    letter: "D",
    name: "escription",
    fullName: "Description",
    question: "Como comunicar com a IA?",
    image: "/images/modules/description.png",
    description:
      "A segunda competência é saber se comunicar de forma clara e eficaz com sistemas de IA. Um bom prompt é a diferença entre uma resposta útil e uma inútil.",
    subskills: [
      {
        name: "Product Description",
        desc: "Definir claramente o output desejado",
      },
      {
        name: "Process Description",
        desc: "Guiar a abordagem que a IA deve seguir",
      },
      {
        name: "Performance Description",
        desc: "Especificar o comportamento esperado",
      },
    ],
  },
  {
    id: 3,
    letter: "D",
    name: "iscernment",
    fullName: "Discernment",
    question: "Como avaliar outputs da IA?",
    image: "/images/modules/discernment.png",
    description:
      "A terceira competência é desenvolver senso crítico para avaliar o que a IA produz. Nem tudo que parece correto está correto — e alucinações são comuns.",
    subskills: [
      {
        name: "Product Discernment",
        desc: "Avaliar acurácia, coerência e relevância do output",
      },
      {
        name: "Process Discernment",
        desc: "Avaliar a lógica e o raciocínio por trás da resposta",
      },
      {
        name: "Performance Discernment",
        desc: "Avaliar o comportamento durante a colaboração",
      },
    ],
  },
  {
    id: 4,
    letter: "D",
    name: "iligence",
    fullName: "Diligence",
    question: "Como usar com responsabilidade?",
    image: "/images/modules/diligence.png",
    description:
      "A quarta competência é usar IA de forma ética e responsável. Você é sempre responsável pelo resultado final — a IA é uma ferramenta, não uma desculpa.",
    subskills: [
      {
        name: "Creation Diligence",
        desc: "Escolha consciente de sistemas e proteção de dados",
      },
      {
        name: "Transparency Diligence",
        desc: "Divulgação honesta do uso de IA quando apropriado",
      },
      {
        name: "Deployment Diligence",
        desc: "Verificação final e responsabilidade pelo resultado",
      },
    ],
  },
];

export default function FrameworkPage() {
  return (
    <div className="animate-fade-in py-12">
      <div className="container-guide">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-star-white mb-4">
            O Framework 4D
          </h1>
          <p className="text-star-white/70 text-lg leading-relaxed">
            Quatro competências essenciais para trabalhar com Inteligência
            Artificial de forma fluente — da decisão estratégica à
            responsabilidade ética.
          </p>
        </div>

        {/* Citação */}
        <div className="max-w-3xl mx-auto mb-16">
          <GuideQuote source="Adaptado do AI Fluency Framework">
            Fluência em IA não é sobre saber tudo sobre tecnologia. É sobre
            desenvolver as competências certas para trabalhar{" "}
            <em>com</em> a tecnologia de forma eficaz e responsável.
          </GuideQuote>
        </div>

        {/* Os 4 D's */}
        <div className="max-w-4xl mx-auto space-y-12">
          {framework.map((d) => (
            <div
              key={d.id}
              className="bg-nebula-blue/20 border border-nebula-blue/30 rounded-2xl p-8"
            >
              {/* Header do D */}
              <div className="flex items-start gap-6 mb-6">
                <div className="relative w-16 h-16 flex-shrink-0">
                  <Image
                    src={d.image}
                    alt={d.fullName}
                    fill
                    sizes="64px"
                    className="object-contain"
                  />
                </div>
                <div>
                  <h2 className="text-guide-yellow font-bold text-2xl mb-1">
                    <span className="text-3xl">{d.letter}</span>
                    {d.name}
                  </h2>
                  <p className="text-star-white/60 text-lg">{d.question}</p>
                </div>
              </div>

              {/* Descrição */}
              <p className="text-star-white/80 leading-relaxed mb-6">
                {d.description}
              </p>

              {/* Subhabilidades */}
              <div className="grid gap-3">
                {d.subskills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-space-blue/50 rounded-lg p-4 flex items-start gap-3"
                  >
                    <span className="text-guide-yellow/60 text-sm mt-0.5">
                      ●
                    </span>
                    <div>
                      <span className="text-star-white font-medium">
                        {skill.name}:
                      </span>{" "}
                      <span className="text-star-white/70">{skill.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Link para módulo */}
              <div className="mt-6 pt-4 border-t border-nebula-blue/30">
                <Link
                  href={`/modulos/${d.id}`}
                  className="text-guide-yellow hover:text-guide-yellow/80 transition-colors inline-flex items-center gap-2 text-sm"
                >
                  <span>Ver Módulo {d.id}</span>
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
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="max-w-3xl mx-auto mt-16 text-center">
          <p className="text-star-white/60 mb-6">
            Pronto para desenvolver essas competências?
          </p>
          <Link
            href="/modulos/1"
            className="inline-flex items-center justify-center gap-2 bg-guide-yellow !text-[#060A13] font-bold px-8 py-4 rounded-lg hover:bg-guide-yellow/90 transition-colors shadow-lg"
          >
            Começar pelo Módulo 1
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
