const caixaPrincipal = document.querySelector ('.caixa-principal');
const caixaPergunta = document.querySelector ('.caixa-pergunta');
const caixaAlternativas = document.querySelector ('.caixa-alternativas');
const caixaResultado = document.querySelector ('.caixa-resultado');
const caixaResultado = document.querySelector ('.caixa-resultado');

const perguntas = [
    {
      enunciado: "O sol se põe, lançando longas sombras pelas ruas vazias enquanto você caminha para casa após mais um dia cansativo na escola. De repente, você percebe uma figura parada na esquina, envolta em uma capa escura que a encobre por completo. Um calafrio percorre sua espinha enquanto você se pergunta: devo me aproximar para ver quem é ou correr na direção oposta o mais rápido que minhas pernas me levarem?",
      alternativas: [
        {
          texto: "Investigar",
          consequencia: "Com cautela, você se aproxima da figura, tomando cuidado para manter distância segura. Seu coração bate descompassado enquanto você tenta discernir se ela representa perigo ou apenas alguém precisando de ajuda."
        },
        {
          texto: "Fugir",
          consequencia: "O medo toma conta de você e, sem hesitar, você dá meia-volta e corre o mais rápido que pode, sem olhar para trás. A figura permanece imóvel na escuridão, observando sua fuga precipitada."
        }
      ]
    },
    {
      enunciado: "Ao se aproximar, você finalmente consegue distinguir a figura: é um homem, com roupas sujas e rasgadas, cambaleando como se estivesse prestes a cair. Espuma branca sai de sua boca e seus olhos estão arregalados, perdidos em um vazio aterrador. Ele murmura palavras ininteligíveis, gesticulando freneticamente. O que você faz?",
      alternativas: [
        {
          texto: "Ajudar",
          consequencia: "Ignorando o medo que aperta seu estômago, você se ajoelha ao lado do homem e tenta acalmá-lo. Você pergunta se ele precisa de ajuda e oferece água ou algo para comer."
        },
        {
          texto: "Chamar ajuda",
          consequencia: "O desespero toma conta de você. Sem saber o que fazer, você pega o celular e liga para a emergência, relatando a situação e implorando por ajuda médica."
        }
      ]
    },
    // Adicione mais perguntas e alternativas aqui, seguindo o mesmo formato.
  ];
  
  let perguntaAtual = 0;
  
  function iniciarHistoria() {
    mostrarPerguntaAtual();
  }
  
  function escolherOpcao(indice) {
    const alternativaEscolhida = perguntas[perguntaAtual].alternativas[indice];
    console.log("Consequência:", alternativaEscolhida.consequencia);
  
    // Aqui você pode implementar a lógica para ir para a próxima pergunta com base na escolha do jogador.
    // Por exemplo, se a alternativa escolhida for a última da história, você pode finalizar o jogo.
  
    // Para testar, você pode simplesmente incrementar o índice da perguntaAtual:
    perguntaAtual++;
  
    if (perguntaAtual < perguntas.length) {
      mostrarPerguntaAtual();
    } else {
      console.log("Fim da história!");
    }
  }
  
  function mostrarPerguntaAtual() {
    const pergunta = perguntas[perguntaAtual];
    console.log("\n", pergunta.enunciado);
  
    for (let i = 0; i < pergunta.alternativas.length; i++) {
      const alternativa = pergunta.alternativas[i];
      console.log(`${i + 1}. ${alternativa.texto}`);
    }
  }
  
  iniciarHistoria();
  