import { question } from "readline-sync";

function main(){
    //COMPRAR IPHONE
    const iphone = Number(question('DIGITE O PREÇO DO IPHONE: R$ '))

    //OPÇÃO PAGAMENTO
    const opcao = Number(question('DIGITE A OPÇÃO DE PAGAMENTO (1 A 3): '))

    const selecionar_opcao = opcao_pagamento(iphone, opcao)
    //SAIDA (VALOR C/ OPÇÃO) + economia ou pagaar juros
    console.log(selecionar_opcao)
}

/*
if(selecionar_opcao === 1){
    console.log(`\nPAGAMENTO PIX/ESPÉCIE`)
    console.log(`R$ ${pagamento}`)
    onsole.log(`E o cliente economizou R$ ${iphone - pagamento}`)
}else if(selecionar_opcao === 2){
    console.log(`\nPAGAMENTO CARTÃO DÉBITO`)
    console.log(`R$ ${pagamento}`)
    console.log(`E o cliente economizou R$ ${iphone - pagamento}`)
}else if(selecionar_opcao === 3){
    console.log(`\nPAGAMENTO CARTÃO CRÉDITO`)
    console.log(`O valor final R$ ${pagamento}`)
    console.log(`E o cliente pagou juros de R$ ${juros}`)
}
*/

function opcao_pagamento(iphone, opcao){
    if(opcao === 1){
        const pagamento = iphone * 0.85
        console.log(`\nO CLIENTE PAGOU R$ ${pagamento}`)
        console.log(`E economizou R$ ${iphone - pagamento}`)
    }else if(opcao === 2){
        const pagamento = iphone * 0.90
        console.log(`\nO CLIENTE PAGOU R$ ${pagamento}`)
        console.log(`E economizou R$ ${iphone - pagamento}`)
    }else{
        const entrada = Number(question('\n ENTRADA: R$ '))
        const quantidade_parcelas = Number(question('\n PARCELAS (ATÉ 12x): '))
        const valor_tributavel = iphone - entrada
        const parcela = valor_tributavel/quantidade_parcelas
        const pagamento = valor_tributavel + ((valor_tributavel * (3.99/100)) + ((parcela * 1.5/100) * quantidade_parcelas))
        const juros = (pagamento - valor_tributavel).toFixed(1)
        console.log(`\nO CLIENTE PAGOU R$ ${pagamento}`)
        console.log(`E pagou juros de R$ ${juros}`)
    }
    return opcao_pagamento
}

main()