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
    $('#btn').text('Encode')
});

$('#decode').on('click', () => {
    $('#btn').text('Decode')
});

let formulario = document.forms.formulario;

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  let texto = formulario.texto.value;
  let escolha = formulario.chooseCode.value;
  let botoes = formulario.criptografar.value;
  let numeroIncremento = formulario.incremento.value;
  let msgFinal = "";

  if (escolha == "base64") {
    msgFinal = base64(botoes, texto);
  } else {
    msgFinal = cifraDeCesar(botoes, texto, numeroIncremento);
  }

  var resultadoTexto = document.getElementById("resultado");
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

/* Função Cifra de César */

function cifraDeCesar(codifica, texto, numeroIncremento) {
  numeroIncremento = Number(numeroIncremento);
  var msgFinal = "";

  for (var i = 0; i < texto.length; i++) {
    var letra = texto[i];
    var code = letra.charCodeAt();

    if (codifica == "codificar") {
      code += numeroIncremento;
    } else {
      code -= numeroIncremento;
    }
    msgFinal += String.fromCharCode(code);
  }
  return msgFinal;
}

