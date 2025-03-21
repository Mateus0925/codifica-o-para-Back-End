const minimist = require ('minimist')

const args = minimist(process.argv.slice(2))

console.log(args)

const nome = args['nome']
const profisssao = args['profissao']

console.log(nome, profisssao)

console.log(`O nome dele é ${nome} e a profissão é ${profisssao}`)