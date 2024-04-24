const cadastrarPessoas = () => {
    const nomeInput = document.querySelector('input[name="nome"]');
    const idadeInput = document.querySelector('input[name="idade"]');
    const nacionalidadeInput = document.querySelector('input[name="nacionalidade"]');
    const pessoas = document.getElementById("pessoas");
    console.log(pessoas);

    const novoElemento = document.createElement('div');
    novoElemento.classList.add('card_pessoa');
    
    const nomeDaPessoa = document.createElement('h2');
    nomeDaPessoa.textContent = nomeInput.value;

    const idadeDaPessoa = document.createElement('p');
    idadeDaPessoa.innerHTML = idadeInput.value; 

    const nacionalidadeDaPessoa = document.createElement('p');
    nacionalidadeDaPessoa.innerHTML = nacionalidadeInput.value;

    novoElemento.append(nomeDaPessoa,idadeDaPessoa,nacionalidadeDaPessoa);
    console.log(novoElemento);
    pessoas.appendChild(novoElemento);

    
}

const button = document.querySelector('button');
button.addEventListener('click',cadastrarPessoas);