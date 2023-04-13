let title = document.querySelector('[data-banner-titulo]');
const messages = ["Ola, meu nome é Yuri.", "Hi I`m Yuri Lopes."];
/* mesageIndex = o index do array */
let messageIndex = 0;
let characterIndex = 0;
let currentMessage = "";
let currentCharacters = "";

function type() {
    const shouldTypeFirstMessage = messageIndex === messages.length;
    /* Si shouldTypeFirstMessage tiver o mesmo tamanho de messages.lenght retorna true */
    if (shouldTypeFirstMessage) {
        messageIndex = 0;
    }

    currentMessage = messages[messageIndex];

    /*currentCharacters recebe o resultado de currentMessage,
    como slice recebeu 0 para o primeiro argumento e 0 para o segundo
    ele recebe uma string vazia , quando ela for incrementar o characterIndex
    ela recebe a primeira letra da string
     */

    currentCharacters = currentMessage.slice(0, characterIndex++);
    title.textContent = currentCharacters;

    /* so vai exucutar quando a primeira string do array acabar */
    const shouldChangeMessageTobeTyped = currentCharacters.length === currentMessage.length;

    if (shouldChangeMessageTobeTyped) {
        messageIndex++;
        characterIndex = 0;
    }
}


setInterval(type, 200);