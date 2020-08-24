//*Os leões baios são animais territoriais. Seu território compreende cerca de 320km² por indivíduo, exceto quando formam casais, nesse caso o casal costuma dominar uma área de 400km², juntos. Considerando que existam 9 fêmeas e 5 machos em determinada reserva ambiental. Elaborar um programa no qual você deve digitar quantos casais (dados de pesquisa de campo) existem dentre esse total e mostrar na tela a soma geral de área dominada, incluindo todos indivíduos.

let casais Number(prompt("Quantos casais de leão baio existem dentro do grupo?"))
let individuais = 14 - (casais*2)
let areaporcasal = 400
let areaindividual = 320

let total = (individuais * areaindividual) + (casais * areaporcasal)

alert(`O número de casais é ${casais} e o de solteiros é ${individuais}.`)
alert(`O total de área dominada pelo grupo é de ${´individuais´} km quadrados.`)
