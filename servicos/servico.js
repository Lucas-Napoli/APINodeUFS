import colecaoUf from '../dados/dados.js';

export const buscarUfs = () => {
    return colecaoUf;
}

export const BuscarUfsPorNome = (nomeUf) => { 
    return colecaoUf.filter(uf => uf.nome.toLocaleLowerCase().includes(nomeUf.toLocaleLowerCase()));
};

export const BuscarUfPorId = (id) => {
    const idUf = parseInt(id);
    return colecaoUf.find(uf => uf.id === idUf);
}