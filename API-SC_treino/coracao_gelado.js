import { question } from "readline-sync";

function main(){
    const nome = question("Nome do Usuário: ")
    const idade = Number(question("Sua idade: "))

    const fcm = frequencia_cardiaca_maxima(idade)
}

function frequencia_cardiaca_maxima(idade){
    const resultado = 220 - idade
}
main()