import { post, getAll, get, put } from "./getData.js"

const input = document.querySelector("#imagenPrincipal");
const titulo = document.querySelector("#tituloCard");
const texto = document.querySelector("#textoCard");



console.log(get(input, titulo, texto))