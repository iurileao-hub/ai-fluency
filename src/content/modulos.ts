export interface Modulo {
  id: number;
  slug: string;
  titulo: string;
  subtitulo: string;
  descricao: string;
  icon: string;
  image: string;
  referenciaMochileiro: string;
  citacao: string;
  citacaoAutor?: string;
  slidesUrl: string | null;
  conceitos: {
    nome: string;
    descricao: string;
  }[];
  exercicio: {
    titulo: string;
    duracao: string;
    instrucoes: string;
    exemplos?: string[];
  };
}

export const modulos: Modulo[] = [
  {
    id: 1,
    slug: "1",
    titulo: "Delegation",
    subtitulo: "O que delegar à IA?",
    descricao:
      "Aprenda a decidir estrategicamente o que humanos devem fazer versus o que a IA pode fazer por você.",
    icon: "🖥️",
    image: "/images/modules/delegation.png",
    referenciaMochileiro: "Deep Thought",
    citacao:
      "A resposta é 42. Mas qual era a pergunta? Assim como Deep Thought, a IA só pode dar boas respostas se você souber o que perguntar.",
    citacaoAutor: "Adaptado de Douglas Adams",
    slidesUrl: "/slides/modulo-1.pdf",
    conceitos: [
      {
        nome: "Problem Awareness",
        descricao:
          "Clareza sobre qual problema você está tentando resolver. Antes de delegar, entenda profundamente o que precisa ser feito.",
      },
      {
        nome: "Platform Awareness",
        descricao:
          "Conhecer as capacidades e limitações das ferramentas de IA. Cada plataforma tem pontos fortes e fracos.",
      },
      {
        nome: "Task Delegation",
        descricao:
          "Divisão estratégica do trabalho entre você e a IA. Nem tudo deve ser delegado — e algumas coisas são melhor feitas pela IA.",
      },
    ],
    exercicio: {
      titulo: "Identificar tarefas delegáveis",
      duracao: "3 min",
      instrucoes:
        "Analise 5 tarefas do seu dia a dia e decida: delegar à IA ou manter com você? Justifique cada decisão.",
      exemplos: [
        "Responder e-mails rotineiros",
        "Criar um relatório mensal",
        "Tomar decisão sobre promoção de funcionário",
        "Resumir uma reunião longa",
        "Avaliar currículos para uma vaga",
      ],
    },
  },
  {
    id: 2,
    slug: "2",
    titulo: "Description",
    subtitulo: "Como comunicar com a IA?",
    descricao:
      "Domine a arte de escrever prompts claros e eficazes para obter os melhores resultados.",
    icon: "🐟",
    image: "/images/modules/description.png",
    referenciaMochileiro: "Babel Fish",
    citacao:
      "O Babel Fish traduz qualquer idioma instantaneamente. Mas comunicação não é só tradução — é clareza de intenção.",
    citacaoAutor: "Adaptado de Douglas Adams",
    slidesUrl: "/slides/modulo-2.pdf",
    conceitos: [
      {
        nome: "Product Description",
        descricao:
          "Definir claramente o output desejado. O que exatamente você quer receber? Formato, tamanho, estilo?",
      },
      {
        nome: "Process Description",
        descricao:
          "Guiar a abordagem que a IA deve seguir. Como ela deve pensar sobre o problema? Que etapas seguir?",
      },
      {
        nome: "Performance Description",
        descricao:
          "Especificar o comportamento esperado. Qual tom usar? Que restrições respeitar? Como se comportar?",
      },
    ],
    exercicio: {
      titulo: "Reescrever prompts ineficazes",
      duracao: "5 min",
      instrucoes:
        "Pegue estes prompts vagos e reescreva-os usando as técnicas de Description.",
      exemplos: [
        "Me ajuda a escrever um e-mail",
        "Explica isso",
        "Faz um resumo",
      ],
    },
  },
  {
    id: 3,
    slug: "3",
    titulo: "Discernment + Diligence",
    subtitulo: "Como avaliar e usar com responsabilidade?",
    descricao:
      "Desenvolva senso crítico para avaliar outputs da IA e consciência ética para uso responsável.",
    icon: "👁️",
    image: "/images/modules/discernment.png",
    referenciaMochileiro: "Mostly Harmless",
    citacao:
      "A Terra foi descrita como 'Mostly Harmless' no Guia — duas palavras que escondiam bilhões de histórias. Informações incompletas podem ser perigosas.",
    citacaoAutor: "Adaptado de Douglas Adams",
    slidesUrl: "/slides/modulo-3.pdf",
    conceitos: [
      {
        nome: "Product Discernment",
        descricao:
          "Avaliar a qualidade do output: acurácia, coerência, relevância. A resposta faz sentido? Está correta?",
      },
      {
        nome: "Process Discernment",
        descricao:
          "Avaliar o raciocínio por trás da resposta. A IA 'pensou' bem? A lógica está correta?",
      },
      {
        nome: "Transparency Diligence",
        descricao:
          "Divulgação honesta do uso de IA. Quando e como revelar que você usou IA?",
      },
      {
        nome: "Deployment Diligence",
        descricao:
          "Verificação final antes de usar. Você é responsável pelo resultado — sempre.",
      },
    ],
    exercicio: {
      titulo: "Identificar alucinações",
      duracao: "7 min",
      instrucoes:
        "Analise uma resposta de IA que contém 3 erros sutis. Identifique os problemas e explique como você verificaria cada afirmação.",
    },
  },
  {
    id: 4,
    slug: "4",
    titulo: "Síntese + Aplicação",
    subtitulo: "Como integrar tudo na prática?",
    descricao:
      "Consolide o aprendizado criando seu plano pessoal de fluência em IA e vislumbre o futuro.",
    icon: "🐬",
    image: "/images/modules/diligence.png",
    referenciaMochileiro: "So Long, and Thanks for All the Fish",
    citacao:
      "Os golfinhos sabiam algo que os humanos não sabiam. Fluência em IA é desenvolver essa 'percepção' para navegar o futuro da tecnologia.",
    citacaoAutor: "Adaptado de Douglas Adams",
    slidesUrl: "/slides/modulo-4.pdf",
    conceitos: [
      {
        nome: "Integração dos 4 D's",
        descricao:
          "Como Delegation, Description, Discernment e Diligence trabalham juntos em um fluxo de trabalho real.",
      },
      {
        nome: "Fluência como Processo",
        descricao:
          "Fluência não é um destino, é uma jornada. Você vai continuar aprendendo e se adaptando.",
      },
      {
        nome: "Plano Pessoal",
        descricao:
          "Criar compromissos concretos para aplicar o 4D Framework no seu dia a dia profissional.",
      },
    ],
    exercicio: {
      titulo: "Plano Pessoal de Fluência",
      duracao: "15 min",
      instrucoes:
        "Preencha o template do Plano Pessoal de Fluência em IA, definindo ações concretas para cada um dos 4 D's.",
    },
  },
];

export function getModuloById(id: string): Modulo | undefined {
  return modulos.find((m) => m.slug === id);
}

export function getModuloNavigation(currentId: string): {
  prev: Modulo | undefined;
  next: Modulo | undefined;
} {
  const currentIndex = modulos.findIndex((m) => m.slug === currentId);
  return {
    prev: currentIndex > 0 ? modulos[currentIndex - 1] : undefined,
    next: currentIndex < modulos.length - 1 ? modulos[currentIndex + 1] : undefined,
  };
}
