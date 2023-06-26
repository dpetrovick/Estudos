let num = [14,7,30,9,0]
console.log(`O vetor é: ${num}`)

num[5] = 1 // se souber o tamanho do arrey pode indicar a posição
console.log(`O vetor é: ${num}`)

num.push(8) // quando não sabe o tamnho usa o push para colocar no fim do array
console.log(`O vetor é: ${num}`)

num[3] = 25 // em uma posição ja existente, ele muda o valor.
console.log(`O vetor é: ${num}`)

console.log(`O vetor tem ${num.length} elementos`) // mostra quantos elementos tem no array

console.log(`O vetor está ordenado em crescente ${num.sort()}`) // ordena em crescente.OBS da erro com valores maiores de 10. Com string funciona bem.Ele considera a grafía.

num = [5,4,8,6,9,2]
console.log(`O vetor está ordenado em crescente ${num.sort()}`)

console.log(`O valor do elemento na posição "solicitada" é: ${num[3]}`)

console.log(num)
for(let i = 0; i < num.length; i += i){
    console.log(i)
    i += i
}
