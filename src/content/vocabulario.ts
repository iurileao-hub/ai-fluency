export interface TermoVocabulario {
  termo: string;
  definicao: string;
  exemplo?: string;
}

export const vocabulario: TermoVocabulario[] = [
  {
    termo: "AGI (Artificial General Intelligence)",
    definicao:
      "Inteligência Artificial Geral — um sistema hipotético capaz de realizar qualquer tarefa intelectual que um ser humano pode fazer. Ainda não existe.",
    exemplo:
      "ChatGPT e Claude são exemplos de IA Narrow, não AGI. Eles são muito bons em linguagem, mas não podem dirigir um carro ou fazer uma cirurgia.",
  },
  {
    termo: "Alucinação (Hallucination)",
    definicao:
      "Quando um modelo de IA gera informações falsas ou inventadas, mas as apresenta com confiança como se fossem verdadeiras.",
    exemplo:
      "Um LLM pode inventar uma citação acadêmica que não existe, completa com autor, título e ano de publicação.",
  },
  {
    termo: "Contexto (Context Window)",
    definicao:
      "A quantidade de texto que um LLM pode processar de uma vez. Quanto maior a janela de contexto, mais informação o modelo pode considerar ao gerar uma resposta.",
    exemplo:
      "GPT-4 pode processar até 128.000 tokens (~96.000 palavras), permitindo analisar documentos longos de uma vez.",
  },
  {
    termo: "Deep Learning",
    definicao:
      "Subcampo do Machine Learning que usa redes neurais com muitas camadas (daí 'deep') para aprender padrões complexos em dados.",
    exemplo:
      "Reconhecimento de imagens, tradução de idiomas e geração de texto são tarefas comuns de deep learning.",
  },
  {
    termo: "Few-shot Learning",
    definicao:
      "Técnica de prompting onde você fornece alguns exemplos do que deseja antes de fazer sua solicitação, ajudando o modelo a entender o padrão.",
    exemplo:
      "Dar 3 exemplos de como você quer que e-mails sejam resumidos antes de pedir para resumir um novo e-mail.",
  },
  {
    termo: "Fine-tuning",
    definicao:
      "Processo de treinar um modelo pré-existente com dados específicos para melhorar seu desempenho em uma tarefa ou domínio particular.",
    exemplo:
      "Uma empresa pode fazer fine-tuning de um LLM com seus documentos internos para que ele responda melhor perguntas sobre seus produtos.",
  },
  {
    termo: "GPT (Generative Pre-trained Transformer)",
    definicao:
      "Arquitetura de modelo de linguagem desenvolvida pela OpenAI. 'Generative' significa que gera texto, 'Pre-trained' que foi treinado previamente em grandes volumes de dados.",
    exemplo: "ChatGPT usa modelos da família GPT (GPT-3.5, GPT-4).",
  },
  {
    termo: "Grounding",
    definicao:
      "Técnica para conectar as respostas de um LLM a fontes de dados específicas e verificáveis, reduzindo alucinações.",
    exemplo:
      "RAG (Retrieval-Augmented Generation) é uma forma de grounding que busca informações em documentos antes de gerar a resposta.",
  },
  {
    termo: "LLM (Large Language Model)",
    definicao:
      "Modelo de linguagem grande — um tipo de IA treinada em enormes quantidades de texto para entender e gerar linguagem humana.",
    exemplo:
      "GPT-4, Claude, Gemini e LLaMA são exemplos de LLMs. Eles formam a base de chatbots como ChatGPT e Claude.",
  },
  {
    termo: "Machine Learning (ML)",
    definicao:
      "Campo da IA onde sistemas aprendem padrões a partir de dados, em vez de serem explicitamente programados para cada tarefa.",
    exemplo:
      "Um filtro de spam que aprende a identificar e-mails indesejados analisando milhares de exemplos classificados.",
  },
  {
    termo: "Modelo de Fundação (Foundation Model)",
    definicao:
      "Modelo de IA treinado em dados amplos que pode ser adaptado para muitas tarefas diferentes. LLMs são um tipo de modelo de fundação.",
    exemplo:
      "GPT-4 é um modelo de fundação que pode ser usado para chat, análise de texto, código, e muito mais.",
  },
  {
    termo: "Narrow AI (IA Estreita)",
    definicao:
      "IA projetada para realizar uma tarefa específica ou um conjunto limitado de tarefas. É o único tipo de IA que existe atualmente.",
    exemplo:
      "Um sistema de recomendação da Netflix ou o corretor ortográfico do seu celular são exemplos de Narrow AI.",
  },
  {
    termo: "Prompt",
    definicao:
      "A instrução ou pergunta que você fornece a um sistema de IA para obter uma resposta. A qualidade do prompt afeta diretamente a qualidade da resposta.",
    exemplo:
      "'Escreva um e-mail profissional recusando uma reunião' é um prompt para um LLM.",
  },
  {
    termo: "Prompt Engineering",
    definicao:
      "A arte e ciência de escrever prompts eficazes para obter os melhores resultados de sistemas de IA.",
    exemplo:
      "Adicionar 'pense passo a passo' a um prompt pode melhorar significativamente respostas para problemas de raciocínio.",
  },
  {
    termo: "RAG (Retrieval-Augmented Generation)",
    definicao:
      "Técnica que combina busca de informações em documentos com geração de texto por LLM, permitindo respostas baseadas em dados específicos e atualizados.",
    exemplo:
      "Um chatbot de suporte que busca na documentação da empresa antes de responder perguntas dos clientes.",
  },
  {
    termo: "System Prompt",
    definicao:
      "Instruções iniciais dadas a um LLM que definem seu comportamento, personalidade ou restrições durante toda a conversa.",
    exemplo:
      "'Você é um assistente médico que sempre recomenda consultar um profissional de saúde' é um system prompt.",
  },
  {
    termo: "Temperatura",
    definicao:
      "Parâmetro que controla a aleatoriedade das respostas de um LLM. Temperatura baixa = respostas mais previsíveis; alta = mais criativas e variadas.",
    exemplo:
      "Para código, use temperatura baixa (0.1-0.3). Para brainstorming criativo, use temperatura alta (0.7-1.0).",
  },
  {
    termo: "Token",
    definicao:
      "A unidade básica de texto que um LLM processa. Pode ser uma palavra, parte de uma palavra, ou um caractere. Em média, 1 token ≈ 0.75 palavras em inglês.",
    exemplo:
      "'Inteligência Artificial' pode ser dividido em 3-4 tokens dependendo do modelo.",
  },
  {
    termo: "Transformer",
    definicao:
      "Arquitetura de rede neural que revolucionou o processamento de linguagem natural. Usa 'atenção' para processar todas as palavras de uma vez, não sequencialmente.",
    exemplo:
      "O 'T' em GPT vem de Transformer. Esta arquitetura é a base da maioria dos LLMs modernos.",
  },
  {
    termo: "Zero-shot",
    definicao:
      "Pedir a um modelo para realizar uma tarefa sem fornecer exemplos. O modelo usa apenas seu treinamento prévio para entender o que você quer.",
    exemplo:
      "Pedir 'Classifique este texto como positivo ou negativo' sem dar exemplos de classificação.",
  },
];

export function getVocabularioOrdenado(): TermoVocabulario[] {
  return [...vocabulario].sort((a, b) => a.termo.localeCompare(b.termo, "pt-BR"));
}
