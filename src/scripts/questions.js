const questions = [
  {
    question: "Em qual copa do mundo teve os confrontos das Alemanhas?",
    options: ["1970", "1974", "1978", "1966"],
    answer: "1974",
    explanation: "Os confrontos das Alemanhas ocorreram na Copa do Mundo de 1974, realizada na Alemanha Ocidental. Foi a primeira vez que as duas Alemanhas, Ocidental e Oriental, participaram de um mesmo torneio. A Alemanha Ocidental venceu a competição, derrotando a Holanda na final."
  },
  {
    question: "Qual é o único país que vai sediar jogos da Copa do Mundo em 3 edições diferentes?",
    options: ["Estados Unidos", "Itália", "Brasil", "México"],
    answer: "México",
    explanation: "O México é o único país que sediou jogos da Copa do Mundo em três edições diferentes: 1970, 1986 e 2026."
  },
  {
    question: "Além de Brasil, Argentina e Uruguai, qual é a outra seleção da América do Sul que tem um top 3 em copa do mundo?",
    options: ["Chile", "Paraguai", "Colômbia", "Equador"],
    answer: "Chile",
    explanation: "Além do Brasil, Argentina e Uruguai, o Chile é a outra seleção da América do Sul que alcançou um top 3 em Copas do Mundo. O Chile ficou em terceiro lugar na Copa do Mundo de 1962, sediada no Chile."
  },
  {
    question: "Qual foi a única seleção em copas do mundo, fora da Europa e da América do Sul, a conquistar um terceiro lugar?",
    options: ["Japão", "Coreia do Sul", "Marrocos", "Estados Unidos"],
    answer: "Estados Unidos",
    explanation: "Os Estados Unidos foram a única seleção fora da Europa e da América do Sul a conquistar um terceiro lugar na Copa do Mundo. Isso ocorreu em 1930, na primeira edição do torneio, realizada no Uruguai."
  },
  {
    question: "Além da UEFA e da CONMEBOL, qual é a única confederação que teve uma seleção conquistando o terceiro lugar na Copa do Mundo?",
    options: ["CONCACAF", "AFC", "CAF", "OFC"],
    answer: "CONCACAF",
    explanation: "Além da UEFA (Europa) e da CONMEBOL (América do Sul), a CONCACAF (América do Norte, Central e Caribe) é a única confederação que teve uma seleção conquistando o terceiro lugar na Copa do Mundo. Os Estados Unidos, representando a CONCACAF, conquistaram o terceiro lugar em 1930."
  },
  {
    question: "Qual é o país que mais vezes ficou no top 4 em todas as Copas do mundo?",
    options: ["Brasil", "Alemanha", "Países Baixos", "Argentina"],
    answer: "Alemanha",
    explanation: "A Alemanha é o país que mais vezes ficou no top 4 em todas as Copas do Mundo. A seleção alemã ficou entre os quatro primeiros colocados em 13 edições da Copa do Mundo até o momento."
  },
  {
    question: "Em que ano foi realizada a primeira Copa do Mundo de futebol?",
    options: ["1928", "1930", "1934", "1938"],
    answer: "1930",
    explanation: "A primeira Copa do Mundo de futebol foi realizada em 1930, no Uruguai. Foi o evento inaugural da competição e contou com a participação de 13 equipes."
  },
    {
      question: "Qual foi país sede da Copa do Mundo de futebol de 2022?",
      options: ["Brasil", "Alemanha", "Rússia", "Catar"],
      answer: "Catar",
      explanation:" Copa do Mundo FIFA de 2022, foi a vigésima segunda edição desse evento esportivo, um torneio internacional de futebol masculino organizado pela Federação Internacional de Futebol (FIFA) que ocorreu no Catar."
    },
    {
      question: "Qual seleção nacional detém o recorde de mais participações em Copas do Mundo?",
      options: ["Alemanha", "Brasil", "Itália", "Argentina"],
      answer: "Brasil",
      explanation:"O Brasil que participou de todas 22 edições."
    },
    {
      question: "Qual país sediou a Copa do Mundo de 2018?",
      options: ["Brasil", "Alemanha", "Rússia", "França"],
      answer: "Rússia",
      explanation:" Copa do Mundo FIFA de 2018, foi a vigésima primeira edição desse evento esportivo, um torneio internacional de futebol masculino organizado pela Federação Internacional de Futebol (FIFA) que ocorreu na Russia."
    },
    {
      question: "Quem foi o artilheiro da Copa do Mundo de 2014?",
      options: ["Thomas Müller", "Neymar Jr.", "Lionel Messi", "James Rodríguez"],
      answer: "James Rodríguez",
      explanation:"Na copa de 2014 no Brasil ele marcou 6 gols."
    },
    {
      question: "Qual seleção nacional ganhou mais vezes a Copa do Mundo?",
      options: ["Brasil", "Itália", "Alemanha", "Argentina"],
      answer: "Brasil",
      explanation:"O Brasil sendo a recordista em conquistas em Copas do Mundo, com cinco títulos invictos (1958, 1962, 1970, 1994 e 2002)"
    },
    {
      question: "Quantas vezes a Alemanha venceu a Copa do Mundo?",
      options: ["3", "4", "5", "6"],
      answer: "4",
      explanation:" Alemanha venceu um total de quatro Copas do Mundo até hoje: 1954, 1974, 1990 e 2014."
    },
    {
      question: "Qual jogador marcou o gol mais rápido da história da Copa do Mundo?",
      options: ["Clint Dempsey", "Pelé", "Miroslav Klose", "Hakan Şükür"],
      answer: "Hakan Şükür",
      explanation:"Esse recorde é de Hakan Şükür, em 2002. O Turco marcou aos 11 segundos pela Turquia, em jogo contra a Coreia."
    },
    {
      question: "Em que país foi realizada a primeira Copa do Mundo fora da Europa e da América do Sul?",
      options: ["África do Sul", "México", "Japão", "Coreia do Sul"],
      answer: "México",
      explanation:"O México foi o primeiro país fora do eixo Europa e América do Sul a relaizar um copa, que foi em  1970."
    },
    {
      question: "Qual país venceu a Copa do Mundo de futebol de 1938?",
      options: ["Itália", "Alemanha", "Brasil", "Argentina"],
      answer: "Itália",
      explanation:" A Itália manteve o título e foi bicampeã."
    },
    {
      question: "Qual jogador recebeu o prêmio de melhor jogador na Copa do Mundo de 2014?",
      options: ["Lionel Messi", "James Rodríguez", "Thomas Müller", "Neymar"],
      answer: "Lionel Messi",
      explanation: "Lionel Messi recebeu o prêmio de melhor jogador na Copa do Mundo de 2014, apesar de a Argentina ter perdido na final para a Alemanha. Messi teve uma atuação destacada durante o torneio, marcando gols importantes e sendo peça fundamental na campanha da seleção argentina."
    },
    {
      question: "Qual foi o país-sede da Copa do Mundo de 1954?",
      options: ["Brasil", "Itália", "Alemanha Ocidental", "Suíça"],
      answer: "Suíça",
      explanation: "A Suíça foi o país-sede da Copa do Mundo de 1954. Foi a quinta edição do torneio e a primeira vez que a Suíça sediou o evento. A seleção da Alemanha Ocidental venceu o torneio, derrotando a Hungria na final."
    },
    {
      question: "Quem foi o técnico da seleção brasileira na Copa do Mundo de 2002?",
      options: ["Felipão", "Tite", "Dunga", "Zagallo"],
      answer: "Felipão",
      explanation: "Luiz Felipe Scolari, mais conhecido como Felipão, foi o técnico da seleção brasileira na Copa do Mundo de 2002. Sob o comando de Felipão, o Brasil conquistou o pentacampeonato mundial ao vencer a Alemanha na final por 2 a 0, com dois gols de Ronaldo Fenômeno."
    },
    {
      question: "Quantos gols Pelé marcou em Copas do Mundo?",
      options: ["8", "10", "12", "14"],
      answer: "12",
      explanation: "Pelé marcou um total de 12 gols em Copas do Mundo. Ele é o jogador com mais gols na história do torneio. Pelé venceu três Copas do Mundo com a seleção brasileira, em 1958, 1962 e 1970, e marcou gols em todas essas edições."
    },
    {
      question: "Qual seleção nacional ganhou a primeira Copa do Mundo?",
      options: ["Brasil", "Uruguai", "Argentina", "Itália"],
      answer: "Uruguai",
      explanation: "A seleção do Uruguai ganhou a primeira Copa do Mundo, realizada em 1930. O torneio foi sediado pelo Uruguai e contou com a participação de 13 equipes. Na final, o Uruguai derrotou a Argentina por 4 a 2 e conquistou o título."
    },
    {
      question: "Em que ano o Brasil sediou a Copa do Mundo pela primeira vez?",
      options: ["1946", "1950", "1954", "1962"],
      answer: "1950",
      explanation: "O Brasil sediou a Copa do Mundo pela primeira vez em 1950. O torneio foi realizado principalmente no Estádio do Maracanã, no Rio de Janeiro. Na final, conhecida como 'Maracanaço', o Brasil foi derrotado pelo Uruguai."
    },
    {
      question: "Quem foi o capitão da seleção francesa na Copa do Mundo de 1998?",
      options: ["Zinédine Zidane", "Didier Deschamps", "Thierry Henry", "Patrick Vieira"],
      answer: "Didier Deschamps",
      explanation: "Didier Deschamps foi o capitão da seleção francesa na Copa do Mundo de 1998. Sob sua liderança, a França conquistou seu primeiro título mundial."
    },
    {
      question: "Quem foi o capitão da seleção brasileira na Copa do Mundo de 1930?",
      options: ["Carvalho Leite", "Preguinho", "Moderato", "Hermógenes"],
      answer: "Preguinho",
      explanation: "Preguinho foi o capitão da seleção brasileira na Copa do Mundo de 1930. A competição, realizada no Uruguai, foi a primeira edição da Copa do Mundo de Futebol."
    },
    {
      question: "Em que ano a Alemanha Ocidental venceu sua primeira Copa do Mundo?",
      options: ["1954", "1958", "1962", "1966"],
      answer: "1954",
      explanation: "A Alemanha Ocidental venceu sua primeira Copa do Mundo em 1954. O torneio foi realizado na Suíça."
    },
    {
      question: "Qual seleção nacional foi a primeira a vencer três Copas do Mundo?",
      options: ["Brasil", "Itália", "Alemanha", "Argentina"],
      answer: "Brasil",
      explanation: "O Brasil foi a primeira seleção nacional a vencer três Copas do Mundo. O país conquistou os títulos em 1958, 1962 e 1970."
    },
    {
      question: "Qual jogador ganhou o prêmio de Melhor Jogador Jovem na Copa do Mundo de 2014?",
      options: ["Neymar Jr.", "Paul Pogba", "James Rodríguez", "Kylian Mbappé"],
      answer: "Paul Pogba",
      explanation: "Paul Pogba foi o jogador que ganhou o prêmio de Melhor Jogador Jovem na Copa do Mundo de 2014."
    },
    {
      question: "Qual seleção nacional ganhou a Copa do Mundo de 2006?",
      options: ["Brasil", "Itália", "Alemanha", "Argentina"],
      answer: "Itália",
      explanation: "A Itália ganhou a Copa do Mundo de 2006."
    },
    {
      question: "Quantas vezes a Argentina ganhou a Copa do Mundo?",
      options: ["1", "2", "3", "4"],
      answer: "3",
      explanation: "A Argentina ganhou a Copa do Mundo três vezes, em 1978, 1986 e 2022. As vitórias foram conquistadas respectivamente na Argentina, no México e no Catar."
    },
    {
      question: "Quem foi o treinador da seleção alemã na Copa do Mundo de 2014?",
      options: ["Joachim Löw", "Jürgen Klinsmann", "Rudi Völler", "Otto Rehhagel"],
      answer: "Joachim Löw",
      explanation: "Joachim Löw foi o treinador da seleção alemã na Copa do Mundo de 2014. Sob seu comando, a Alemanha conquistou o tetracampeonato mundial ao derrotar a Argentina na final."
    },
    {
      question: "Qual seleção nacional ganhou a Copa do Mundo de 2010?",
      options: ["Espanha", "Holanda", "Alemanha", "Argentina"],
      answer: "Espanha",
      explanation: "A Espanha ganhou a Copa do Mundo de 2010."
    },
    {
      question: "Qual jogador marcou o gol da vitória do Brasil na final da Copa do Mundo de 2002?",
      options: ["Ronaldo", "Ronaldinho Gaúcho", "Rivaldo", "Kaká"],
      answer: "Ronaldo",
      explanation: "Ronaldo marcou o gol da vitória do Brasil na final da Copa do Mundo de 2002."
    },
    {
      question: "Quantas vezes a França venceu a Copa do Mundo?",
      options: ["1", "2", "3", "4"],
      answer: "2",
      explanation: "A França venceu a Copa do Mundo duas vezes, em 1998 e 2018. A primeira conquista foi realizada na França, enquanto a segunda foi na Rússia."
    },
    {
      question: "Quem foi o Chuteira de Ouro da Copa do Mundo de 2010?",
      options: ["Thomas Müller", "Diego Forlán", "Wesley Sneijder", "David Villa"],
      answer: "Thomas Müller",
      explanation: "Thomas Müller foi o Chuteira de Ouro da Copa do Mundo de 2010. O jogador alemão marcou cinco gols durante o torneio e contribuiu significativamente para a campanha da seleção da Alemanha."
    },
    {
      question: "Qual seleção nacional ganhou a Copa do Mundo de 1994?",
      options: ["Brasil", "Itália", "Alemanha", "Argentina"],
      answer: "Brasil",
      explanation: "O Brasil ganhou a Copa do Mundo de 1994."
    },
    {
      question: "Qual é o maior estádio de futebol do mundo?",
      options: ["Maracanã", "Camp Nou", "Estádio Rungrado 1º de Maio", "Melbourne Cricket Ground"],
      answer: "Estádio Rungrado 1º de Maio",
      explanation: "O maior estádio de futebol do mundo é o Estádio Rungrado 1º de Maio, localizado em Pyongyang, na Coreia do Norte. Ele tem capacidade para aproximadamente 114.000 espectadores."
    },
    {
      question: "Qual país venceu a primeira Copa do Mundo de futebol?",
      options: ["Brasil", "Uruguai", "Itália", "Alemanha"],
      answer: "Uruguai",
      explanation: "O Uruguai foi o país que venceu a primeira Copa do Mundo de futebol, realizada em 1930."
    },
    {
      question: "Quantos países sul-americanos já sediaram a Copa do Mundo de futebol?",
      options: ["2", "3", "4", "5"],
      answer: "4",
      explanation: "Quatro países sul-americanos já sediaram a Copa do Mundo de futebol: Uruguai (1930), Brasil (1950, 2014), Chile (1962) e Argentina (1978)."
    },
    {
      question: "Quantas seleções participaram da primeira Copa do Mundo de futebol?",
      options: ["10", "12", "13", "16"],
      answer: "13",
      explanation: "A primeira Copa do Mundo de futebol, realizada em 1930 no Uruguai, contou com a participação de 13 seleções."
    },
    {
      question: "Qual jogador recebeu o prêmio de melhor jogador (Bola de Ouro) na Copa do Mundo de 2018?",
      options: ["Luka Modrić", "Lionel Messi", "Neymar", "Kylian Mbappé"],
      answer: "Luka Modrić",
      explanation: "Luka Modrić, meio-campista da Croácia, recebeu o prêmio de melhor jogador (Bola de Ouro) na Copa do Mundo de 2018."
    },
    {
      question: "Qual foi o placar da final da Copa do Mundo de futebol de 1998?",
      options: ["Brasil 3-0 Alemanha", "França 3-0 Brasil", "Brasil 2-1 França", "França 3-0 Itália"],
      answer: "França 3-0 Brasil",
      explanation: "O placar da final da Copa do Mundo de futebol de 1998 foi França 3-0 Brasil. A partida foi realizada no Stade de France, em Saint-Denis, França."
    },
    {
      question: "Qual foi o placar da final da Copa do Mundo de futebol de 1930?",
      options: ["Uruguai 3-0 Argentina", "Uruguai 4-3 Argentina", "Uruguai 2-1 Argentina", "Uruguai 4-2 Argentina"],
      answer: "Uruguai 4-2 Argentina",
      explanation: "O placar da final da primeira Copa do Mundo de futebol, realizada em 1930 no Uruguai, foi Uruguai 4-2 Argentina."
    },
    {
      question: "Qual país venceu a Copa do Mundo de futebol de 1954?",
      options: ["Alemanha Ocidental", "Brasil", "Inglaterra", "Alemanha Oriental"],
      answer: "Alemanha Ocidental",
      explanation: "A Alemanha Ocidental venceu a Copa do Mundo de futebol de 1954, realizada na Suíça, conquistando seu primeiro título mundial."
    },
    {
      question: "Qual jogador detém o recorde de mais gols marcados em uma única edição da Copa do Mundo?",
      options: ["Just Fontaine", "Pele", "Miroslav Klose", "Ronaldo"],
      answer: "Just Fontaine",
      explanation: "Just Fontaine, jogador francês, detém o recorde de mais gols marcados em uma única edição da Copa do Mundo, com 13 gols na Copa do Mundo de 1958."
    },
    {
      question: "Qual país venceu a Copa do Mundo de futebol de 1974?",
      options: ["Alemanha Ocidental", "Holanda", "Argentina", "Brasil"],
      answer: "Alemanha Ocidental",
      explanation: "A Alemanha Ocidental venceu a Copa do Mundo de futebol de 1974, realizada na Alemanha Ocidental e conquistou seu segundo título mundial."
    },
    {
      question: "Qual jogador ganhou o prêmio de melhor jogador (Bola de Ouro) na Copa do Mundo de 2002?",
      options: ["Ronaldo", "Zinedine Zidane", "Oliver Kahn", "Rivaldo"],
      answer: "Oliver Kahn",
      explanation: "Oliver Kahn, goleiro da Alemanha, ganhou o prêmio de melhor jogador (Bola de Ouro) na Copa do Mundo de 2002, apesar de sua equipe ter ficado em segundo lugar."
    },
    {
      question: "Qual país foi vice-campeão da Copa do Mundo de futebol de 1954?",
      options: ["Brasil", "Hungria", "Itália", "Alemanha Ocidental"],
      answer: "Hungria",
      explanation: "A Hungria foi vice-campeã da Copa do Mundo de futebol de 1954, perdendo para a Alemanha Ocidental na final."
    },
    {
      question: "Qual jogador ganhou o prêmio de melhor jogador (Bola de Ouro) na Copa do Mundo de 1994?",
      options: ["Romário", "Roberto Baggio", "Dunga", "Bebeto"],
      answer: "Romário",
      explanation: "Romário, atacante brasileiro, ganhou o prêmio de melhor jogador (Bola de Ouro) na Copa do Mundo de 1994, realizada nos Estados Unidos."
    },
    {
      question: "Quantas vezes os Países Baixos chegou à final da Copa do Mundo sem vencer o título?",
      options: ["2", "3", "4", "5"],
      answer: "3",
      explanation: "Os Países Baixos chegaram à final da Copa do Mundo sem vencer o título em três ocasiões: em 1974, 1978 e 2010."
    },
    {
      question: "Qual foi o primeiro país asiático a vencer uma partida em uma Copa do Mundo de futebol?",
      options: ["Coreia do Sul", "Japão", "China", "Coreia do Norte"],
      answer: "Coreia do Norte",
      explanation: "A Coreia do Norte foi o primeiro país asiático a vencer uma partida em uma Copa do Mundo de futebol, em 1966, derotando a Itália por 1 a 0."
    },
    {
      question: "Qual país da Oceania conseguiu se classificar para a Copa do Mundo de Futebol em 2010?",
      options: ["Austrália", "Nova Zelândia", "Fiji", "Samoa"],
      answer: "Nova Zelândia",
      explanation: "A Nova Zelândia foi o país da Oceania que se classificou para a Copa do Mundo de Futebol em 2010, realizada na África do Sul."
    },
    {
      question: "Qual país asiático fez história ao chegar às quartas de final da Copa do Mundo de futebol em 2002?",
      options: ["Coreia do Sul", "Japão", "Irã", "Arábia Saudita"],
      answer: "Coreia do Sul",
      explanation: "A Coreia do Sul fez história ao chegar às quartas de final da Copa do Mundo de futebol em 2002, co-sedida pelo Japão e pela Coreia do Sul."
    },
    {
      question: "Qual país da Oceania disputou a repescagem intercontinental para se classificar para a Copa do Mundo de futebol em 2018?",
      options: ["Austrália", "Nova Zelândia", "Fiji", "Ilhas Salomão"],
      answer: "Nova Zelândia",
      explanation: "A Nova Zelândia disputou a repescagem intercontinental para se classificar para a Copa do Mundo de futebol em 2018, mas não conseguiu avançar."
    },
    {
      question: "Qual foi a seleção que empatou todos os seus jogos na fase de grupos, contra Eslováquia, Itália e Paraguai, na copa de 2010?",
      options: ["Japão", "Suiça", "Austrália", "Nova Zelândia"],
      answer: "Nova Zelândia",
      explanation: "A Nova Zelândia empatou todos os seus jogos na fase de grupos da Copa do Mundo de 2010, contra Eslováquia, Itália e Paraguai."
    },
    {
      question: "Qual país asiático foi o primeiro a avançar para a segunda fase da Copa do Mundo de futebol?",
      options: ["Coreia do Sul", "Japão", "Coreia do Norte", "Arábia Saudita"],
      answer: "Coreia do Norte",
      explanation: "A Coreia do Norte chegado as Quartas-de-final de 1966."
    },
    {
      question: "Qual país da Oceania foi o primeiro a se classificar para uma Copa do Mundo de futebol?",
      options: ["Nova Zelândia", "Austrália", "Fiji", "Ilhas Salomão"],
      answer: "Austrália",
      explanation: "A Austrália foi o primeiro país da Oceania a se classificar para uma Copa do Mundo de futebol, em 1974, quando disputou a competição na Alemanha Ocidental."
    },
    {
      question: "Qual país da Ásia participou da Copa do Mundo de futebol pela primeira vez em 1994?",
      options: ["Arábia Saudita", "Irã", "Coreia do Sul", "Japão"],
      answer: "Arábia Saudita",
      explanation: "A Arábia Saudita participou da Copa do Mundo de futebol pela primeira vez em 1994, nos Estados Unidos."
    },
    {
      question: "Qual país asiático conquistou seu primeiro ponto na Copa do Mundo de futebol em 2010?",
      options: ["Japão", "Coreia do Sul", "Irã", "Arábia Saudita"],
      answer: "Coreia do Sul",
      explanation: "A Coreia do Sul que ganhou da Grécia por 2 a 0."
    },
    {
      question: "Qual país da Oceania avançou para a fase de grupos da Copa do Mundo de futebol de 2010?",
      options: ["Austrália", "Nova Zelândia", "Fiji", "Ilhas Salomão"],
      answer: "Nova Zelândia",
      explanation: "A Nova Zelândia avançou para a fase de grupos da Copa do Mundo de futebol de 2010, realizada na África do Sul."
    },
    {
      question: "Qual país da Ásia se classificou para a Copa do Mundo de futebol de 1978, pela primeira vez em sua história?",
      options: ["Arábia Saudita", "Irã", "Coreia do Sul", "Japão"],
      answer: "Irã",
      explanation: "O Irã se classificou para a Copa do Mundo de futebol de 1978, realizada na Argentina, marcando sua primeira participação na história do torneio."
    },
    {
      question: "Qual país da Oceania foi derrotado na repescagem intercontinental para a Copa do Mundo de futebol em 2018?",
      options: ["Nova Zelândia", "Austrália", "Fiji", "Ilhas Salomão"],
      answer: "Nova Zelândia",
      explanation: "A Nova Zelândia foi derrotada na repescagem intercontinental para a Copa do Mundo de futebol em 2018, perdendo para o Peru."
    },
    {
      question: "Qual foi a melhor colocação da Austrália em uma Copa do Mundo de futebol?",
      options: ["Oitavas de final", "Quartas de final", "Semifinal", "Final"],
      answer: "Oitavas de final",
      explanation: "A melhor colocação da Austrália em uma Copa do Mundo de futebol foi alcançar as oitavas de final, o que aconteceu em 2006, na Alemanha em 2022 no Catar."
    },
    {
      question: "Qual país asiático sediou a Copa do Mundo de futebol em 2022?",
      options: ["Arábia Saudita", "Irã", "Qatar", "Emirados Árabes Unidos"],
      answer: "Qatar",
      explanation: "O Qatar sediou a Copa do Mundo de futebol em 2022, sendo o primeiro país do Oriente Médio a receber o torneio."
    },
    {
      question: "Qual país da Oceania foi derrotado na repescagem intercontinental para a Copa do Mundo de futebol em 2014?",
      options: ["Nova Zelândia", "Austrália", "Fiji", "Ilhas Salomão"],
      answer: "Nova Zelândia",
      explanation: "A Nova Zelândia foi derrotada na repescagem intercontinental para a Copa do Mundo de futebol em 2014, não conseguindo se classificar, onde perdeu para o México."
    },
    {
      question: "Qual país asiático co-sedeou a Copa do Mundo de futebol em 2002, com o Japão?",
      options: ["Coreia do Sul", "Coreia do Norte", "China", "Qatar"],
      answer: "Coreia do Sul",
      explanation: "A Coreia do Sul co-sedeou a Copa do Mundo de futebol em 2002, junto com o Japão. Foi a primeira vez que uma Copa do Mundo foi sediada por dois países."
    },
    {
      question: "Em que país foi jogada a final da Copa do Mundo de futebol de 2002?",
      options: ["Coreia do Sul", "Japão", "China", "Qatar"],
      answer: "Japão",
      explanation: "A final da Copa do Mundo de futebol de 2002 foi jogada no Japão, no Estádio Internacional de Yokohama, também conhecido como Estádio Nissan."
    },
    {
      question: "Qual país da Oceania foi o primeiro a pontuar em uma Copa do Mundo de futebol?",
      options: ["Nova Zelândia", "Austrália", "Fiji", "Ilhas Salomão"],
      answer: "Austrália",
      explanation: "A Austrália foi o primeiro país da Oceania a pontuar em uma Copa do Mundo de futebol. Isso aconteceu em 1974, na Copa do Mundo realizada na Alemanha Ocidental."
    },
    {
      question: "Qual foi a melhor colocação da Coreia do Sul em uma Copa do Mundo de futebol?",
      options: ["Quarto lugar", "Oitavas de final", "Quartas de final", "Terceiro lugar"],
      answer: "Quarto lugar",
      explanation: "A melhor colocação da Coreia do Sul em uma Copa do Mundo de futebol foi o quarto lugar, alcançado na Copa do Mundo de 2002, realizada em conjunto com o Japão."
    },
    {
      question: "Qual país asiático sediou a Copa do Mundo de futebol em 2002 juntamente com a Coreia do Sul?",
      options: ["Coreia do Norte", "Japão", "China", "Qatar"],
      answer: "Japão",
      explanation: "O Japão sediou a Copa do Mundo de futebol em 2002, em conjunto com a Coreia do Sul. Foi a primeira vez que o torneio foi realizado na Ásia."
    },
    {
      question: "Qual país asiático fez sua estreia na Copa do Mundo de futebol em 1998?",
      options: ["Coreia do Sul", "Japão", "China", "Arábia Saudita"],
      answer: "Japão",
      explanation: "O Japão fez sua estreia na Copa do Mundo de futebol em 1998, sediada na França. Foi a primeira participação da seleção japonesa no torneio."
    },
    {
      question: "Qual país da Oceania participou da Copa do Mundo de futebol pela primeira vez em 1982?",
      options: ["Austrália", "Nova Zelândia", "Fiji", "Ilhas Salomão"],
      answer: "Nova Zelândia",
      explanation: "A Nova Zelândia participou da Copa do Mundo de futebol pela primeira vez em 1982, realizada na Espanha. Foi a estreia da seleção neozelandesa no torneio."
    },
    {
      question: "Qual país asiático se classificou para a Copa do Mundo de futebol de 2002 pela primeira vez em sua história?",
      options: ["Coreia do Norte", "Japão", "China", "Arábia Saudita"],
      answer: "China",
      explanation: "A China se classificou para a Copa do Mundo de futebol de 2002 pela primeira vez em sua história. Foi um marco significativo para o futebol chinês."
    },
    {
      question: "Qual país sediou a Copa do Mundo de futebol de 2010?",
      options: ["Nigeria", "Angola", "África do Sul", "Gabão"],
      answer: "África do Sul",
      explanation: "A Copa do Mundo de futebol de 2010 foi sediada pela África do Sul, que fica no continente africano. Foi a primeira vez que o torneio foi realizado no continente africano."
    },,
    {
      question: "Em que ano a Argélia e o Camarões foram pela primeira vez a uma Copa do Mundo?",
      options: ["1978", "1982", "1986", "1990"],
      answer: "1982",
      explanation: "Tanto a Argélia quanto Camarões fizeram sua estreia na Copa do Mundo em 1982, realizada na Espanha. Esta foi a primeira vez que ambas as seleções africanas participaram do torneio mundial de futebol."
    },    
    {
      question: "Qual foi a melhor colocação da seleção da Nigéria em uma Copa do Mundo?",
      options: ["Quartas de final", "Oitavas de final", "Semifinais", "Fase de grupos"],
      answer: "Oitavas de final",
      explanation: "A melhor colocação da seleção da Nigéria em uma Copa do Mundo foi alcançar as oitavas de final em três vezes, quais foram em 1994, 1998 e 2014."
    },
    {
      question: "Qual seleção africana foi a primeira a vencer uma partida na Copa do Mundo?",
      options: ["Tunísia", "Argélia", "Camarões", "Egito"],
      answer: "Tunísia",
      explanation: "A Tunísia foi a primeira seleção africana a vencer uma partida na Copa do Mundo. Isso ocorreu em 1978, na Argentina."
    },
    {
      question: "Qual a primeira seleção africana a participar de uma Copa do Mundo?",
      options: ["Tunísia", "Argélia", "Camarões", "Egito"],
      answer: "Egito",
      explanation: "O Egito foi a primeira seleção africana a participar de uma Copa do Mundo. Sua estreia ocorreu em 1934, na Itália."
    },
    {
      question: "Qual foi o melhor desempenho da seleção da Tunísia em uma Copa do Mundo?",
      options: ["Oitavas de final", "Quartas de final", "Semifinais", "Fase de grupos"],
      answer: "Oitavas de final",
      explanation: "O melhor desempenho da seleção da Tunísia em uma Copa do Mundo foi em 1978, na Argentina, naqual ele fez 4 ponto, porem não passou de fase."
    },
    {
      question: "Qual jogador marfinense fez um gol no Brasil na fase de grupo da Copa do Mundo de 2010?",
      options: ["Didier Drogba", "Salomon Kalou", "Yaya Touré", "Gervinho"],
      answer: "Didier Drogba",
      explanation: "Didier Drogba foi o jogador marfinense que marcou um gol no Brasil durante a fase de grupos da Copa do Mundo de 2010, na África do Sul."
    },
    {
      question: "Qual país africano foi o primeiro a se classificar para as quartas de final de uma Copa do Mundo?",
      options: ["Nigéria", "Camarões", "Senegal", "Gana"],
      answer: "Camarões",
      explanation: "Camarões foi o primeiro país africano a se classificar para as quartas de final de uma Copa do Mundo. Isso aconteceu em 1990, na Itália."
    },
    {
      question: "Quantas vezes a Croácia jogou as semifinais de Copas do mundo?",
      options: ["3", "5", "2", "4"],
      answer: "3",
      explanation: "A Croácia jogou as semifinais da Copa do Mundo em três ocasiões, sendo em 1998, 2018 e 2022."
    },
    {
      question: "Quantas vezes a seleção de Gana participou da Copa do Mundo?",
      options: ["Uma vez", "Duas vezes", "Três vezes", "Quatro vezes"],
      answer: "Três vezes",
      explanation: "A seleção de Gana participou da Copa do Mundo em três ocasiões."
    },
    {
      question: "Qual país africano se tornou o primeiro a vencer uma partida de Copa do Mundo contra uma seleção sul-americana?",
      options: ["Nigéria", "Camarões", "Senegal", "Gana"],
      answer: "Camarões",
      explanation: "Camarões se tornou o primeiro país africano a vencer uma partida de Copa do Mundo contra uma seleção sul-americana ao derrotar a Argentina em 1990."
    },
    {
      question: "Qual país africano se tornou o primeiro a vencer uma partida de Copa do Mundo contra uma seleção europeia?",
      options: ["Nigéria", "Camarões", "Senegal", "Marrocos"],
      answer: "Marrocos",
      explanation: "Marrocos se tornou o primeiro país africano a vencer uma partida de Copa do Mundo contra uma seleção europeia ao derrotar Portugal em 1986."
    },
    {
      question: "Qual foi desse países africanos que não fez sua estreia na Copa do Mundo de 2006?",
      options: ["Gana", "Costa do Marfim", "Angola", "África do Sul"],
      answer: "África do Sul",
      explanation: "A África do Sul não fez sua estreia na Copa do Mundo de 2006. Na verdade, sua primaira participação em copa foi em 1998"
    },
    {
      question: "Qual seleção africana participou de todas as Copas do Mundo de 1994, 1998, 2002, 2010, 2014 e 2018?",
      options: ["Nigéria", "Senegal", "Camarões", "Gana"],
      answer: "Nigéria",
      explanation: "A Nigéria é a seleção africana que participou de todas as Copas do Mundo menos a de 2006."
    },
    {
      question: "Qual foi a primeira seleção africana a avançar para as quartas de final da Copa do Mundo?",
      options: ["Nigéria", "Camarões", "Marrocos", "Senegal"],
      answer: "Camarões",
      explanation: "Camarões foi a primeira seleção africana a avançar para as quartas de final da Copa do Mundo, em 1990, na Copa do Mundo na Itália."
    },
    {
      question: "Qual país europeu participou da Copa do Mundo de 2018 pela primeira vez?",
      options: ["Bósnia e Herzegovina", "Eslováquia", "Ucrânia", "Islândia"],
      answer: "Islândia",
      explanation: "A Islândia participou da Copa do Mundo de 2018 pela primeira vez em sua história."
    },
    {
      question: "Qual foi o melhor desempenho da seleção do Senegal em uma Copa do Mundo?",
      options: ["Oitavas de final", "Quartas de final", "Semifinais", "Fase de grupos"],
      answer: "Quartas de final",
      explanation: "O melhor desempenho da seleção do Senegal em uma Copa do Mundo foi alcançar as quartas de final em 2002, na Copa do Mundo co-realizada pelo Japão e pela Coreia do Sul."
    },
    {
      question: "Qual país sediou a Copa do Mundo de futebol sub-17 em 2017?",
      options: ["Chile", "Nigéria", "Índia", "Brasil"],
      answer: "Índia",
      explanation: "A Índia sediou a Copa do Mundo de futebol sub-17 em 2017, marcando a primeira vez que o país recebeu um torneio de uma Copa do Mundo da FIFA em qualquer categoria."
    },
    {
      question: "Qual foi a melhor colocação da seleção de Angola em uma Copa do Mundo?",
      options: ["Oitavas de final", "Quartas de final", "Semifinais", "Fase de grupos"],
      answer: "Fase de grupos",
      explanation: "A melhor colocação da seleção de Angola em uma Copa do Mundo foi avançar para a fase de grupos."
    },
    {
      question: "Qual país fez sua estreia na Copa do Mundo de 2006?",
      options: ["China", "Jamaica", "Trindade e Tobago", "Catar"],
      answer: "Trindade e Tobago",
      explanation: "Trindade e Tobago fez sua estreia na Copa do Mundo de 2006, sendo a primeira e única participação da seleção até o momento."
    },
    {
      question: "Qual jogador nigeriano é conhecido como 'Big Boss'?",
      options: ["Jay-Jay Okocha", "Stephen Keshi", "Rashidi Yekini", "Vincent Enyeama"],
      answer: "Stephen Keshi",
      explanation: "Stephen Keshi, lendário jogador e técnico nigeriano, é conhecido como 'Big Boss' em sua terra natal devido à sua influência e liderança no futebol."
    },
    {
      question: "Quantas vezes a seleção de Marrocos participou da Copa do Mundo?",
      options: ["Quatro vezes", "Cinco vezes", "Seis vezes", "Sete vezes"],
      answer: "Cinco vezes",
      explanation: "A seleção de Marrocos participou da Copa do Mundo em cinco ocasiões, sendo sua última participação na Copa do Mundo de 2018 na Rússia."
    },
    {
      question: "Qual país africano sediou a Copa do Mundo de futebol de 2010?",
      options: ["Nigéria", "Marrocos", "África do Sul", "Egito"],
      answer: "África do Sul",
      explanation: "A Copa do Mundo de 2010 foi sediada pela África do Sul, tornando-se o primeiro país africano a sediar o torneio. Esta edição foi historicamente significativa, pois representou a primeira vez que a Copa do Mundo foi realizada no continente africano."
    },
    {
      question: "Qual seleção africana alcançou a melhor colocação em uma Copa do Mundo?",
      options: ["Marrocos", "Camarões", "Gana", "Senegal"],
      answer: "Marrocos",
      explanation: "A seleção de Marrocos alcançou a melhor colocação de uma equipe africana na Copa do Mundo, chegando às a diputa de teceiro lugar, no Catar."
    },
    {
      question: "Quem foi o capitão da seleção italiana na Copa do Mundo de 2006?",
      options: ["Gianluigi Buffon", "Fabio Cannavaro", "Paolo Maldini", "Francesco Totti"],
      answer: "Fabio Cannavaro",
      explanation: "Fabio Cannavaro foi o capitão da seleção italiana durante a Copa do Mundo de 2006, realizada na Alemanha. Sob sua liderança, a Itália conquistou o título, derrotando a França na final por pênaltis."
    },
    {
      question: "Qual jogador marcou o primeiro gol na história das Copas do Mundo?",
      options: ["Lucien Laurent", "Bert Patenaude", "Geoff Hurst", "György Orth"],
      answer: "Lucien Laurent",
      explanation: "Lucien Laurent, da seleção francesa, marcou o primeiro gol da história das Copas do Mundo durante o torneio inaugural em 1930, realizado no Uruguai. Seu gol foi marcado no jogo de abertura contra o México."
    },
    {
      question: "Quantas vezes a seleção da Inglaterra venceu a Copa do Mundo?",
      options: ["1", "2", "3", "4"],
      answer: "1",
      explanation: "A seleção da Inglaterra venceu a Copa do Mundo uma vez, em 1966. Eles conquistaram o título em casa."
    },
    {
      question: "Quem foi o artilheiro da Copa do Mundo de 2018?",
      options: ["Harry Kane", "Kylian Mbappé", "Luka Modrić", "Antoine Griezmann"],
      answer: "Harry Kane",
      explanation: "Harry Kane, da seleção inglesa, foi o artilheiro da Copa do Mundo de 2018, realizada na Rússia. Ele marcou um total de 6 gols durante o torneio."
    },
    {
      question: "Quem foi o técnico da seleção brasileira na Copa do Mundo de 1970?",
      options: ["Mário Zagallo", "João Saldanha", "Vicente Feola", "Cláudio Coutinho"],
      answer: "Mário Zagallo",
      explanation: "Mário Zagallo foi o técnico da seleção brasileira durante a Copa do Mundo de 1970, no México."
    },
    {
      question: "Qual país sediou a Copa do Mundo de futebol de 1938?",
      options: ["França", "Itália", "Alemanha", "Brasil"],
      answer: "França",
      explanation: "A Copa do Mundo de 1938 foi sediada pela França. Esta foi a terceira edição da Copa do Mundo e a primeira vez que o torneio foi realizado em um país não sul-americano."
    },
    {
      question: "Quem foi o artilheiro da Copa do Mundo de 2006?",
      options: ["Zinedine Zidane", "Miroslav Klose", "Ronaldo", "Thierry Henry"],
      answer: "Miroslav Klose",
      explanation: "Miroslav Klose, da Alemanha, foi o artilheiro da Copa do Mundo de 2006, realizada na Alemanha. Ele marcou um total de 5 gols durante o torneio."
    },
    {
      
        question: "Qual foi a primeira seleção asiática a participar de uma edição da Copa do Mundo?",
        options: ["Indonésia", "Coreia do Norte", "Japão", "Coreia do Sul"],
        answer: "Indonésia",
        explanation: "A Indonésia foi a primeira seleção da Ásia a participar de uma Copa do Mundo. Competiu na Copa de 1938 como Índias Orientais Neerlandesas, na época uma colônia dos Países Baixos. Convidada pela FIFA, a equipe não precisou passar por eliminatórias. É notável que esta seja a única seleção que disputou apenas um jogo em Copas do Mundo."
    }

]

// Não é necessário exportar as perguntas, já que elas são acessíveis globalmente
