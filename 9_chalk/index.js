const chalk = require('chalk')

const nota =2

if(nota>=7){
    console.log(chalk.green("Parabéns! Você foi aprovado!"))
}else{
    console.log(chalk.bgRed.black("Parabéns! Você foi reprovado!"))
}