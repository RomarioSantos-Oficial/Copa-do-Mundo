document.addEventListener('DOMContentLoaded', function() {
    // Seletores dos elementos do HTML
    const quizContainer = document.querySelector('.quiz-container');
    const questionElement = quizContainer.querySelector('.question');
    const optionsElement = quizContainer.querySelector('.options');
    const resultElement = quizContainer.querySelector('.result');
    const timeContainer = quizContainer.querySelector('.time-container');

    const timerElement = document.createElement('div'); // Elemento para exibir o cronômetro
    timerElement.id = 'time-circle'; // Define o id do elemento para manipulação posterior
    timerElement.classList.add('timer');

    const confirmButton = document.createElement('button');
    confirmButton.textContent = 'Confirmar';
    confirmButton.classList.add('confirm-button');

    const nextButton = document.createElement('button');
    nextButton.textContent = 'Próxima Pergunta';
    nextButton.classList.add('next-button');

    const finishButton = document.createElement('button');
    finishButton.textContent = 'Finalizar';
    finishButton.classList.add('finish-button');
    finishButton.style.display = 'none'; // Inicialmente oculto

    // Seleciona o elemento do cronômetro total
    const totalTimeElement = document.getElementById('total-time');

    // Adiciona o cronômetro à tela dentro da div time-container
    timeContainer.appendChild(timerElement);

    // Variáveis para controle do jogo
    let currentQuestionIndex = 0;
    let score = 0;
    let selectedAnswer = null;
    let timeLeft = 30; // Tempo inicial de 30 segundos
    let timerInterval; // Variável para armazenar o intervalo do cronômetro
    let timerStarted = false; // Variável para rastrear se o cronômetro foi iniciado

    // Variáveis para controlar o tempo total de jogo
    let totalGameTime = 0;
    let totalTimerInterval;

    // Função para monitorar e controlar o início do cronômetro
    function startTimerIfNeeded() {
        if (!timerStarted) {
            startTimer(); // Inicia o cronômetro apenas se ainda não estiver iniciado
        }
    }

    // Função para iniciar o cronômetro total
    function startTotalTimer() {
        totalTimerInterval = setInterval(() => {
            totalGameTime++;
            updateTotalTimerDisplay();
        }, 1000);
    }

    // Função para atualizar a exibição do cronômetro total
    function updateTotalTimerDisplay() {
        const minutes = Math.floor(totalGameTime / 60);
        const seconds = totalGameTime % 60;
        const formattedTime = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        totalTimeElement.textContent = formattedTime;
    }

    // Função para iniciar o cronômetro
    function startTimer() {
        timeLeft = 30; // Reinicia o tempo para 30 segundos
        clearInterval(timerInterval); // Limpa o intervalo do cronômetro anterior, se existir
        updateTimerDisplay(); // Atualiza a exibição do cronômetro
        timerInterval = setInterval(() => {
            timeLeft--;
            updateTimerDisplay();
            if (timeLeft <= 0) {
                checkTimeIsUp();
                clearInterval(timerInterval); // Pare o cronômetro completamente
            }
        }, 1000);
        timerStarted = true; // Define a variável de controle como verdadeira
    }

    // Função para atualizar a exibição do cronômetro
    function updateTimerDisplay() {
        const timerElement = document.getElementById('time-circle');
        if (timerElement) {
            timerElement.textContent = timeLeft < 10 ? `0${timeLeft}` : timeLeft; // Adiciona um zero à esquerda se o tempo for menor que 10
        }
    }

    // Função para exibir a próxima pergunta
    function displayQuestion() {
        const currentQuestion = selectedQuestions[currentQuestionIndex];
        questionElement.textContent = currentQuestion.question;
        optionsElement.innerHTML = '';
        currentQuestion.options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.classList.add('option');
            button.addEventListener('click', () => selectAnswer(button, option));
            optionsElement.appendChild(button);
        });
        confirmButton.disabled = false; // Habilita o botão de confirmação
        nextButton.disabled = true; // Desabilita o botão "Próxima Pergunta"
        optionsElement.appendChild(confirmButton); // Adiciona o botão de confirmação
        if (currentQuestionIndex === selectedQuestions.length - 1) {
            optionsElement.appendChild(finishButton); // Adiciona o botão "Finalizar" se for a última pergunta
        } else {
            optionsElement.appendChild(nextButton); // Adiciona o botão "Próxima Pergunta" se não for a última pergunta
        }

        startTimerIfNeeded(); // Verifica e inicia o cronômetro se necessário
    }

    // Função para avançar para a próxima pergunta
    function nextQuestion() {
        currentQuestionIndex++;
        timerStarted = false; // Reinicia a variável de controle do cronômetro
        displayQuestion();
        resultElement.textContent = '';
        resultElement.classList.remove('correct', 'wrong');
    }

    // Função para selecionar uma resposta
    function selectAnswer(button, selectedOption) {
        const buttons = optionsElement.querySelectorAll('.option');
        buttons.forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
        selectedAnswer = selectedOption;
    }

    // Função para verificar se o tempo acabou
    function checkTimeIsUp() {
        timeLeft = 0;
        clearInterval(timerInterval); // Para o cronômetro

        optionsElement.querySelectorAll('.option').forEach(button => {
            button.disabled = true; // Desabilita os botões de opção
        });

        confirmButton.disabled = true; // Desabilita o botão de confirmação

        // Verifica se uma resposta foi selecionada
        if (!selectedAnswer) {
            selectedAnswer = 'resposta inválida'; // Define a resposta como inválida
        }

        checkAnswer(); // Chama a função para verificar a resposta quando o tempo acabar
    }

    // Função para verificar a resposta
    function checkAnswer() {
        clearInterval(timerInterval); // Para o cronômetro

        if (!selectedAnswer) {
            selectedAnswer = 'resposta inválida'; // Define a resposta como inválida
        }

        const currentQuestion = selectedQuestions[currentQuestionIndex];
        const explanation = currentQuestion.explanation;

        if (selectedAnswer === currentQuestion.answer) {
            score += 10; // Adiciona 10 pontos para cada resposta correta (ajuste conforme necessário)
            resultElement.textContent = `Resposta correta! ${explanation}`;
            resultElement.classList.add('correct');
        } else {
            // Não concede pontos ou subtrai pontos para respostas incorretas (ajuste conforme necessário)
            // Por exemplo: score -= 5; para subtrair 5 pontos por resposta incorreta
            resultElement.textContent = `Resposta errada. A resposta correta é: ${currentQuestion.answer}. ${explanation}`;
            resultElement.classList.add('wrong');
        }

        confirmButton.disabled = true; // Desabilita o botão de confirmação após verificar a resposta
        nextButton.disabled = false; // Habilita o botão "Próxima Pergunta"
        if (currentQuestionIndex === selectedQuestions.length - 1) {
            nextButton.disabled = true; // Desabilita o botão "Próxima Pergunta" na última pergunta
            finishButton.style.display = 'inline-block'; // Exibe o botão "Finalizar" na última pergunta
        }
    }

    // Função para exibir o resultado final
function displayResult() {
    questionElement.textContent = '';
    optionsElement.innerHTML = '';
    const totalQuestions = selectedQuestions.length;
    const incorrectAnswers = totalQuestions - score / 10; // Calcula o número de respostas incorretas
    resultElement.textContent = `Você acertou ${score / 10} de ${totalQuestions} questões. ${incorrectAnswers} questões erradas. Pontuação total: ${score}`;

    // Exibir o cronômetro total juntamente com a frase
    totalTimeElement.style.display = 'inline-block'; // Exibe o cronômetro total
    const finalTimeMessage = document.createElement('div');
    finalTimeMessage.textContent = 'Seu tempo para responder todas as perguntas foi de:';
    finalTimeMessage.style.color = 'black'; // Define a cor da fonte da mensagem
    finalTimeMessage.style.marginTop = '20px'; // Adiciona margem superior para separar da pontuação
    timeContainer.appendChild(finalTimeMessage);
}

    // Event listener para o botão de confirmação
    confirmButton.addEventListener('click', function() {
        checkAnswer();
    });

    // Event listener para o botão "Próxima Pergunta"
    nextButton.addEventListener('click', nextQuestion);

   // Event listener para o botão "Finalizar"
    finishButton.addEventListener('click', function() {
    clearInterval(totalTimerInterval); // Para o cronômetro total
    displayResult(); // Exibe o resultado final
    document.getElementById('time-circle').style.display = 'none'; // Oculta o cronômetro de 30 segundos
    totalTimeElement.style.color = 'black'; // Define a cor do cronômetro total como preto
    // totalTimeElement.style.backgroundColor = 'lightgreen'; // Define o fundo do cronômetro total como verde claro
});

    // Seleciona aleatoriamente as 50 perguntas
    const selectedQuestions = selectRandomQuestions();
    // Exibe a primeira pergunta quando o documento é carregado
    displayQuestion();
    // Chame a função startTimer para iniciar o cronômetro
    startTimer();
    // Inicia o cronômetro total
    startTotalTimer();

    // Função para selecionar aleatoriamente as perguntas sem repetição
    function selectRandomQuestions() {
    const shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    return shuffledQuestions.slice(0, 30); // Altere o número 20 para o número desejado de perguntas a serem exibidas
}

 // Função para exibir a próxima pergunta
function displayQuestion() {
    timeLeft = 30; // Reinicia o tempo para 30 segundos a cada nova pergunta
    clearInterval(timerInterval); // Limpa o intervalo do cronômetro anterior, se existir
    startTimer(); // Inicia o cronômetro
    updateTimerDisplay(); // Atualiza a exibição do cronômetro
    const currentQuestion = selectedQuestions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = '';

    // Embaralhar as opções
    const shuffledOptions = currentQuestion.options.sort(() => Math.random() - 0.5);

    shuffledOptions.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option');
        button.addEventListener('click', () => selectAnswer(button, option));
        optionsElement.appendChild(button);
    });

    confirmButton.disabled = false; // Habilita o botão de confirmação
    nextButton.disabled = true; // Desabilita o botão "Próxima Pergunta"
    optionsElement.appendChild(confirmButton); // Adiciona o botão de confirmação
    if (currentQuestionIndex === selectedQuestions.length - 1) {
        optionsElement.appendChild(finishButton); // Adiciona o botão "Finalizar" se for a última pergunta
    } else {
        optionsElement.appendChild(nextButton); // Adiciona o botão "Próxima Pergunta" se não for a última pergunta
    }
}

// Lista de URLs das músicas
const musicList = [
    './src/assets/audio/pais do futebol.mp3',
    './src/assets/audio/Shakia 2010 copa.mp3',
    './src/assets/audio/Live It Up.mp3',
    './src/assets/audio/Hayya Hayya.mp3',
    // Adicione mais URLs de músicas conforme necessário
];

// Função para criar um elemento de áudio
function createAudioElement() {
    const audioElement = new Audio();
    // Define o volume para 20%
    audioElement.volume = 0.2;
    return audioElement;
}

// Função para reproduzir a próxima música na lista
function playNextMusic() {
    // Obtém uma música aleatória da lista
    const randomIndex = Math.floor(Math.random() * musicList.length);
    const randomMusic = musicList[randomIndex];

    // Cria um novo elemento de áudio
    const audioElement = createAudioElement();
    // Define a música selecionada como a origem do elemento de áudio
    audioElement.src = randomMusic;

    // Adiciona um evento de 'ended' ao elemento de áudio para tocar a próxima música quando a atual terminar
    audioElement.addEventListener('ended', playNextMusic);

    // Inicia a reprodução da música
    audioElement.play();
}

// Função para iniciar a reprodução da playlist quando qualquer parte da página for clicada
function startPlaylistOnClick() {
    // Remove o evento de clique após o início da reprodução da playlist para evitar repetições
    document.removeEventListener('click', startPlaylistOnClick);
    // Inicia a reprodução da playlist
    playNextMusic();
}

// Adiciona um evento de clique ao documento para iniciar a reprodução da playlist
document.addEventListener('click', startPlaylistOnClick);

});
