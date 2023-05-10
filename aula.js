// 1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

// Média = (nota 1 + nota 2 + nota 3) / 3;

// Classificação:
// - Média menor que 5, reprovação;
// - Média entre 5 e 7, recuperação;
// - Média acima de 7, passou de semestre;

function calcularMediaAluno(nota1, nota2, nota3){
    const mediaAluno = (nota1 + nota2 + nota3) / 3

    return mediaAluno
}

const media = calcularMediaAluno(4, 5, 9)

function classificaoAluno(media){
    if(media > 7){
        console.log("Aluno passou de semestre")
    } else if (media >= 5 && media <= 7){
        console.log("Aluno em recuperação")
    } else {
        console.log("Aluno foi reprovado")
    }
}

classificaoAluno(media)

// 2) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 

// Formula do IMC:
// IMC = peso / (altura * altura)

// Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

// IMC em adultos Condição:
// - Abaixo de 18.5 Abaixo do peso;
// - Entre 18.5 e 25 Peso normal;
// - Entre 25 e 30 Acima do peso;
// - Entre 30 e 40 Obeso;
// - Acima de 40 Obsesidade Grave;

const peso = Number(prompt("Insira seu peso:"))
const altura = Number(prompt("Insira sua altura:"))

function calcularImc(peso, altura){
    return peso / (altura * altura)
}

const imc = calcularImc(peso, altura)

function classificarImc(imc){
    if (imc > 40){
        console.log("Obesidade Grave")
    } else if (imc >= 30 && imc < 40){
        console.log("Obeso")
    } else if (imc >= 25 && imc < 30){
        console.log("Acima do peso")
    } else if (imc >= 18.5 && imc < 25){
        console.log("Peso normal")
    } else if (imc < 18){
        console.log("Abaixo do peso")
    }
}

classificarImc(imc)

// 3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
// Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

// Código Condição de pagamento:
// - À vista Débito, recebe 10% de desconto;
// - À vista no Dinheiro ou PIX, recebe 15% de desconto;
// - Em duas vezes, preço normal de etiqueta sem juros;
// - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;

const preçoNormal = 55;

const escolhaDePagamento = Number(prompt("Escolha sua Forma de Pagamento: 1 - Débito, 2 - Dinheiro, 3 - Pix, 4 - Em 2x, 5 - Acima de 2x"))

function formaDePagamento(codigo){
    if(codigo === 1){
        return "Débito"
    } else if (codigo === 2){
        return "Dinheiro"
    } else if (codigo === 3){
        return "Pix"
    } else if (codigo === 4){
        return "Em 2x"
    } else if (codigo === 5) {
        return "Acima de 2x"
    } else {
        return "Escolha uma forma válida de pagamento."
    }
}

const modoDePagamento = formaDePagamento(escolhaDePagamento)

function calculoPagamento(preçoNormal, condiçaoPagamento){
    if(condiçaoPagamento === "Débito"){
        const desconto = preçoNormal * (10 / 100)
        console.log(preçoNormal - desconto)
    } else if (condiçaoPagamento === "Dinheiro" || "Pix"){
        const desconto = preçoNormal * (15 / 100)
        console.log(preçoNormal - desconto)
    } else if (condiçaoPagamento === "Em 2x"){
        console.log(preçoNormal)
    } else if (condiçaoPagamento === "Acima de 2x"){
        const valorDeAcrescimo = (10 / 100) * preçoNormal
        console.log(preçoNormal + valorDeAcrescimo)
    }
}

calculoPagamento(preçoNormal, modoDePagamento)


// Extra: forma de calcular acréscimo de juros

function incrementarJuros(valor, percentualJuros){
    const valorDeAcrescimo = (percentualJuros / 100) * valor;

    return valor + valorDeAcrescimo;
}
    
console.log(incrementarJuros(100, 15))