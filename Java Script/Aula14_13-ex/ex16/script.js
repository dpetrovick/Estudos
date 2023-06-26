function contar(){
    const inicio = document.querySelector("#numInicial")
    const final = document.querySelector("#numFinal")
    const passo = document.querySelector("#numPasso")
    const resp = document.querySelector("#resp")

    if (inicio.value.length == 0 || final.value.length == 0 || passo.value.length == 0){
        alert("Erro! Não podem haver campos em branco. Preencha todos");
        resp.innerHTML = "Impossível contar"
    }
    else{
       resp.innerHTML = "A resposta é: <br>";
       ini = Number(inicio.value);
       fim = Number(final.value);
       pas = Number(passo.value);
       
       if (pas == 0){
        alert("Passo não pode ser 0. Será contado a partir do passo '1'!")
        pas = 1
        resp.innerHTML = " Passo 0 substituíram pelo passo 1 <br>"
       }
       
       if (ini < fim){
        for(let cont = ini; cont <= fim; cont += pas){
        resp.innerHTML += ` ${cont} \u{1f449}`
        }
       }
       else{
        for (let cont = ini; cont >= fim; cont -= pas){
            resp.innerHTML += ` ${cont} \u{1f449}`
        }
       }
       resp.innerHTML += `\u{1f3c1}` 
    }

}