const paragrafo = document.querySelector('#sobre p');
let textoAtual = "Estudante de Engenharia de Software, com foco em desenvolvimento web e mobile."
let contador = 0;

function digitar() {
    if (contador < textoAtual.length) {
        paragrafo.innerHTML += textoAtual.charAt(contador);
        contador++;
        setTimeout(digitar, 50);
    }
}
/*limpa o html e chama a função*/
if (paragrafo) {
    paragrafo.innerHTML = "";
    digitar();
}

/* O form*/
const formContato = document.getElementById('form-contato');

if (formContato) {
    formContato.addEventListener('submit', function (evento) {
        evento.preventDefault();
        /*não recarrega*/

        /*puxa o nome*/
        const nome = document.querySelector('input[name = "name"]').value;

        /*pop-up*/
        Swal.fire({
            title: 'Mensagem enviada !',
            text: 'Muito obrigado' + nome
        });
        formContato.reset();
    });
}
/*rolagem*/
const menu = document.querySelector('nav');

window.addEventListener('scroll', function () {

    if (window.scrollY > 50) {
        menu.style.backgroundColor = 'rbga(18, 18, 18, 1)';
    } else {
        menu.style.backgroundColor = 'rgba(18, 18, 0.95)';
    }
});

/*função de troca*/
function mudarIdioma(idiomaEscolhido) {
    const elementosParaTraduzir = document.querySelectorAll('[data-18n]');

    /*busca os elementos*/
    elementosParaTraduzir.forEach(function (elemento) {
        let chave = elemento.getAttribute('data-i18n');
        /*puxa cada palavra*/

        elemento.innerText = dicionario[idiomaEscolhido][chave]
    });
}

