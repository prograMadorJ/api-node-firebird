const fs = require('fs');


module.exports = {
    index(req,res) {

        const pathFilename = req.query.caminho_nome_arquivo;
        const data = req.query.conteudo;

        fs.writeFile(`${pathFilename}.txt`, data, function(err) {

            if(err) {
                console.error(err);
                return res.status(500).send('Erro ao tentar salvar o arquivo.');

            }

            console.log("[ API ] :: Arquivo salvo");
            return res.send('Arquivo salvo com sucesso.');
        });
    }
};