// criando variaveis
let proprietario = prompt("ola qual e o seu nome?")
let empresa = prompt("qual sera o nome da sua empresa?")
let construcao = prompt("em que cidade voce quer construir sua empresa?")
let gastos = prompt("quanto voce deseja gastar na construcao da sua empresa? dica: tente acima de 15000")
let funcionarios = prompt("quantos funcionarios voce vai contratar para sua empresa?")
let gastosdosfuncionarios = prompt("quanto voce pretende pagar seus funcionarios? atencao: somente acima de 1000") 

// convertendo valores para numero usando *
gastos = gastos * 1
funcionarios = funcionarios * 1
gastosdosfuncionarios = gastosdosfuncionarios * 1

// confirmar o valor do salario dos funcionarios
if(gastosdosfuncionarios >= 1000){
    alert("salario e gastos permitidos. prossiga com a criacao da empresa")

    let nicho = prompt("qual o nicho da sua empresa?")

    // valor total para pagar funcionarios
    let valorfinal = funcionarios * gastosdosfuncionarios

    // cadastro da empresa
    alert(`parabens! aqui esta o cadastro da empresa: ${empresa}`)
    alert(`
============ sua empresa ============
nome do proprietario: ${proprietario}
nome da empresa: ${empresa}
nicho da empresa: ${nicho}
cidade escolhida para construcao: ${construcao}
gastos para construcao: ${gastos}
quantidade de funcionarios: ${funcionarios}

salario dos funcionarios: ${gastosdosfuncionarios}

total a pagar aos funcionarios: ${valorfinal}
`)

    // relatorio de metas
    alert("otimo, tudo pronto! agora, quais sao as suas metas para o lucro da empresa em 2027?")

    let lucro27 = prompt("qual sera o lucro da empresa?")
    let manter = prompt("quanto voce pretende gastar para manter a estrutura da empresa?")
    let propaganda = prompt("quanto voce pretende gastar em propagandas?")
    let funcionarios2 = prompt("voce pretende demitir funcionarios? (sim/nao)")
    let parserias = prompt("voce pretende fazer alguma parceria? (sim/nao)")

    // switch dos funcionarios
    switch(funcionarios2.toLowerCase()){
        case "sim":
            funcionarios2 = "sim"
            break
        case "nao":
            funcionarios2 = "nao"
            break
        default:
            funcionarios2 = "nao"
    }

    // switch das parcerias
    switch(parserias.toLowerCase()){
        case "sim":
            parserias = "sim"
            break
        case "nao":
            parserias = "nao"
            break
        default:
            parserias = "nao"
    }

    // criando o relatorio
    alert("otimo, aqui esta o seu relatorio:")
    alert(`
========== relatorio para o futuro ==========
lucro esperado: ${lucro27}
para manter a empresa: ${manter}
investimento em propaganda: ${propaganda}
demitir funcionarios: ${funcionarios2}
fazer possiveis parcerias: ${parserias}
`)

}else{
    alert("voce nao pode dar esse salario ou os gastos sao insuficientes! valor minimo para salario: 1000, gasto minimo para construcao: 15000.")
}



