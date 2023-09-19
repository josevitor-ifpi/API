import { question } from "readline-sync";

function main(){
    //entrada
    const nota1 = Number(question('\nNota 1: '))
    const nota2 = Number(question('\nNota 2: '))

    
//processamento/saida
    const resultado = media(nota1, nota2)

    if(resultado >= 7){
        console.log(`\nAPROVADO`)
    }else{
        const nota_final = Number(question('\nNota final: '))
        const media_final = media(resultado, nota_final)      
        const aprovacao = verificar_media_final(media_final)
        console.log(aprovacao)
    }
}
//features


function media(nota1, nota2){
    const calculo_media = (nota1 + nota2)/ 2
    return calculo_media
}


function verificar_media_final(media_final){
    if(media_final >= 5){
        return `\nAPROVADO!`
    }else{
        return `\nREPROVADO`
    }
}
main()