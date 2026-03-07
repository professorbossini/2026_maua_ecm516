//JSON: JavaScript Object Notation
//Uma pessoa se chama Maria, tem 21 anos e mora na Rua B, número 50
const pessoa = {
    nome: 'Maria',
    idade: 21,
    endereco: {
        logradouro: 'Rua B',
        numero: 50
    }
}
console.log(pessoa.endereco.logradouro)
console.log(pessoa['endereco']['numero'])
console.log(pessoa.endereco['logradouro'])
console.log(pessoa['endereco'].numero)
console.log(pessoa.endereco)



//Uma pessoa que se chama João e tem 17 anos
// let pessoa = {
//     nome: 'João',
//     idade: 17    
// }
// console.log(pessoa.nome)
// console.log(pessoa['idade'])
// const eAgora = () => {
//     let cont = 1
//     const f1 = () => console.log(cont)
//     cont++
//     const f2 = () => console.log(cont)
//     cont++
//     return {f1, f2}
// }
// const res = eAgora()
// res.f1()
// res.f2()

// function f(idade){
//     let nome = 'João'
//     function g(){
//         console.log(`Meu nome é ${nome} e tenho ${idade} anos.`)
//     }
//     return g
// }
// const res = f(17)
// res()

// function f (funcao){
//     funcao()
// }
// function g(){
//     function outraFuncao(){
//         console.log('Fui criada por g')
//         return () => "A"
//     }
//     return outraFuncao()
// }
// f(1)
// const res = g()
// f(res)
// console.log(res())


// let umaFuncao = function(){
//     console.log('Fui armazenada em uma variável')
//     return () => 'oi'
// }

// umaFuncao()
// function f(funcao){
//     console.log(funcao())
// }
// f(umaFuncao())
//listas/vetores/arrays/arranjos
// const numeros = [1, 2, 3, 4]
// const res = numeros.reduce((ac, v) => ac + v)
// // console.log(res)
// const nomes = ['Ana Maria', 'Antonio', 'Rodrigo', 'Cristina', 'Alex']
// const res = nomes.every(n => n.startsWith("A"))
// const res2 = nomes.some(n => n.startsWith("A"))
// console.log(res)
//[A, A, R, C, A]
// const iniciais = nomes.map(function(nome){return nome.charAt(0)})
// console.log(iniciais)
// const apenasComA = nomes.filter(nome => nome.startsWith('A'))
// console.log(apenasComA)


// const f1 = () => {}
// const f2 = function(){}
// v1 = []
// console.log(v1.length)
// v1[0] = 'abc'
// console.log(v1.length)
// v1[10] = 2.5
// console.log(v1.length)
// console.log(v1)
// for(let i = 0; i < v1.length; i++)
//     console.log(v1[i])
// funções
//function e arrow function
// const eAgora = () => {1}
// const somar = (a, b) =>  a + b


// console.log(somar(2, 3))
// const falarOi = nome => console.log(`Oi, ${nome}` )
// falarOi('Maria')
// const falarOi = () => {console.log('oi')}
// falarOi()
// const triplo = function(n = 5){
//   return 3 * n
// }
// console.log(triplo())
// console.log(triplo(10))
// const dobro = function (n){
//   return 2 * n
// }
// console.log(dobro(6))
// function soma(a, b){
//   return a + b
// }
// const resultado = soma(2, 3)
// console.log(resultado)
// function hello(){
//   console.log(`Oi`)
// }
// hello(undefined)
// function hello(nome){
//   console.log(`Oi, ${nome}`)
// }
// hello('Maria')

//coleções
// v1 = [10, 3] // List <Object> v1 = new ArrayList <>();
// console.log(v1.length)
// v1[0] = 2
// console.log(v1.length)
// v1[1] = "abc"
// console.log(v1.length)
// v1[10] = "João"
// console.log(v1.length)
// console.log(v1)
// for(let i = 0; i < v1.length; i++){
//   console.log(v1[i])
// }


//operadores de comparação por igualdade: == e ===
//null e undefined
// console.log([] == [])
// console.log([] == false)
// console.log(null == undefined)
// console.log(null == null)
// console.log(1 == [1])
// console.log(true == 1)
// console.log(1 === 1)
// console.log(1 === '1')
// console.log(1 == '1')
// console.log(1 === 1)
// console.log(1 == 1)

//coerção implícita e explícita
// const n1 = 2
// const n2 = '3'
// const n3 = n1 + n2
// console.log(n3)
// const n4 = n1 + Number(n2)
// console.log(n4)


// matriz = [[], []]

// List  <List <String > > matriz = new ArrayList <ArrayList <String>>();

// a = 2



// a.concat("b")
// console.log(a)
// console.log(typeof(a))
// String a = "abc";
// console.log(a)
// console.log(typeof(a))
//e o var?
//não use
//içamento (hoisting)
// var idade = 18
// console.log(`Oi, ${nome}`)
// if(idade >= 18){
//   let nome = 'João'
//   console.log("Parabéns, " + nome + ". Você pode dirigir")
// }
// console.log('Até, ' + nome)
// var linguagem = 'Javascript'
// console.log('Aprendendo ' + linguagem)
// var linguagem = 'Java'
// console.log(`Aprendendo ${linguagem}`)


// var c = 2
// c = 3
// console.log(c)
//declarando variáveis
// let a = 2
// console.log(a)
// let passouDeAno = true
// console.log(passouDeAno)
// a = 3
// console.log(a)
// let b
// console.log(b)
// b = 1.5
// console.log(typeof(b))
// console.log(b)
// b = "abc"
// console.log(typeof(b))
// console.log(b)


//declarando constantes
//em Javascript
// const nome = 'José'
// console.log(nome)
// // nome = 'José Silva'
// const idade = 17
// console.log(typeof(idade))

//se fosse Java...
// String nome = "José";
//nome = 1;

// console.log('Hello, World')