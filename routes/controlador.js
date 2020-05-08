const express = require("express");
const controlador = express.Router();

const handlers_ln = require("../lib/handlers/handlers_ln.js");

controlador.get("/altaUsuario", handlers_ln.muestraAltaUsuario);

controlador.get("/usuarioDisponible/:usuario", handlers_ln.usuarioDisponible);

module.exports = controlador;