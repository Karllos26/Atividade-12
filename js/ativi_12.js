let listaCEP = [

];

function Bendereco(dcep) { }

function buscarCEP(Adcep) {
    const novoCEP = document.getElementById("CEP").value
        listaCEP.push(Adcep)
    renderizarCEP();
    removerCEP();

    
}


function removerCEP(id) {
    listaCEP = listaCEP.filter(CEP => CEP.id !== id);
    renderizarCEP();
}

function renderizarCEP() {
    let listaCep = document.getElementById('listaCEP');
    listaCep.innerHTML = "";


    listaCEP.map((txt) => {
        let li = document.createElement('div');
        li.innerHTML = txt.CEP;

        if (txt.cidade === undefined) {
            li.innerHTML += "CEP invalido. Tente novamente!"
            li.innerHTML += `<button type="button" 
                         class="btn btn-danger ml-3" 
                         onclick="removerCEP(${txt.id})">
                         Remover
                         </button>`;
        } else {
            li.innerHTML += " | Cidade:  " + txt.cidade + " |  Estado:  " + txt.estado

            li.innerHTML += `<button type="button" 
                          class="btn btn-danger ml-3" 
                          onclick="removerCEP(${txt.id})">
                          Remover
                          </button>`;
        }

        listaCep.appendChild(li);
    });
    let tempoTotal = document.getElementById("qntCep")
    tempoTotal.innerHTML = listaCEP.length
}


function limparCampos() {
    document.getElementById("CEP").value = " ";
    renderizarCEP()
}



renderizarCEP();
renderizarCEP()
const btnAdicionar = document.getElementById("btnAdicionar")
const Cep = document.getElementById("CEP")
btnAdicionar.addEventListener("click", function () {
  const format = document.getElementById("CEP").value

 
  if(format.length !== 8){
    alert("Ops verifique os numeros digitados")
  }else{
const endereco = document.getElementById("CEP").value
fetch(`https://viacep.com.br/ws/${endereco}/json/`)
    .then((response) => response.json()) //
    .then((dados) => {

        buscarCEP({
            id: listaCEP.length + 1,
            CEP: endereco,
            estado: dados.uf,
            cidade: dados.localidade,

        })
    })
    }
})
