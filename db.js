const sql = require('mssql');

var config = {
    user: 'QUR3n5qk4F33',
    password: 'B33vdHtRR7su8B3T72',
    server: 'logistikgo.database.windows.net', 
    database: 'LogistikGO_XD',
 	pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: true // Use this if you're on Windows Azure
    }
}


async function getPedido (idPedido) {

	try {

       	var _pool = await new sql.ConnectionPool(config).connect()

       	var _result = await _pool.query`select * from xd_pedidos where XD_IDPedido = ${idPedido}`;

        // console.dir(result2.recordset[0].Delivery);

        return _result.recordset[0];

   
    } catch (err) {
    	console.log(err);      
        // ... error checks
    }
}


async function getUsuario (idUsuario) {

	try {

       	var _pool = await new sql.ConnectionPool(config).connect();

       	var _result = await _pool.query`select * from usuarios where IDUsuario = ${idUsuario}`;

        // console.dir(result2.recordset[0].Delivery);

        return _result.recordset[0];

   
    } catch (err) {
    	console.log(err);      
        // ... error checks
    }
}



module.exports = {
	getPedido,
	getUsuario
}; 