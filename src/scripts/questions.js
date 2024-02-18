const questions = [
    {
    question: "Em qual copa do mundo teve os confrotos das Alemanhas?",
    options: ["1970", "1974", "1978", "1966"],
    answer: "1974"
    },
    {
    question: "Qual é o único país que vai sediar jogos da Copa do Mundo em 3 edições diferentes?",
    options: ["Estados Unidos", "Itália", "Brasil", "México"],
    answer: "México"
    },
    {
    question: "Além de Brasil, Agentina e Urugui, qual é a outra seleção da America do Sul que tem um top 3 em copa do mundo?",
    options: ["Chile", "Paraguai", "Colômbia", "Equador"],
    answer: "Chile"
    },
    {
    question: "Qual foi a unica seleção em copas do mundo, fora da Europa e da America do Sul, a conquista um 3 lugar?",
    options: ["Japão", "Coreia do Sul", "Marrocos", "Estados Unidos"],
    answer: "Estados Unidos"
    },
    {
    question: "Além da UEFA e da CONMEBOL, qual é a única confederação que teve uma seleção conquistando o terceiro lugar na Copa do Mundo?",
    options: ["CONCACAF", "AFC", "CAF", "OFC"],
    answer: "CONCACAF"
    },
    {
    question: "Qual é pais que mais vezes ficou no top 4, em todas Copas do mundo?",
    options: ["Brasil", "Alemanha", "Países Baixos", "Argentina"],
    answer: "Alemanha"
    },
    {
      question: "Em que ano foi realizada a primeira Copa do Mundo de futebol?",
      options: ["1928", "1930", "1934", "1938"],
      answer: "1930"
    },
    {
      question: "Qual foi país sede da Copa do Mundo de futebol de 2022?",
      options: ["Brasil", "Alemanha", "Rússia", "Catar"],
      answer: "Catar"
    },
    {
      question: "Qual seleção nacional detém o recorde de mais participações em Copas do Mundo?",
      options: ["Alemanha", "Brasil", "Itália", "Argentina"],
      answer: "Brasil"
    },
    {
      question: "Qual país sediou a Copa do Mundo de 2018?",
      options: ["Brasil", "Alemanha", "Rússia", "França"],
      answer: "Rússia"
    },
    {
      question: "Quem foi o artilheiro da Copa do Mundo de 2014?",
      options: ["Thomas Müller", "Neymar Jr.", "Lionel Messi", "James Rodríguez"],
      answer: "James Rodríguez"
    },
    {
      question: "Qual seleção nacional ganhou mais vezes a Copa do Mundo?",
      options: ["Brasil", "Itália", "Alemanha", "Argentina"],
      answer: "Brasil"
    },
    {
      question: "Quantas vezes a Alemanha venceu a Copa do Mundo?",
      options: ["3", "4", "5", "6"],
      answer: "4"
    },
    {
      question: "Qual jogador marcou o gol mais rápido da história da Copa do Mundo?",
      options: ["Clint Dempsey", "Pelé", "Miroslav Klose", "Hakan Şükür"],
      answer: "Hakan Şükür"
    },
    {
      question: "Em que país foi realizada a primeira Copa do Mundo fora da Europa e da América do Sul?",
      options: ["África do Sul", "México", "Japão", "Coreia do Sul"],
      answer: "México"
    },
    {
      question: "Qual país venceu a Copa do Mundo de futebol de 1938?",
      options: ["Itália", "Alemanha", "Brasil", "Argentina"],
      answer: "Itália"
    },
    {
      question: "Qual jogador recebeu o prêmio de melhor jogador na Copa do Mundo de 2014?",
      options: ["Lionel Messi", "James Rodríguez", "Thomas Müller", "Neymar"],
      answer: "Lionel Messi"
    },
    {
      question: "Qual foi o país-sede da Copa do Mundo de 1954?",
      options: ["Brasil", "Itália", "Alemanha Ocidental", "Suiça"],
      answer: "Suíça"
    },
    {
      question: "Quem foi o técnico da seleção brasileira na Copa do Mundo de 2002?",
      options: ["Felipão", "Tite", "Dunga", "Zagallo"],
      answer: "Felipão"
    },
    {
      question: "Quantos gols Pelé marcou em Copas do Mundo?",
      options: ["8", "10", "12", "14"],
      answer: "12"
    },
    {
      question: "Qual seleção nacional ganhou a primeira Copa do Mundo?",
      options: ["Brasil", "Uruguai", "Argentina", "Itália"],
      answer: "Uruguai"
    },
    {
      question: "Em que ano o Brasil sediou a Copa do Mundo pela primeira vez?",
      options: ["1946", "1950", "1954", "1962"],
      answer: "1950"
    },
    {
      question: "Quem foi o capitão da seleção francesa na Copa do Mundo de 1998?",
      options: ["Zinédine Zidane", "Didier Deschamps", "Thierry Henry", "Patrick Vieira"],
      answer: "Didier Deschamps"
    },
    {
      question: "Quem foi o capitão da seleção brasileira na Copa do Mundo de 1930?",
      options: ["Carvalho Leite", "Preguinho", "Moderato", "Hermógenes"],
      answer: "Preguinho"
    },
    {
      question: "Em que ano a Alemanha Ocidental venceu sua primeira Copa do Mundo?",
      options: ["1954", "1958", "1962", "1966"],
      answer: "1954"
    },
    {
      question: "Qual seleção nacional foi a primeira a vencer três Copas do Mundo?",
      options: ["Brasil", "Itália", "Alemanha", "Argentina"],
      answer: "Brasil"
    },
    {
      question: "Qual jogador ganhou o prêmio de Melhor Jogador Jovem na Copa do Mundo de 2014?",
      options: ["Neymar Jr.", "Paul Pogba", "James Rodríguez", "Kylian Mbappé"],
      answer: "Paul Pogba"
    },
    {
      question: "Qual seleção nacional ganhou a Copa do Mundo de 2006?",
      options: ["Brasil", "Itália", "Alemanha", "Argentina"],
      answer: "Itália"
    },
    {
      question: "Quantas vezes a Argentina ganhou a Copa do Mundo?",
      options: ["1", "2", "3", "4"],
      answer: "3"
    },
    {
      question: "Quem foi o treinador da seleção alemã na Copa do Mundo de 2014?",
      options: ["Joachim Löw", "Jürgen Klinsmann", "Rudi Völler", "Otto Rehhagel"],
      answer: "Joachim Löw"
    },
    {
      question: "Qual seleção nacional ganhou a Copa do Mundo de 2010?",
      options: ["Espanha", "Holanda", "Alemanha", "Argentina"],
      answer: "Espanha"
    },
    {
      question: "Qual jogador marcou o gol da vitória do Brasil na final da Copa do Mundo de 2002?",
      options: ["Ronaldo", "Ronaldinho Gaúcho", "Rivaldo", "Kaká"],
      answer: "Ronaldo"
    },
    {
      question: "Quantas vezes a França venceu a Copa do Mundo?",
      options: ["1", "2", "3", "4"],
      answer: "2"
    },
    {
      question: "Quem foi o Chuteira de Ouro da Copa do Mundo de 2010?",
      options: ["Thomas Müller", "Diego Forlán", "Wesley Sneijder", "David Villa"],
      answer: "Thomas Müller" 
    },
    {
      question: "Qual seleção nacional ganhou a Copa do Mundo de 1994?",
      options: ["Brasil", "Itália", "Alemanha", "Argentina"],
      answer: "Brasil"
    },
    {
        question: "Qual é o maior estádio de futebol do mundo?",
        options: ["Maracanã", "Camp Nou", "Estádio Rungrado 1º de Maio", "Melbourne Cricket Ground"],
        answer: "Estádio Rungrado 1º de Maio"
    },
    {
        question: "Qual país venceu a primeira Copa do Mundo de futebol?",
        options: ["Brasil", "Uruguai", "Itália", "Alemanha"],
        answer: "Uruguai"
    },
    {
        question: "Quantas Copas do Mundo a seleção brasileira de futebol já venceu?",
        options: ["3", "4", "5", "6"],
        answer: "5"
    },
    {
      question: "Quantos países sul-americanos já sediaram a Copa do Mundo de futebol?",
      options: ["2", "3", "4", "5"],
      answer: "4"
    },
    {
      question: "Quantas seleções participaram da primeira Copa do Mundo de futebol?",
      options: ["10", "12", "13", "16"],
      answer: "13"
    },
    {
      question: "Qual país sediará a Copa do Mundo de futebol de 2022?",
      options: ["Brasil", "Alemanha", "Rússia", "Catar"],
      answer: "Catar"
    },
    {
      question: "Qual jogador recebeu o prêmio de melhor jogador (Bola de Ouro) na Copa do Mundo de 2018?",
      options: ["Luka Modrić", "Lionel Messi", "Neymar", "Kylian Mbappé"],
      answer: "Luka Modrić"
    },
    {
      question: "Qual foi o placar da final da Copa do Mundo de futebol de 1998?",
      options: ["Brasil 3-0 Alemanha", "França 3-0 Brasil", "Brasil 2-1 França", "França 3-0 Itália"],
      answer: "França 3-0 Brasil"
    },
    {
      question: "Qual foi o placar da final da Copa do Mundo de futebol de 1930?",
      options: ["Uruguai 3-0 Argentina", "Uruguai 4-3 Argentina", "Uruguai 2-1 Argentina", "Uruguai 4-2 Argentina"],
      answer: "Uruguai 4-2 Argentina"
    },
    {
      question: "Qual país venceu a Copa do Mundo de futebol de 1954?",
      options: ["Alemanha Ocidental", "Brasil", "Inglaterra", "Alemanha Oriental"],
      answer: "Alemanha Ocidental"
    },
    {
      question: "Qual jogador detém o recorde de mais gols marcados em uma única edição da Copa do Mundo?",
      options: ["Just Fontaine", "Pele", "Miroslav Klose", "Ronaldo"],
      answer: "Just Fontaine"
    },
    {
      question: "Qual país venceu a Copa do Mundo de futebol de 1974?",
      options: ["Alemanha Ocidental", "Holanda", "Argentina", "Brasil"],
      answer: "Alemanha Ocidental"
    },
    {
      question: "Qual jogador ganhou o prêmio de melhor jogador (Bola de Ouro) na Copa do Mundo de 2002?",
      options: ["Ronaldo", "Zinedine Zidane", "Oliver Kahn", "Rivaldo"],
      answer: "Oliver Kahn"
    },
    {
      question: "Qual país foi vice-campeão da Copa do Mundo de futebol de 1954?",
      options: ["Brasil", "Hungria", "Itália", "Alemanha Ocidental"],
      answer: "Hungria"
    },
    {
      question: "Qual jogador ganhou o prêmio de melhor jogador (Bola de Ouro) na Copa do Mundo de 1994?",
      options: ["Romário", "Roberto Baggio", "Dunga", "Bebeto"],
      answer: "Romário"
    },
    {
      question: "Quantas vezes os Países Baixos chegou à final da Copa do Mundo sem vencer o título?",
      options: ["2", "3", "4", "5"],
      answer: "3"
    },
    {
      question: "Qual foi o primeiro país asiático a vencer uma partida em uma Copa do Mundo de futebol?",
      options: ["Coreia do Sul", "Japão", "China", "Arábia Saudita"],
      answer: "Coreia do Sul"
    },
    {
      question: "Qual país da Oceania conseguiu se classificar para a Copa do Mundo de Futebol em 2010?",
      options: ["Austrália", "Nova Zelândia", "Fiji", "Samoa"],
      answer: "Nova Zelândia"
    },
    {
      question: "Qual país asiático fez história ao chegar às quartas de final da Copa do Mundo de futebol em 2002?",
      options: ["Coreia do Sul", "Japão", "Irã", "Arábia Saudita"],
      answer: "Coreia do Sul"
    },
    {
      question: "Qual país da Oceania disputou a repescagem intercontinental para se classificar para a Copa do Mundo de futebol em 2018?",
      options: ["Austrália", "Nova Zelândia", "Fiji", "Ilhas Salomão"],
      answer: "Nova Zelândia"
    },
    {
      question: "Qual foi a seleção que empatou todos os seus jogos na fase de grupos, contra Eslováquia, Itália e Paraguai, na copa de 2010?",
      options: ["Japão", "Suiça", "Austrália", "Nova Zelândia"],
      answer: "Nova Zelândia"
    },
    {
      question: "Qual país asiático foi o primeiro a avançar para a segunda fase da Copa do Mundo de futebol?",
      options: ["Coreia do Sul", "Japão", "Irã", "Arábia Saudita"],
      answer: "Coreia do Sul"
    },
    {
      question: "Qual país da Oceania foi o primeiro a se classificar para uma Copa do Mundo de futebol?",
      options: ["Nova Zelândia", "Austrália", "Fiji", "Ilhas Salomão"],
      answer: "Austrália"
    },
    {
      question: "Qual país da Ásia participou da Copa do Mundo de futebol pela primeira vez em 1994?",
      options: ["Arábia Saudita", "Irã", "Coreia do Sul", "Japão"],
      answer: "Arábia Saudita"
    },
    {
      question: "Qual país asiático conquistou seu primeiro ponto na Copa do Mundo de futebol em 2010?",
      options: ["Japão", "Coreia do Sul", "Irã", "Arábia Saudita"],
      answer: "Coreia do Sul"
    },
    {
      question: "Qual país da Oceania avançou para a fase de grupos da Copa do Mundo de futebol de 2010?",
      options: ["Austrália", "Nova Zelândia", "Fiji", "Ilhas Salomão"],
      answer: "Nova Zelândia"
    },
    {
      question: "Qual país da Ásia se classificou para a Copa do Mundo de futebol de 2018, pela primeira vez em sua história?",
      options: ["Arábia Saudita", "Irã", "Coreia do Sul", "Japão"],
      answer: "Irã"
    },
    {
      question: "Qual país da Oceania foi derrotado na repescagem intercontinental para a Copa do Mundo de futebol em 2018?",
      options: ["Nova Zelândia", "Austrália", "Fiji", "Ilhas Salomão"],
      answer: "Nova Zelândia"
    },
    {
      question: "Qual foi a melhor colocação da Austrália em uma Copa do Mundo de futebol?",
      options: ["Oitavas de final", "Quartas de final", "Semifinal", "Final"],
      answer: "Oitavas de final"
    },
    {
      question: "Qual país asiático que sediou a Copa do Mundo de futebol em 2022?",
      options: ["Arábia Saudita", "Irã", "Qatar", "Emirados Árabes Unidos"],
      answer: "Qatar"
    },
    {
      question: "Qual país da Oceania foi derrotado na repescagem intercontinental para a Copa do Mundo de futebol em 2014?",
      options: ["Nova Zelândia", "Austrália", "Fiji", "Ilhas Salomão"],
      answer: "Nova Zelândia"
    },
    {
      question: "Qual país asiático co-sedeou a Copa do Mundo de futebol em 2002, com a Japão?",
      options: ["Coreia do Sul", "Coreia do Norte", "China", "Qatar"],
      answer: "Coreia do Sul"
    },
    {
      question: "Em que país foi jogado a final da Copa do Mundo de futebol de 2002?",
      options: ["Coreia do Sul", "Japão", "China", "Qatar"],
      answer: "Japão"
    },
    {
      question: "Qual país da Oceania foi o primeiro a pontuar em uma Copa do Mundo de futebol?",
      options: ["Nova Zelândia", "Austrália", "Fiji", "Ilhas Salomão"],
      answer: "Austrália"
    },
    {
      question: "Qual foi a melhor colocação da Coreia do Sul em uma Copa do Mundo de futebol?",
      options: ["Quartas de final", "Oitavas de final", "Semifinal", "Final"],
      answer: "Semifinal"
    },
    {
      question: "Qual país asiático sediou a Copa do Mundo de futebol em 2002 juntamente com a Coreia do Sul?",
      options: ["Coreia do Sul", "Japão", "China", "Qatar"],
      answer: "Japão"
    },
    {
      question: "Qual país asiático fez sua estreia na Copa do Mundo de futebol em 1998?",
      options: ["Coreia do Sul", "Japão", "China", "Arábia Saudita"],
      answer: "Japão"
    },
    {
      question: "Qual país da Oceania participou da Copa do Mundo de futebol pela primeira vez em 1982?",
      options: ["Austrália", "Nova Zelândia", "Fiji", "Ilhas Salomão"],
      answer: "Nova Zelândia"
    },
    {
      question: "Qual país asiático se classificou para a Copa do Mundo de futebol de 2002 pela primeira vez em sua história?",
      options: ["Coreia do Norte", "Japão", "China", "Arábia Saudita"],
      answer: "China"
    },
    {
      question: "Qual país da Oceania sediou a Copa do Mundo de futebol de 2010?",
      options: ["Austrália", "Nova Zelândia", "Fiji", "Ilhas Salomão"],
      answer: "África do Sul"
    },
    {
      question: "Qual país africano participou da Copa do Mundo de futebol pela primeira vez em 1982?",
      options: ["Nigéria", "Argélia", "Camarões", "Gana"],
      answer: "Argélia"
    },
    {
      question: "Qual foi a melhor colocação da seleção da Nigéria em uma Copa do Mundo?",
      options: ["Quartas de final", "Oitavas de final", "Semifinais", "Fase de grupos"],
      answer: "Oitavas de final"
    },
    {
      question: "Qual seleção africana foi a primeira a vencer uma partida na Copa do Mundo?",
      options: ["Tunísia", "Argélia", "Camarões", "Egito"],
      answer: "Tunísia"
    },

    {
      question: "Qual a primeira seleção africana a particiapa de uma Copa do Mundo?",
      options: ["Tunísia", "Argélia", "Camarões", "Egito"],
      answer: "Egito"
    },

    {
      question: "Qual foi o melhor desempenho da seleção da Tunísia em uma Copa do Mundo?",
      options: ["Oitavas de final", "Quartas de final", "Semifinais", "Fase de grupos"],
      answer: "Oitavas de final"
    },
    {
      question: "Qual jogador marfinense fez um gol no Brasil na fase de grupo da Copa do Mundo de 2010?",
      options: ["Didier Drogba", "Salomon Kalou", "Yaya Touré", "Gervinho"],
      answer: "Didier Drogba"
    },
    {
      question: "Quantos títulos de Copa do Mundo a seleção de Camarões conquistou?",
      options: ["Nenhum", "Um", "Dois", "Três"],
      answer: "Nenhum"
    },
    {
      question: "Qual país africano foi o primeiro a se classificar para as quartas de final de uma Copa do Mundo?",
      options: ["Nigéria", "Camarões", "Senegal", "Gana"],
      answer: "Camarões"
    },
    {
      question: "Quantas vezes a Croácia jogou as semi-finas de Copas do mundo?",
      options: ["3", "5", "2", "4"],
      answer: "3"
    },
    {
      question: "Quantas vezes a seleção de Gana participou da Copa do Mundo?",
      options: ["Uma vez", "Duas vezes", "Três vezes", "Quatro vezes"],
      answer: "Três vezes"
    },
    {
      question: "Qual país africano se tornou o primeiro a vencer uma partida de Copa do Mundo contra uma seleção sul-americana?",
      options: ["Nigéria", "Camarões", "Senegal", "Gana"],
      answer: "Camarões"
    },
    {
      question: "Qual país africano se tornou o primeiro a vencer uma partida de Copa do Mundo contra uma seleção europeia?",
      options: ["Nigéria", "Camarões", "Senegal", "Marrocos"],
      answer: "Marrocos"
    },
    {
      question: "Qual foi desse países africano que não fez sua estreia na Copa do Mundo de 2006?",
      options: ["Gana", "Costa do Marfim", "Angola", "África do Sul"],
      answer: "África do Sul"
    },
    {
      question: "Qual seleção africana participou de todas as Copas do Mundo de 1994, 1998, 2002, 2010, 2014 e 2018?",
      options: ["Nigéria", "Senegal", "Camarões", "Gana"],
      answer: "Nigéria"
    },
    {
      question: "Qual foi a primeira seleção africana a avançar para as quartas de final da Copa do Mundo?",
      options: ["Nigéria", "Camarões", "Marrocos", "Senegal"],
      answer: "Camarões"
    },
    {
      question: "Qual país europeu participou da Copa do Mundo de 2018 pela primeira vez?",
      options: ["Bósnia e Herzegovina", "Eslováquia", "Ucrânia", "Islâdia"],
      answer: "Islâdia"
    },
    {
      question: "Qual jogador senegalês marcou o gol mais rápido da história da Copa do Mundo?",
      options: ["Sadio Mané", "Papiss Cissé", "El Hadji Diouf", "Moussa Sow"],
      answer: "Papiss Cissé"
    },
    {
      question: "Qual foi o melhor desempenho da seleção do Senegal em uma Copa do Mundo?",
      options: ["Oitavas de final", "Quartas de final", "Semifinais", "Fase de grupos"],
      answer: "Quartas de final"
    },
    {
      question: "Qual país sediou a Copa do Mundo de futebol sub-17 em 2017?",
      options: ["Chile", "Nigéria", "Índia", "Brail"],
      answer: "Índia"
    },
    {
      question: "Qual seleção africana foi a primeira a alcançar as quartas de final duas vezes?",
      options: ["Nigéria", "Camarões", "Marrocos", "Senegal"],
      answer: "Senegal"
    },
    {
      question: "Qual foi a melhor colocação da seleção de Angola em uma Copa do Mundo?",
      options: ["Oitavas de final", "Quartas de final", "Semifinais", "Fase de grupos"],
      answer: "Fase de grupos"
    },
    {
      question: "Qual país fez sua estreia na Copa do Mundo de 2006?",
      options: ["China", "Jamaica", "Trindade e Tobago", "Catar"],
      answer: "Trindade e Tobago"
    },
    {
      question: "Qual jogador nigeriano é conhecido como 'Big Boss'?",
      options: ["Jay-Jay Okocha", "Stephen Keshi", "Rashidi Yekini", "Vincent Enyeama"],
      answer: "Stephen Keshi"
    },
    {
      question: "Quantas vezes a seleção de Marrocos participou da Copa do Mundo?",
      options: ["Quatro vezes", "Cinco vezes", "Seis vezes", "Sete vezes"],
      answer: "Cinco vezes"
    }, 
    {
      question: "Qual país africano sediou a Copa do Mundo de futebol de 2010?",
      options: ["Nigéria", "Marrocos", "África do Sul", "Egito"],
      answer: "África do Sul"
    },
    {
      question: "Qual seleção africana alcançou a melhor colocação em uma Copa do Mundo?",
      options: ["Marrocos", "Camarões", "Gana", "Senegal"],
      answer: "Marrocos"
    }
]

// Não é necessário exportar as perguntas, já que elas são acessíveis globalmente
