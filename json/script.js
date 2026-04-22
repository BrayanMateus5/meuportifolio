import dicionario from './dicionario.js';

const paragrafo = document.querySelector('#sobre p');
let textoAtual = "Estudante de Engenharia de Software, com foco em desenvolvimento web e mobile."
let contador = 0;

function digitar() {
    if (contador < textoAtual.length) {
        paragrafo.textContent += textoAtual.charAt(contador);
        contador++;
        setTimeout(digitar, 50);
    }
}
/*Encima aqui é o efeito da digitação...*/

if (paragrafo) {
    paragrafo.textContent = '';
    digitar();
}
/*Aqui ele chama a função para começar o efeito de digitação quando a página é carregada.*/

/* O form*/
const formContato = document.getElementById('form-contato');

if (formContato) {
    formContato.addEventListener('submit', function (evento) {
        evento.preventDefault();
        /*não recarrega*/

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
/*rolagem*/
const sections = document.querySelectorAll('section');
function mostrarSecao() {
    sections.forEach(sec => {
        const top = sec.getBoundingClientRect().top;

        if (top < window.innerHeight - 50) {
            sec.classList.add('visible');
        }
    });
    window.addEventListener('scroll', mostrarSecao);
    window.addEventListener('load', mostrarSecao);
}
/*função para mostrar as seções quando a página é carregada e quando o usuário rola a página.*/

/*função de troca*/
function mudarIdioma(idiomaEscolhido) {
    document.querySelectorAll('[data-i18n]').forEach(elemento => {
        const chave = elemento.getAttribute('data-i18n');
        const texto = dicionario[idiomaEscolhido][chave] || chave;

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