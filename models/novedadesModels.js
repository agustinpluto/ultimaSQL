var pool = require('./database');

async function getNovedades() {
    var query = "SELECT * FROM novedades ORDER BY id DESC";
    var rows = await pool.query(query);
    return rows;
}

async function insertNovedades(obj) {
    try {
        var query = "INSERT INTO novedades SET ? ";
        var rows = await pool.query(query, [obj]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function deleteNovedades(id) {
    var query = "DELETE FROM novedades WHERE id = ?";
    var rows = await pool.query(query, [id]);
    return rows;
}

async function getNovedadesById(id) {
    var query = "SELECT * FROM novedades WHERE id = ?";
    var rows = await pool.query(query, [id]);
    return rows[0];
}

async function updateNovedades(obj, id) {
    try {
        var query = "UPDATE novedades SET ? WHERE id = ?";
        var rows = await pool.query(query, [obj, id]);
        return rows;
        } catch(error) {
            throw error;
        }
    }

module.exports = { getNovedades, insertNovedades, deleteNovedades, getNovedadesById, updateNovedades };
