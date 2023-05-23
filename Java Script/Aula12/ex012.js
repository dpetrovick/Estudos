function saudacao() {
    var txthora = document.getElementById("txthr")
    var resp = document.getElementById("resp")
    var hora = Number(txthora.value)
    var difhr = hora - 24

    if(hora >= 0 && hora < 12) {
        resp.innerHTML = `<br>Agora são: ${hora}hr, por isso te dou BOM DIA!!`
    }
    else if (hora >= 12 && hora < 18) {
        resp.innerHTML = `<br>Agora são: ${hora}hr, por isso te dou BOA TARDE!!`
    }
    else if (hora >= 18 && hora <= 23) {
        resp.innerHTML = `<br>Agora são: ${hora}hr, por isso te dou BOA NOITE!!`
    }
    else if (hora == 24) {
        resp.innerHTML = `<br>Agora são: ${hora}hr, por isso te dou BOM DIA!!`
    }
    else {
        resp.innerHTML = `<br>Você digitou ${hora}hr, mas o dia só tem 24 horas! Aí tem ${difhr}hr a mais!`
    }

}
   