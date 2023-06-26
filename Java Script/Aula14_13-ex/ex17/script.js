function tabuada() {
    const valor = document.getElementById("numdigitado")
    const resp = document.getElementById("resp")

    if (valor.value.length == 0){//tudo que vem do HTML tem que usar o "".value". Se não usar, estará usando a tag inteira e não o conteúdo dela, que é o que interessa.
        resp.innerHTML = "<p>Não podemos gerar uma tebuada sem o valor</p>"
    }
    else{
        resp.innerHTML = "" // para limpar a linha antes do mostrar a tabuada.
        for(let i = 1; i <= 10; i++){
            let calc = i * valor.value; 
            resp.innerHTML += `${i} x ${valor.value} = ${calc} <br>`
        }
    }
}