
function validaForm(){
	let validaCod = document.forms["cadastrar"]["codigo"].value;
	let validaAge = document.forms["cadastrar"]["agenda"].value;
	let validaPet = document.forms["cadastrar"]["pete"].value;
	let validaTut = document.forms["cadastrar"]["tutor"].value;
	let validaEma = document.forms["cadastrar"]["email"].value;
	let validaTel = document.forms["cadastrar"]["tele"].value;
	let validaRad = document.forms["cadastrar"]["radio"].value;
	let validaRest = document.forms["cadastrar"]["restri"].value;
	

	if (validaCod == ""){
		alert("O código deve ser preenchido!");
		return false;
	}
	if (validaAge == ""){
		alert("A data deve ser preenchido!");
		return false;
	}
	if (validaPet == ""){
		alert("O titulo deve ser preenchido!");
		return false;
	}
	if (validaTut == ""){
		alert("O nome do Diretor deve ser preenchido!");
		return false;
	}
	if (validaEma == ""){
		alert("O nome do ator/atriz principal deve ser preenchido!");
		return false;
	}
	if (validaTel == ""){
		alert("A nota IMDB deve ser preenchido!");
		return false;
	}
	if (validaRad == ""){
		alert("O gênero deve ser marcado!");
		return false;
	}

	if (validaRest == ""){
		alert("O email deve ser preenchido!");
		return false;
	}
}

function insere(){
	let codi = document.forms["cadastrar"]["codigo"].value;
	let pete = document.forms["cadastrar"]["pete"].value;
	let tuto = document.forms["cadastrar"]["tutor"].value;
	let agen = document.forms["cadastrar"]["agenda"].value;
	let emai = document.forms["cadastrar"]["email"].value;
	let tele = document.forms["cadastrar"]["tele"].value;
	let rest = document.forms["cadastrar"]["restri"].value;
	let radi = document.forms["cadastrar"]["radio"].value;
	
	
		

	let inserir = window.document.getElementById("inserirTabela");
	inserir.innerHTML = `<th scope="row">${codi}</th>`;
	inserir.innerHTML +=	`<td>${pete}</td>`;
	inserir.innerHTML +=	`<td>${tuto}</td>`;
	inserir.innerHTML +=	`<td>${agen}</td>`;
	inserir.innerHTML +=	`<td>${emai}</td>`;
	inserir.innerHTML +=	`<td>${tele}</td>`;
	inserir.innerHTML +=	`<td>${rest}</td>`;
	inserir.innerHTML +=	`<td>${radi}</td>`;
	

}