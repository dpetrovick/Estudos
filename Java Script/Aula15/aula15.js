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
for(let i = 0; i < num.length; i++){
  console.log(num[i]);
}
// a de cima é exibe cada valor em uma linha diferente. O de baixo exibe na mesma linha.
let resultado = ""
for(let i = 0; i < num.length; i++){
  resultado += ` ${num[i]} `; // <=> resultado = resultado + ` ${num[i]} `;
}
console.log(resultado)


for(let i in num){ // forma simplificada usada APENAS PARA ARRAY)
  console.log(num[i])
}
let resultado2 = ""
for(let i in num){
  resultado2 += ` ${num[i]} `
}
console.log(resultado2)

let pos = num.indexOf(2)
if( pos == -1){
  console.log(`O valor não existe no vetor`)
}
else{
  console.log(`O valor do indice onde o numero digitado está é: ${pos}`)
}