let nomes = [];


function adicionar() {
    let forms = document.getElementById('form');
    forms.addEventListener('submit', function (e) {
        let nomeAleatorio = document.getElementById('nome').value;
        if (document.getElementById('lista').checked) {
            nomes.unshift(nomeAleatorio);
        }
        else if(document.getElementById('pilha').checked){
            nomes.push(nomeAleatorio);
        }
        criarBody(nomes);
        forms.reset();
        e.preventDefault();
        
    });

}

function limpar() {
    nomes.splice(0, nomes.length);
    criarBody('');
}

function criarBody(nomeAleatorio) {
    let tbody = document.getElementById('tbody')
    tbody.innerText = '';

    for (const element of nomeAleatorio) {
        let tr = tbody.insertRow();
        let td_palavra = tr.insertCell();
        td_palavra.innerText = element;
    }
}
