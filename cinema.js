/*4) Você vai assistir a um filme no cinema e decide comprar algumas  guloseimas antes de entrar para a sessão. O cinema oferece pipoca por 6 reais a unidade, chocolate por 3 reais a unidade e refrigerante por 8,50 reais a unidade. Faça um programa que pergunte quantos tipos de guloseimas você vai querer (1, 2 ou 3) e que após isso pergunte qual a guloseima e a quantidade (unidades). Ao final deve ser mostrado o valor total. Exemplo: Digitei que quero 2 guloseimas, o programa me pergunta qual guloseima, eu digito “pipoca” e em seguida ele pergunta a quantidade, eu digito 2. Em seguida ele pergunta qual a segunda guloseima, eu digito refrigerante, quantidade 1. Nesse caso o total seria 2 x 6,00 + 1 x 8,50 = R$20,50.*/

let pipoca = 6
let chocolate = 3
let refrigerante = 8.5
let soma = 0

let tipos = Number(prompt("quantos tipos de guloseimas você quer?"))

for (let i=1; i <= 3; i++) {

    let guloseima = prompt(`qual a guloseima número ${i}?`)
    let quantidade = Number(prompt(`qual a quantidade da guloseima número ${i}?`))

        if (guloseima === 'pipoca'){

            soma += (pipoca * quantidade)

        } 
        
        if (guloseima === 'chocolate'){

            soma += (chocolate * quantidade)

        } 
        
        if (guloseima === 'refrigerante') {

            soma += (refrigerante * quantidade)

        }

}

alert(`O valor total a pagar é de R$${soma}.`)

