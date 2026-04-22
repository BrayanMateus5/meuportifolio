import { dicionario } from './dicionario.js';

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
/*limpa o html e chama a função*/
if (paragrafo) {
    paragrafo.textContent = '';
    digitar();
}

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
const menu = document.querySelector('nav');

window.addEventListener('scroll', function () {

    if (window.scrollY > 50) {
        menu.style.backgroundColor = 'rgba(18, 18, 18, 1)';
    } else {
        menu.style.backgroundColor = 'rgba(18, 18, 0.95)';
    }
});

/*função de troca*/
function mudarIdioma(idiomaEscolhido) {
    document.querySelectorAll('[data-i18n]').forEach(elemento => {
        const chave = elemento.getAttribute('data-i18n');
        const texto = dicionario[idiomaEscolhido][chave] || chave;

        if (elemento.placeholder !== undefined) {
            elemento.placeholder = texto;
        } else {
            elemento.textContent = texto;
        }
    });

    const botoesIdioma = document.querySelectorAll('.idioma');
    botoesIdioma.forEach(function (botao) {
        botao.classList.remove('ativo');
    });

    /*ativa o botão*/
    document.querySelector('.btn-idioma[data-idioma="' + idiomaEscolhido + '"]').classList.add('ativo');

}
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    sections.forEach(sec => {
        const top = sec.getBoundingClientRect().top;

        if (top < window.innerHeight - 50) {
            sec.classList.add('visible');
        }
    });
});

