function parimpar(n){
    if (n == 0) {
        return "0 Não nem par nem ímpar"
    }
    else if (n % 2 == 0){
        return "Par!"
    }
    else{
        return "Impar!"
    }
}

console.log(parimpar(-3))