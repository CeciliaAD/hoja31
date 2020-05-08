const bd = require("mariadb");

exports.muestraUsuarios = async ()=>{
	let conn;
	try{
		conn = await require("../conn.js");
		var datos = conn.query("SELECT usuario FROM usuarios");
		return datos;
		
	} catch(err) {
		throw err;
	} finally {
		if (conn) {
			conn.end();
		}
	}
}


