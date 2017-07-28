    const produto = {
        nome: 'caneta preta',
        preco: 1.90,
        desconto: 0.05
    }
    function clone(objeto) {
        return { ...objeto}

    }

    const novoProduto = clone(produto)
    novoProduto.nome = 'caneta azul'

    console.log(produto)
    console.log(novoProduto)