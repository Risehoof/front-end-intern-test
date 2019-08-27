// Adicionamos nosso código dentro de uma função anônima para evitar
// variáveis globais.
(function() {
  // Elemento principal do formulário
  const contactForm = document.getElementById('contact');

  // Campos do formulário
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  // "addEventListener" instrui o navegador a executar uma função sempre
  // que um evento específico acontece. Nesse caso, a função abaixo será
  // executada toda vez que o botão de envio for pressionado.
  contactForm.addEventListener('submit', function(event) {
    // A propriedade "value" contém o valor atual de um input ou textarea
    // A propriedade "length" contém o tamanho (em caracteres) de uma
    // uma string. Toda string contém essa propriedade.
    
    //Forma mais direta de usar as propriedades. Concatenação de value e length.
    //Além do alerta, o foco é acionado no campo não preenchido.
    //Uso de "preventDefault" para evitar que o formulário seja submetido de forma
    //errada.
    //"window.alert" reduzido para "alert".
    //O laço verifica se há algum campo vazio, se sim, uma variável recebe
    //uma string com o nome do campo vazio e emite um alerta ao submeter
    //Se não, verifica o formato do email e emite um alerta de preenchimento completo.

    if(nameInput.value.length == 0 || nameInput.value.length == null
      || emailInput.value.length == 0 || emailInput.value.length == null
      || messageInput.value.length == 0 || messageInput.value.length == null){
      
      let campoFaltoso = "";
      
      if(nameInput.value.length == 0){
        campoFaltoso += "Nome\n";
        nameInput.focus();
      }

      if(emailInput.value.length == 0){
        campoFaltoso += "Endereço de email\n";
        emailInput.focus();
      }

      if(messageInput.value.length == 0){
        messageInput.focus();
        campoFaltoso += "Mensagem\n";
      }

      alert("Ops! Parece que algo não está certo. Talvez você deva conferir os seguintes campos:\n"+campoFaltoso);
      event.preventDefault(); 
    }
    else{
      if(!validaEmail(emailInput.value)){
        alert("Ops! Há algo de errado com o e-mail inserido. Tente com o seguinte formato:\nexemplo@exemplo.exp");
        emailInput.focus();
        event.preventDefault(); 
      }else{
        alert("Formulário preenchido com sucesso!");
        return true; 
      }
    }

    // "window" é um objeto global que representa a janela (ou aba) do
    // navegador que está executando o código do seu site. O método
    // "alert" simplesmente mostra um aviso para o usuário contendo a
    // mensagem provida.

    // Altere e complete essa função para validar os campos do formulário
    // de acordo com as especificações do teste. Boa sorte!
  });
})();

//Verifica se o email inserido no formulário atende o padrão de e-mail.
function validaEmail(emailCheck) {
  var regChat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regChat.test(emailCheck);
}
