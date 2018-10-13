// Ajax Request

var xhttp = new XMLHttpRequest();


// Exibir Respostas
xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {
		console.log (this.responseText);
	}
};

// GET
function get() {
	xhttp.open("GET", "http://localhost:5000/", true);
	xhttp.setRequestHeader("Content-type", "application/json");
	xhttp.send();
}

// Buscar usuarios
function usuarios() {
	xhttp.open("GET", "http://localhost:5000/usuarios", true);
	xhttp.setRequestHeader("Content-type", "application/json");
	xhttp.send();
}

// Buscar 1 usuario
function usuario(id) {
	xhttp.open("GET", "http://localhost:5000/usuario"+id, true);
	xhttp.setRequestHeader("Content-type", "application/json");
	xhttp.send();
}

// Gravar Usuario
function gravarUsuario(json) {
	xhttp.open("POST", "http://localhost:5000/usuario", true);
	xhttp.setRequestHeader("Content-type", "application/json");
	xhttp.send(json);
}

// Remover Usuario
function removerUsuario(id) {
	xhttp.open("DELETE", "http://localhost:5000/usuario/rm/"+id, true);
	xhttp.setRequestHeader("Content-type", "application/json");
	xhttp.send();	
}

// Teste renderização de HTML com Jinja2
function render() {
	xhttp.open("GET", "http://localhost:5000/teste", true);
	xhttp.setRequestHeader("Content-type", "application/json");
	xhttp.send();	
}