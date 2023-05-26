const { pool } = require('../config/db');

exports.getPortfolio = async () => {
    const result = await pool.query('SELECT * FROM portfolio');
    return result.rows;
}

exports.getProjetoById = async (id) => {
    const result = await pool.query('SELECT * FROM portfolio WHERE id = $1', [id]);
    return result.rows[0];
}

exports.createProjeto = async (projeto) => {
    const result = await pool.query(`
        INSERT INTO portfolio (title, description, link, image) 
        VALUES ($1, $2, $3, $4) 
        RETURNING *`,
        [projeto.title, projeto.description, projeto.link, projeto.image]
    );
    return result.rows[0];
}

exports.updateProjeto = async (id, projeto) => {
    const result = await pool.query(`
        UPDATE portfolio 
        SET title = $1, description = $2, link = $3, image = $4
        WHERE id = $5
        RETURNING *`,
        [projeto.title, projeto.description, projeto.link, projeto.image, id]
    );
    return result.rows[0];
}

exports.deleteProjeto = async (id) => {
    await pool.query('DELETE FROM portfolio WHERE id = $1', [id]);
}