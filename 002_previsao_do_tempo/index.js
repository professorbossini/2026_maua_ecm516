// const fatorial = (n) => {
//   if (n < 0) return Promise.reject('Valor não pode ser negativo')
//   let res = 1
//   for(let i = 2; i <= n; i++) res *= i
//   return Promise.resolve(res)
// }

// const chamadaComThenCatch = () => {
//   fatorial(5)
//   .then(res => console.log(`Res: ${res}`))
//   .catch(function(erro){console.log(`Erro: ${erro}`)})

//   fatorial(-5)
//   .then(res => console.log(`Res: ${res}`))
//   .catch(function(erro){console.log(`Erro: ${erro}`)})
// }

// //chamadaComThenCatch()

// const chamadaComAsyncAwait = async () => {
//   try{
//     const f1 = await fatorial(5)
//     console.log(`f1: ${f1}`)
//   }
//   catch(erro){
//     console.log(`Erro: ${erro}`)
//   }
//   try{
//     const f2 = await fatorial(-1)
//     console.log(`f2: ${f2}`)
//   }
//   catch(erro){
//     console.log(`Erro: ${erro}`)
//   }
// }
// chamadaComAsyncAwait()


// async function hello(nome){
//   return `Olá, ${nome}`
// }

// const res = hello('Ana')
// res.then((texto) => console.log(texto))
// console.log("A")
// console.log(res)

//conversar com a api de previsão do tempo, usando async/await
// const axios = require('axios')
// const appid = 'ef0b0973b783e0614ac87612ec04344b'
// const baseURL = 'https://api.openweathermap.org/data/2.5/forecast'
// const q = 'Itu'
// const cnt = 1
// const units = 'metric'
// const lang = 'pt_br'
// const url = `${baseURL}?q=${q}&appid=${appid}&cnt=${cnt}&units=${units}&lang=${lang}`
// axios.get(url)
// .then(res => {
//   console.log(res.data)
//   return res.data
// })
// .then(res => { 
//   console.log(res.list)
//   return res.list
// })
// .then(res => {
//   //mostrar temperatura máxima da primeira previsão do tempo
//   console.log(res[0].main.temp_max )
//   return res
// })
// .then(previsoes => {
//   //iterar sobre a lista aqui
//   for(let previsao of previsoes){
//     //quero exibir a descrição de cada uma
//     console.log(previsao.weather[0].description)
//   }

// })
// console.log('A')