let numDigitado = document.getElementById("numDigitado");
let listaNumDigitado = document.getElementById("listaNumDigitado");
let resp = document.getElementById("resp")
let numerosDigitados = [];

function incluir(){
    if (numDigitado.value.length == 0){
        alert("Favor inserir um número antes de clicar no botão incluir")
    }
    else if (numDigitado.value == 0 || numDigitado.value > 100){
        alert("Número informado igual a zero ou maior que 100!")
    }
    else{
        if(numerosDigitados.indexOf(numDigitado.value) != -1){
            alert("Número já existe na lista")
        }
        else{
            numerosDigitados.push(numDigitado.value)
            let item = document.createElement("option")
            item.text = `valor ${numDigitado.value} inserido`
            listaNumDigitado.appendChild(item)
            resp.innerHTML = " "
        }
    }
}

function analisar(){
    if(numerosDigitados.length == 0){
        alert("Favor incluir valores antes de analisar!")
    }
    else{
        let totelem = numerosDigitados.length
        let maior = numerosDigitados[0]
        let menor = numerosDigitados[0]
        let soma = 0
        let media = 0
        for(let pos in numerosDigitados){
            soma += numerosDigitados[pos]
            if(numerosDigitados[pos] > maior)
                maior = numerosDigitados[pos]
            if(numerosDigitados[pos] < menor)
                menor = numerosDigitados[pos]
        }
        media = soma / totelem
        resp.innerHTML = " "
        resp.innerHTML = `<p>Ao todo temos ${totelem} elementos cadastrados!</p>` 
        resp.innerHTML += `<p>O menor numero digitado foi: ${menor}.</p>`
        resp.innerHTML += `<p>O maior numero digitado foi: ${maior}.</p>`
        resp.innerHTML += `<p>A soma dos valores é: ${soma}.</p>`
        resp.innerHTML += `<p>A média dos valores é: ${media}.</p>`
    }
}