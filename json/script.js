import dicionario from './dicionario.js';

const paragrafo = document.querySelector('#sobre p');
let textoAtual = dicionario.pt.sobre_descricao;
let contador = 0;

/* aqui é o efeito da digitação...*/
function digitar() {
    if (contador < textoAtual.length) {
        paragrafo.textContent += textoAtual.charAt(contador);
        contador++;
        setTimeout(digitar, 40);
    }
}
/*Aqui ele chama a função para começar o efeito de digitação quando a página é carregada.*/
if (paragrafo) {
    paragrafo.textContent = '';
    digitar();
}
/*-------------------------------------------EFEITO DE DIGITAÇÃO-------------------------------------------*/

const formContato = document.getElementById('form-contato');

if (formContato) {
    formContato.addEventListener('submit', function (evento) {
        /*não recarrega*/
        evento.preventDefault();

        /*puxa o nome*/
        const nome = document.querySelector('input[name = "nome"]').value;

        /*pop-up*/
        Swal.fire({
            title: dicionario.pt.alerta_sucesso_titulo,
            text: dicionario.pt.alerta_sucesso_texto + ' ' + nome + '!',
        });
        formContato.reset();
    });
}
/*---------------------------------------------------------------------------TROCA DE IDIOMA-------------------------------------------*/
function mudarIdioma(idiomaEscolhido) {
    document.querySelectorAll('[data-i18n]').forEach(elemento => {
        const chave = elemento.getAttribute('data-i18n');
        const texto = dicionario[idiomaEscolhido][chave];

        if (elemento.tagName === 'INPUT' || elemento.tagName === 'TEXTAREA') {
            elemento.placeholder = texto;
        } else {
            elemento.textContent = texto;
        }
    });

    const botoesIdioma = document.querySelectorAll('.btn-idioma');
    botoesIdioma.forEach(botao => botao.classList.remove('ativo'));

    /*ativa o botão*/
    document.querySelector('.btn-idioma[data-idioma="' + idiomaEscolhido + '"]').classList.add('ativo');

}
/*função oficial de mudar o idioma no HTML*/
window.mudarIdioma = mudarIdioma;

/*------------------------------------------------------FORMULÁRIO DE CONTATO----------*/

const sections = document.querySelectorAll('section');
function mostrarSecao() {
    sections.forEach(sec => {
        const top = sec.getBoundingClientRect().top;

        if (top < window.innerHeight - 50) {
            sec.classList.add('visible');
        }
    });
}
/*função para mostrar as seções quando a página é carregada e quando o usuário rola a página.*/
window.addEventListener('scroll', mostrarSecao);
window.addEventListener('load', mostrarSecao);

/*---------------------------------------------------------------------------ANIMAÇÃO DE ROLAGEM-------------------------------------------*/