async function usuarioDisponible(){
	let usuario = this.value;
	let resultado = await fetch(`http://localhost:3000/usuarioDisponible/${usuario}`);
	let resultadoJson = await resultado.json(); 
	let listaOpciones = document.getElementById("listaOpciones");
		if(listaOpciones){
			listaOpciones.remove();
		}
	if (!resultadoJson.encontrado){

		document.getElementById("botonSubmit").removeAttribute("disabled");
	} else {
		window.alert("El usuario que has intentado registrar ya está siendo utilizado. Puedes escoger ecoger una de nuestras sugerencias o crear uno nuevo.")
		document.getElementById("botonSubmit").setAttribute("disabled", true);
		let alternativas = [];
		while (alternativas.length<3) {
			let posibleAlternativa = `${usuario}` +Math.floor(Math.random()*1000+1);
			let resultado = await fetch(`http://localhost:3000/usuarioDisponible/${posibleAlternativa}`);
			let resultadoJson = await resultado.json(); 
			if(!resultadoJson.encontrado){
				alternativas.push(posibleAlternativa);
			}
			//alternativas.push(`${usuario+id_apellido.value}`+Math.floor(Math.random()*1000+1));
		}

		let listaOpciones = document.createElement("ul");
		listaOpciones.setAttribute("id", "listaOpciones");
		this.parentNode.appendChild(listaOpciones);
		let elementosLista = '';
		for (let i=0; i<alternativas.length; i++){
			elementosLista += `<li class="alternativas"><a href="#">${alternativas[i]}</a></li>`;
		}
		listaOpciones.innerHTML = elementosLista;
		let alternativasLi = document.getElementsByClassName("alternativas");
		for (let i=0; i<alternativasLi.length; i++){
			alternativasLi[i].addEventListener("click", (e)=>{
				document.getElementById("id_usuario").value = e.target.innerText;
				document.getElementById("botonSubmit").removeAttribute("disabled");
				let listaOpciones = document.getElementById("listaOpciones");
				if(listaOpciones){
					listaOpciones.remove();
				}
			})
		}
	}
}


document.getElementById("id_usuario").addEventListener("change", usuarioDisponible);