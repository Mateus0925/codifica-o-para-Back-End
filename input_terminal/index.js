const readlie = require("readline").createInterface({
    input:process.stdin,
    output:process.stdout
})

readlie.question('Qual sua linguagem de programação favorita?', (language)=>{
    if (language === "python") {
        console.log("Linguagem de homem!")
    }else{
        console.log(`Minha linguagem de programação é ${languagem}`)
    }
    readlie.close
});