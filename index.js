import express from 'express';
import {buscarUfs, BuscarUfPorId, BuscarUfsPorNome} from './servicos/servico.js';

const app = express();

app.get('/ufs', (req, res) => {
    const nomeUF = req.query.busca;
    const resultado = nomeUF ? BuscarUfsPorNome(nomeUF) : buscarUfs();
    if(resultado.length > 0){
        res.json(resultado);
    }else{
        res.status(404).send({"erro": "Nenhuma UF encontrada"});
    }
});

app.get('/ufs/:iduf', (req, res) => { 
    const uf = BuscarUfPorId(req.params.iduf);

    if(uf){
        res.json(uf);
    }else if(isNaN(parseInt(req.params.iduf))){
        res.status(400).send({"erro": "Requisição inválida"});
    }else{
        res.status(404).send({"erro": "UF não encontrada"});
    }
});

app.listen(8080, () => {
    console.log('Servidor iniciado na porta 8080');
});

