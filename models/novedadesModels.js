var pool = require('./database');

async function getNovedades() {
    var query = "SELECT * FROM novedades ORDER BY id DESC";
    var rows = await pool.query(query);
    return rows;
}

async function insertNovedades(obj) {
    try {
        var query = "INSERT INTO novedades SET ?";
        var rows = await pool.query(query, [obj]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = { getNovedades, insertNovedades };
