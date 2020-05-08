const handlers_mod = require("./handlers_mod.js");
const path = require("path");

exports.muestraAltaUsuario = (req, res)=>{
	res.sendFile("formularioAlta.html", {root: path.join(__dirname, "../../public")});
}

exports.usuarioDisponible = async (req, res)=>{
	let usuariosBd = await handlers_mod.muestraUsuarios();
	let encontrado = false;
	for (let usuario of usuariosBd) {

		if (usuario.usuario==req.params.usuario){
			encontrado=true;
			break;
		}
	}
	res.send({encontrado: encontrado});

}

exports.atiende404 = (req, res)=>{
	//let url = "http://" + req.hostname + ":" + port + req.path;
	let url = `${req.protocol}://${req.hostname}:${req.app.get("port")}${req.path}`
	res.status(404);
	res.render("404", {url: url});
}

exports.atiende500 = (err, req, res, next)=>{
	res.status(500);
	res.render("500",{error : err.message});
}