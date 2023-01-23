/* Função para mostrar o valor de incremento, somente se a cifra estiver selecionada com jQuery */

$(".optionCripto").on("change", function (e) {
    e.preventDefault();

    let valorIncremento = $(".incremento");
    if (e.target.value == "cifraDeCesar") {
        valorIncremento.css("display", "flex");
    } else {
        valorIncremento.css("display", "none");
    }
});

/* Função que altera o nome do botão dependendo de qual opção esteja selecionada */

$('#encode').on('click', () => {
    $('#btn').text('Codificar Mensagem!')
});

$('#decode').on('click', () => {
    $('#btn').text('Decodificar Mensagem!')
});

/* Criptografias */

let formulario = document.forms.formulario;

formulario.addEventListener("submit", function (event) {
  event.preventDefault();


  let selecaoOperacao = $('input[name="criptografar"]:checked').val();
  let texto = formulario.texto.value;
  let escolha = formulario.chooseCode.value;
  let numeroIncremento = formulario.incremento.value;
  let msgFinal = "";

  if (selecaoOperacao == "encode") {
    if (escolha == "base64") {
      msgFinal = codificaBase64(texto);
    } else {
      msgFinal = cifraCesar(texto, numeroIncremento);
    }
  } else {
    if (escolha == "base64") {
      msgFinal = decodificaBase64(texto);
    } else {
      msgFinal = decifraCesar(texto, numeroIncremento);
    }
  }

  let resultadoTexto = document.getElementById("resultado");
  resultadoTexto.innerHTML = `${msgFinal}`;
});

/* Função Base64 */

function base64(codifica, texto) {
    if (codifica == "codificar") {
      return btoa(texto);
    } else {
      return atob(texto);
    }
  }

const codificaBase64 = (texto) => btoa(texto);
const decodificaBase64 = (texto) => atob(texto);

/* Função Cifra de César */

function cifraCesar(texto, numeroIncremento) {
  numeroIncremento = Number(numeroIncremento);
  let msgFinal = "";

  for (let i = 0; i < texto.length; i++) {
    let letra = texto[i];
    let code = letra.charCodeAt();
    code += numeroIncremento;
    msgFinal += String.fromCharCode(code);
  }
  return msgFinal;
}

function decifraCesar(texto, numeroIncremento) {
  numeroIncremento = Number(numeroIncremento);
  let msgFinal = "";

  for (let i = 0; i < texto.length; i++) {
    let letra = texto[i];
    let code = letra.charCodeAt();
    code -= numeroIncremento;
    msgFinal += String.fromCharCode(code);
  }
  return msgFinal;
}
