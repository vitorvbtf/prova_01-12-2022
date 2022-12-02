let scanf = require('scanf');

const produtos = [
    {
        nome: "Notebook",
        categoria: "Eletrônico",
        valor: 1999.99
    },
    {
        nome: "Impressora",
        categoria: "Eletrônico",
        valor: 999.99
    },
    {
        nome: "Caneta BIC",
        categoria: "Escolar",
        valor: 0.50
    },
    {
        nome: "Lapiseira Pentel",
        categoria: "Escolar",
        valor: 7.50
    },
]


function listar() {
    produtos.forEach(p => {
        console.log(p)
    })
}

function listar_por_categoria(categoria) {
    produtos.forEach(p => {
        if (categoria == p.categoria) {
            console.log(p) }
    })
}
function listar_por_valor(valor_maximo) {
    produtos.forEach(p => {
        if (valor_maximo == p.valor) {
            console.log(p) }
    })
}

console.log(listar_por_categoria("Celulares"))
console.log(listar_por_valor("2000"))
