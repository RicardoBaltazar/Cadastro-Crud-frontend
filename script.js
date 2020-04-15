var pessoas, index;
let nome = document.querySelector('#txtNome')
let idade = document.querySelector('#txtIdade')
let email = document.querySelector('#txtEmail')
let codigo = document.querySelector('#txtCodigo')

function cadPessoa() {
    pessoas = document.getElementById("tbPessoas");    
    var qtdlLinhas = pessoas.rows.length;
    var linha = pessoas.insertRow(qtdlLinhas);

    var cellCodigo = linha.insertCell(0);
    var celNome= linha.insertCell(1);
    var cellIdade = linha.insertCell(2);
    var cellEmail = linha.insertCell(3);

    cellCodigo.innerHTML = codigo.value;
    celNome.innerHTML = nome.value;
    cellIdade.innerHTML = idade.value;
    cellEmail.innerHTML = email.value;

    codigo.value = ''
    nome.value = ''
    idade.value = ''
    email.value = ''

    preencheCamposForm();

}

function altPessoa(){

    pessoas.rows[index-1].cells[0].innerHTML = codigo.value;
    pessoas.rows[index-1].cells[1].innerHTML = nome.value;
    pessoas.rows[index-1].cells[2].innerHTML = idade.value;
    pessoas.rows[index-1].cells[3].innerHTML = email.value;

    codigo.value = ''
    nome.value = ''
    idade.value = ''
    email.value = ''
}

function preencheCamposForm() {

    for(var i = 0; i <= pessoas.rows.length; i++) 
    {
        pessoas.rows[i].onclick = function() 
        {
            index = this.rowIndex;
            document.getElementById("txtCodigo").value = pessoas.rows[index-1].cells[0].innerText;
            document.getElementById("txtNome").value = pessoas.rows[index-1].cells[1].innerText;
            document.getElementById("txtIdade").value = pessoas.rows[index-1].cells[2].innerText;
            document.getElementById("txtEmail").value = pessoas.rows[index-1].cells[3].innerText;
        }
    }
}

function delRegistro() {

    for(var i = 0; i <= pessoas.rows.length; i++) 
    {
        if (index == i) {
            pessoas.deleteRow(index-1);
            codigo.value = ''
            nome.value = ''
            idade.value = ''
            email.value = ''


            return;
        }
    }
}

function help(){
    alert('Para cadastrar dados, preencha as informações nos campos e clique no botão cadastrar em azul. ' +
    ' Para alterar dados da tabela, clique na linha da tabela que deseja alterar para seleciona-la, escreva os novos dados nos campos e clique no botão alterar. ' +
    ' Para excluir uma linha, clique na linha que deseja excluir para seleciona-la, e clique no botão Excluir ')
}