const bd = require("mongodb");

async function conecta(){
	
	try{
		const uri = await "";
		const cliente = await bd(uri, {ulrNewUrlParse: true, useUnifiedTopology: true});
		const conexion = await cliente.connect()
		
	} catch(err) {
		throw err;
	}
};

module.exports = conecta();