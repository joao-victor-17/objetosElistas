// EX1

const perifericos = [
    "Teclado Mecânico", "Mouse Gamer", "Headset 7.1",
    "Monitor Gamer Curvo", "Mousepad de Vidro"
]

perifericos[2] = "Webcam Full HD";

for (let contador = 0; contador < 5; contador = contador + 1) {
    console.log("Posição " + contador + ": " + perifericos[contador]);
}

// EX2

const computador = {
    patrimonio: "PAT00142",
    processador: "AMD Ryzen",
    memoriaRAM: 32,
    emManutencao: true,
};
console.log("O computador de patrimônio " + computador.patrimonio + " possui processador " + computador.processador + " e " + computador.memoriaRAM + "GB de RAM.");

// EX3

const carrinho = [
    { nome: "Teclado Mecânico", preco: 219, quantidade: 1 },
    { nome: "Monitor Gamer Curvo", preco: 1400, quantidade: 1 },
    { nome: "Mousepad de Vidro", preco: 130, quantidade: 1 },
    { nome: "Mouse Gamer", preco: 150, quantidade: 1 },
]

let valorTotal = 0;

for (let contador = 0; contador < carrinho.length; contador = contador + 1) {
    valorTotal = valorTotal + carrinho[contador].preco * carrinho[contador].quantidade;
}

console.log("Valor total da compra: R$ " + valorTotal);

// EX4

const usuario = {
    nome: "Marquin do Abacate",
    cargo: "Inspetor de Qualidade",
    permissoes: ["inpeção de peças", "relatorios", "Analise de produção"]
}

console.log("Nome" + usuario.nome);
console.log("Cargo" + usuario.cargo);

for (let contador = 0; contador < 4; contador = contador + 1) {
    console.log("- Acesso liberado: " + usuario.permissoes[contador]);

    if (usuario.permissoes[contador] === "admin") {
        console.log("Atenção: Usuário com privilégios totais!");
    }
}

// EX5

const chamados = [
    {
        id: 17,
        cliente: "Manel",
        resolvido: false,
        historico: ["Chamado aberto", "Técnico atribuído", "Aguardando peça"]
    },
    {
        id: 11,
        cliente: "Sebastião",
        resolvido: true,
        historico: ["Chamado aberto", "Técnico atribuído", "Problema resolvido"]
    },
    {
        id: 77,
        cliente: "Eustaquio",
        resolvido: false,
        historico: ["Chamado aberto", "Em análise"]
    }
];

for (let i = 0; i < chamados.length; i = i + 1) {

    if (chamados[i].resolvido === false) {
        console.log("ID: " + chamados[i].id);
        console.log("Cliente: " + chamados[i].cliente);
        console.log("Histórico:");

        for (let j = 0; j < chamados[i].historico.length; j = j + 1) {
            console.log("- " + chamados[i].historico[j]);
        }

        console.log("");
    }
}