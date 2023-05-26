const informacoesRepository = require('../repositories/informacoesRepository');

exports.getInformacoes = async (req, res) => {
    const informacoes = await informacoesRepository.getInformacoes();
    res.json(informacoes);
}

exports.createInformacoes = async (req, res) => {
    const informacoes = req.body;
    const novaInformacoes = await informacoesRepository.createInformacoes(informacoes);
    res.json(novaInformacoes);
}

exports.updateInformacoes = async (req, res) => {
    const informacoes = req.body;
    const informacoesAtualizada = await informacoesRepository.updateInformacoes(informacoes);
    res.json(informacoesAtualizada);
}

exports.deleteInformacoes = async (req, res) => {
    await informacoesRepository.deleteInformacoes();
    res.json({message: 'Informações removidas com sucesso!'});
}