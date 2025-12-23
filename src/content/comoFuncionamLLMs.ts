export const comoFuncionamLLMsContent = `# Como Funcionam os Modelos de Linguagem: Do Texto ao Token, do Token à Resposta

## Introdução

Quando você digita uma pergunta no ChatGPT e recebe uma resposta elaborada em segundos, pode parecer mágica. Na verdade, por trás dessa interação existe um sistema sofisticado de processamento estatístico que, curiosamente, não "entende" linguagem da forma como humanos entendem — mas produz resultados frequentemente indistinguíveis de textos escritos por pessoas.

Este texto explica, de forma acessível, como os grandes modelos de linguagem (LLMs) são treinados e como geram suas respostas, revelando tanto suas capacidades impressionantes quanto suas limitações fundamentais.

---

## 1. A Unidade Fundamental: Tokens

Computadores não compreendem palavras — eles processam números. O primeiro passo para que um modelo de linguagem funcione é transformar texto em representações numéricas. Esse processo chama-se **tokenização**.

Um token não é necessariamente uma palavra inteira. Pode ser uma palavra comum ("casa"), parte de uma palavra ("ção" em "educação"), um caractere individual, ou até um símbolo de pontuação. A técnica mais utilizada, chamada *Byte Pair Encoding* (BPE), cria vocabulários que equilibram eficiência computacional e capacidade de representar qualquer texto — incluindo palavras raras ou de outros idiomas.

Por exemplo, a frase "Inteligência artificial" pode ser dividida em tokens como: ["Int", "elig", "ência", " artificial"]. Cada token recebe um número identificador único no vocabulário do modelo (que pode conter 50.000 a 100.000 tokens diferentes).

Essa fragmentação explica algumas limitações curiosas dos LLMs: dificuldade em soletrar palavras, problemas com aritmética simples e desempenho inferior em idiomas com menos representação nos dados de treinamento decorrem, em grande parte, de como o texto foi tokenizado.

---

## 2. A Arquitetura Transformer: Atenção É Tudo Que Você Precisa

Em 2017, pesquisadores do Google publicaram o artigo "Attention Is All You Need", introduzindo a arquitetura **Transformer** — a base de todos os LLMs modernos, do GPT ao Claude, do LLaMA ao Gemini.

A inovação central do Transformer é o **mecanismo de autoatenção** (*self-attention*). Diferentemente de arquiteturas anteriores que processavam texto sequencialmente (palavra por palavra), a autoatenção permite que o modelo analise todas as palavras de uma frase simultaneamente, identificando relações entre elas independentemente da distância.

Considere a frase: "O gato não atravessou a rua porque **ela** estava movimentada." Para entender que "ela" se refere a "rua" (e não a "gato"), o modelo precisa relacionar palavras distantes. O mecanismo de autoatenção faz exatamente isso: calcula "pontuações de atenção" que indicam quanta relevância cada palavra tem em relação às outras.

Matematicamente, cada token é transformado em três vetores: **Query** (consulta), **Key** (chave) e **Value** (valor). O modelo multiplica queries por keys para determinar quais palavras são relevantes entre si, e então usa esses pesos para combinar os values, gerando representações contextualizadas de cada token.

Os Transformers utilizam **múltiplas cabeças de atenção** (*multi-head attention*), executando esse cálculo várias vezes em paralelo com pesos diferentes. Isso permite capturar simultaneamente diferentes tipos de relações: sintáticas, semânticas, de referência, de proximidade temática.

---

## 3. O Treinamento: Três Fases Para Criar um Assistente

O treinamento de um LLM moderno acontece em três etapas distintas, cada uma com objetivos específicos.

### Fase 1: Pré-treinamento (Aprendizado Autossupervisionado)

Na primeira fase, o modelo é exposto a quantidades massivas de texto — livros, artigos, páginas da web, código — sem qualquer rotulação humana. A tarefa é aparentemente simples: **prever a próxima palavra** (ou token) em uma sequência.

Dado o início "O céu está muito...", o modelo deve prever que "azul" é mais provável que "banana". Esse processo, repetido bilhões de vezes com trilhões de tokens, faz o modelo internalizar padrões estatísticos da linguagem: gramática, fatos sobre o mundo, estilos de escrita, estruturas lógicas.

O GPT-3, por exemplo, foi treinado com 175 bilhões de parâmetros em aproximadamente 300 bilhões de tokens. Esse treinamento requer milhares de GPUs trabalhando por semanas ou meses, consumindo recursos computacionais imensos.

Ao final do pré-treinamento, o modelo é excelente em completar textos — mas ainda não sabe seguir instruções ou responder perguntas adequadamente.

### Fase 2: Ajuste Fino Supervisionado (Instruction Tuning)

Na segunda fase, o modelo é treinado em conjuntos menores de dados cuidadosamente curados: pares de instruções e respostas desejadas, criados ou validados por humanos.

Por exemplo:

- **Instrução**: "Resuma o texto a seguir em três frases."
- **Resposta modelo**: [resumo bem elaborado]

Esse processo ensina o modelo a reconhecer formatos de instrução e responder de maneira útil e estruturada, transformando um "completador de texto" em um assistente capaz de seguir comandos.

### Fase 3: RLHF — Aprendizado por Reforço com Feedback Humano

A terceira fase é o que diferencia modelos como ChatGPT de seus predecessores. O **RLHF** (*Reinforcement Learning from Human Feedback*) alinha o modelo com preferências humanas mais sutis.

O processo funciona assim:

1. O modelo gera múltiplas respostas para um mesmo prompt
2. Avaliadores humanos classificam essas respostas (qual é mais útil, precisa, segura)
3. Um **modelo de recompensa** é treinado para prever essas preferências humanas
4. O LLM é refinado para maximizar as "recompensas" — ou seja, gerar respostas que humanos prefeririam

O RLHF é responsável por tornar as respostas mais naturais, reduzir conteúdo tóxico e alinhar o comportamento do modelo com valores humanos. Foi essa técnica que transformou o GPT-3 no fenômeno ChatGPT.

---

## 4. Como o Modelo Gera Respostas

Quando você faz uma pergunta, o LLM não "busca" uma resposta em um banco de dados. Ele **gera texto token por token**, calculando probabilidades.

O processo é autorregressivo: dado o prompt inicial mais todos os tokens já gerados, o modelo calcula a probabilidade de cada token possível ser o próximo. Ele então seleciona um (geralmente com algum grau de aleatoriedade controlada pela "temperatura") e repete o processo até completar a resposta.

É crucial compreender: o modelo não "sabe" coisas no sentido humano. Ele aprendeu **correlações estatísticas** entre padrões de texto. Quando responde corretamente sobre a capital da França, não está acessando um fato armazenado — está gerando "Paris" porque, estatisticamente, esse token segue frequentemente padrões como "capital da França".

---

## 5. Capacidades e Limitações

Compreender o funcionamento dos LLMs esclarece tanto seu poder quanto suas fraquezas.

**Capacidades**: geração de texto coerente, transferência de conhecimento entre domínios, habilidades emergentes (raciocínio, programação) e adaptação a diferentes estilos.

**Limitações**: alucinações (informações plausíveis mas falsas), conhecimento limitado aos dados de treinamento, raciocínio inconsistente em problemas complexos e reprodução de vieses presentes nos dados.

---

## Conclusão

Os LLMs representam uma conquista notável da engenharia computacional: sistemas que, através de previsão estatística em escala massiva, produzem texto que frequentemente parece genuinamente inteligente. Compreender que são, essencialmente, sofisticadas "máquinas de completar frases" — refinadas com feedback humano — permite utilizá-los de forma mais eficaz: aproveitando suas capacidades impressionantes enquanto permanecemos atentos às suas limitações inerentes.

---

## Referências

AMAZON WEB SERVICES. What is a Large Language Model? *AWS Documentation*, 2024. [Link](https://aws.amazon.com/what-is/large-language-model/)

AMAZON WEB SERVICES. What is RLHF? *AWS Documentation*, 2024. [Link](https://aws.amazon.com/what-is/reinforcement-learning-from-human-feedback/)

GOOGLE DEVELOPERS. Introduction to Large Language Models. *Machine Learning*, 2024. [Link](https://developers.google.com/machine-learning/resources/intro-llms)

HUGGING FACE. Illustrating Reinforcement Learning from Human Feedback. *Hugging Face Blog*, 2023. [Link](https://huggingface.co/blog/rlhf)

IBM. What is GPT? *IBM Think*, 2024. [Link](https://www.ibm.com/think/topics/gpt)

IBM. What is Self-Attention? *IBM Think*, 2025. [Link](https://www.ibm.com/think/topics/self-attention)

JALAMMAR, Jay. The Illustrated Transformer. 2018. [Link](https://jalammar.github.io/illustrated-transformer/)

MICROSOFT. Understanding Tokens. *Microsoft Learn*, 2024. [Link](https://learn.microsoft.com/en-us/dotnet/ai/conceptual/understanding-tokens)

VASWANI, Ashish *et al.* Attention Is All You Need. *NeurIPS*, 2017. [Link](https://arxiv.org/abs/1706.03762)

WIKIPEDIA. Large language model. 2025. [Link](https://en.wikipedia.org/wiki/Large_language_model)
`;
