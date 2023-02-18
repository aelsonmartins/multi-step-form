import $ from 'jquery';

let v_obj = '';
let v_fun = '';

function mascara(o, f) {
  v_obj = o;
  v_fun = f;
  setTimeout(execmascara(), 1);
}

function execmascara() {
  v_obj.value = v_fun(v_obj.value);
}

function mtel(v) {
  //MASCARA PARA TELEFONE

  v = v.replace(/\D/g, ''); //Remove tudo o que n�o � d�gito
  v = v.replace(/^(\d{2})(\d)/g, '($1) $2'); //Coloca par�nteses em volta dos dois primeiros d�gitos
  v = v.replace(/(\d)(\d{4})$/, '$1-$2'); //Coloca h�fen entre o quarto e o quinto d�gitos
  return v;
}

function mcpf(v) {
  //MASCARA PARA CPF
  v = v.replace(/\D/g, ''); //Remove tudo o que n�o � d�gito
  v = v.replace(/^(\d{11})\d*/g, '$1'); // Apenas os 11 primeiros caracteres
  v = v.replace(/(\d{3})(\d)/, '$1.$2'); //Coloca um ponto entre o terceiro e o quarto d�gitos
  v = v.replace(/(\d{3})(\d)/, '$1.$2'); //Coloca um ponto entre o terceiro e o quarto d�gitos de novo (para o segundo bloco de n�meros)
  v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); //Coloca um h�fen entre o terceiro e o quarto d�gitos

  return v;
}

function mcep(v) {
  //MASCARA PARA CEP
  v = v.replace(/\D/g, ''); //Remove tudo o que n�o � d�gito
  v = v.replace(/^(\d{5})(\d)/, '$1-$2'); //Esse � t�o f�cil que n�o merece explica��es
  return v;
}

$(document).ready(function () {
  // FUNCAO QUE � ACIONADO AO CARREGAR A PAGINA
  $('.mascaratel').keyup(function () {
    //ATRIBUI O CAMPO COM CLASSE mascaratel A MASCARA DE TELEFONE
    mascara(this, mtel);
  });

  $('.mascaracpf').keyup(function () {
    //ATRIBUI O CAMPO COM CLASSE mascaracpf A MASCARA DE CPF
    mascara(this, mcpf);
  });

  $('.mascaracep').keyup(function () {
    //ATRIBUI O CAMPO COM CLASSE mascaracpf A MASCARA DE CPF
    mascara(this, mcep);
  });
});
