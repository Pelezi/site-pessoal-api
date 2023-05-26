const portfolioRepository = require('../repositories/portfolioRepository');

exports.getPortfolio = async (req, res) => {
    const portfolio = await portfolioRepository.getPortfolio();
    res.json(portfolio);
}

exports.getProjetoById = async (req, res) => {
    const id = parseInt(req.params.id);
    const projeto = await portfolioRepository.getProjetoById(id);
    res.json(projeto);
}

exports.createProjeto = async (req, res) => {
    const projeto = req.body;
    const novoProjeto = await portfolioRepository.createProjeto(projeto);
    res.json(novoProjeto);
}

exports.updateProjeto = async (req, res) => {
    const id = parseInt(req.params.id);
    const projeto = req.body;
    const projetoAtualizado = await portfolioRepository.updateProjeto(id, projeto);
    res.json(projetoAtualizado);
}

exports.deleteProjeto = async (req, res) => {
    const id = parseInt(req.params.id);
    await portfolioRepository.deleteProjeto(id);
    res.json({message: 'Projeto removido com sucesso!'});
}