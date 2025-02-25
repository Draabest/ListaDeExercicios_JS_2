function jurosSimples(capital, taxa, tempo){

    return capital + (capital * taxa * tempo)
}

function jurosCompostos (capital, taxa, tempo){

    return capital * Math.pow((taxa + 1), tempo)
}

let capital = 10000
let taxa = 0.10
let tempo = 12

console.log("Montante com Juros Simples : $" + jurosSimples(capital, taxa, tempo).toFixed(2))
console.log("Montante com juros Compostos : $" + jurosCompostos(capital, taxa, tempo).toFixed(2))