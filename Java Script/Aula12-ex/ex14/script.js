function carregar() {
    var msg = document.getElementById("msg")
    var img = document.getElementById("manha")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas!`
    if (hora >= 0 && hora < 12) {
        img.src = "imagens/manha.png"
        document.body.style.background = "#f5c528"
    }
    else if (hora >= 12 && hora < 18){
        img.src = "imagens/tarde.png"
        document.body.style.background = "#c75306"
    }
    else {
        img.src = "imagens/noite.png"
        document.body.style.background = "#010135"
    }
}