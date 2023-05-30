function calcular() {
    var data = new Date()
    var ano = data.getFullYear()
    var anodigitado = document.getElementById("anodigitado")
    var resp = document.querySelector("#resp")
    
    if (anodigitado.value.length == 0  || anodigitado.value == 0 || anodigitado.value > ano){
        alert("Verifique os dados e tente novamemnte!")
    }
    else{
        var sexo = document.getElementsByName("radsexo") // ao utilizar o getElementsByName se usa o [] com o índicie para determinar qual item será utilizado.
        var idade = ano - anodigitado.value
        var genero = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
        if (sexo[0].checked) {
            genero = "masculino"
            if (idade > 0 && idade <= 3){
                //bebe
                img.setAttribute("src", "imagens/bebeH.png")
            }
            else if (idade <= 12){
                //criança{}
                img.setAttribute("src", "imagens/criancaH.png")
            }
            else if (idade <= 20){
                //adolescente
                img.setAttribute("src", "imagens/adolescenteH.png")
            }
            else if (idade <= 59){
                //adulto
                img.setAttribute("src", "imagens/homem.png")
            }
            else{
                //idoso
                img.setAttribute("src", "imagens/idosoH.png")
            }
        }
        else{
            genero = "feminino"
            if (idade > 0 && idade <= 3){
                //bebe
                img.setAttribute("src", "imagens/bebeM.png")
            }
            else if (idade <= 12){
                //criança{}
                img.setAttribute("src", "imagens/criancaM.png")
            }
            else if (idade <= 20){
                //adolescente
                img.setAttribute("src", "imagens/adolescenteM.png")
            }
            else if (idade <= 59){
                //adulto
                img.setAttribute("src", "imagens/mulher.png")
            }
            else{
                //idoso
                img.setAttribute("src", "imagens/idosoM.png")
            }
        }
        resp.style.textAlign = "center"
        resp.innerHTML = `Você tem ${idade} anos e é do sexo ${genero}! <br>`
        resp.appendChild(img)
    }

}