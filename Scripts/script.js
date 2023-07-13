// Menu que Abre ao Clicar 

const obj_icon_menu = document.querySelector('#men');
const obj_menu_dropdown = document.querySelector('.menu-dropdown');


obj_icon_menu.addEventListener('click', FunAbreMenu);


function FunAbreMenu() {
    const isVisible = obj_menu_dropdown.style.display === 'block';

    if (isVisible) {
        obj_menu_dropdown.style.display = 'none';
      } else {
        obj_menu_dropdown.style.display = 'block';
      }
};




// Navegação Automática do Slidder

let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function() {
    nextImage();
}, 5000)

function nextImage() {
    count++;
    if(count > 3) {
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;
};






// Botão Modo Noturno

const botaoModoNoturno = document.getElementById("button_modo_noturno");

botaoModoNoturno.addEventListener('click', function() {

    var body = document.body;
  
    // Alterna para a classe 'modo-noturno' quando clicado
    body.classList.toggle('modo-noturno');
  });

  
  


  

// Função Popup Cadastro de Newsletter

const botaoEnviar = document.querySelector('#btn_cadastro_form');
const nomeCadastro = document.querySelector('#nome_form');
const emailCadastro = document.querySelector('#email_form');
const popup = document.querySelector('.popup-wrapper');
const fecharBotao = document.querySelector('.popup-close');


botaoEnviar.addEventListener('click', function() {
    if(nomeCadastro.value != '' || emailCadastro.value != '') {
    popup.style.display = 'block';
    } else {
            alert("Preencha os nomes de campo e email");
    }
} )

fecharBotao.addEventListener('click', function() {
    popup.style.display = 'none';

})

popup.addEventListener('click', function() {
    popup.style.display = 'none';
})

