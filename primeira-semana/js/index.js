console.log("Hello seu otario")
console.error("Tá errado")
console.warn("Se liga irmão ta tudo errado")


//variaveis
//no let ele nao sabe qual tipo é a variavel
//var primeira
//let segunda
//const terceira

//so a let, javasript trabalha com ponto flutuante

let x = 10
const n = "É o Gabs"
console.log(n)

if(true){
    let x = 20
}

console.log(x)

//tipos de dados 
const nx = 10
console.log(nx)
console.log(typeof nx)
num = 3.30

console.log(num)


//bool 
const is_valid = true //or 1 for true or 0 for false, da pra usar em condições
console.log(is_valid)

//null
const nulo = null
console.log(nulo)
console.log(typeof nulo)

//undefined
let nada
console.log(nada)
console.log(typeof nada)

//array conjunto de dados sequenciados, encadeados. Não precisa ser sor um valor
//podem ser numeros, letras.


const linguagens = ['to fudido','sou foda','é o bixo']
console.log(linguagens[0])
console.log(typeof linguagens[0])

//objetos literais 

const user = {
    username: "Jorge", 
    password: "123",
    age: "43",
    name: "Lil Jorge"
}
console.log(user.username, user.password)
let text = 'minha vida é foda'
//procurar dentro de uma string
console.log(text.indexOf('abc'))
console.log(text.charAt(0)) 
console.log(text.slice(2,10))

const chars = ['vida', 'morte', 'tempo']
console.log(chars.length)
console.log(chars[chars.length-1])
chars[3] = 'F'
chars.pop()
chars.shift('vida')
console.log(chars)