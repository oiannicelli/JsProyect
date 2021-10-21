let selected_index = -1; //Index of the selected ListCar item

let dataCars = localStorage.getItem("dataCars");//Retrieve the stored data
	dataCars = JSON.parse(dataCars); //Converts string to object
		if(dataCars == null) //If there is no data, initialize an empty array
			dataCars = [];



function ListCar(){
	document.getElementById('tblList').innerHTML ="";
	let datos =" ";
	
	//datos += "<table>" ;
	datos += "<thead>";
	datos +=	"<tr>";
	datos +=	"	<th></th>";
	datos +=	"	<th>Nombre y Apellido</th>";
	datos +=	"	<th>E-mail</th>";
	datos +=	"	<th>Idea del tatuaje</th>";
	datos +=	"	<th>Lugar del cuerpo</th>";
	datos +=	"	<th>Tamaño</th>";
	datos +=	"	<th>Color</th>";
	datos +=	"	<th>Artista preferido</th>";
	datos +=	"</tr>";
	datos +="</thead>";
	datos +="<tbody>";

	for(let i in dataCars){
		let cli = JSON.parse(dataCars[i]);
	  	datos +="<tr>";
		datos += '	<td><img src="./assets/images/edit.png" alt="Edit" "class="btnEdit"  onClick="mEditarCar(\''+i+'\');"/>';
		datos += '<img src="./assets/images/delete.png" alt="Delete" "class="btnDelete"  onClick="DeleteCar(\''+i+'\');"/></td>' ;
		datos += "	<td>"+cli.Nombre+"</td>" ;
		datos += "	<td>"+cli.Email+"</td>" ;
		datos += "	<td>"+cli.Idea+"</td>" ;
		datos += "	<td>"+cli.Lugar+"</td>" ;
		datos += "	<td>"+cli.Tamano+"</td>" ;
		datos += "	<td>"+cli.Color+"</td>" ;
		datos += "	<td>"+cli.Artista+"</td>" ;
		datos += "</tr>";
	}
	
	datos +="</tbody>";
	
	//datos += "</table>";
	document.getElementById('tblList').innerHTML =datos;
	document.getElementById("txtOperacion").value = "A";
	document.getElementById("txtNombre").value="" ;
	document.getElementById("txtEmail").value = "";
	document.getElementById("txtIdea").value ="" ;
	document.getElementById("txtLugar").value = "";
	document.getElementById("txtTamaño").value = "";
	document.getElementById("txtColor").value ="" ;
	document.getElementById("txtArtista").value = "";
	console.log('entro en el ListCarar')
}

function AddCar(){
	let car = JSON.stringify({
		Nombre : document.getElementById("txtNombre").value ,
		Email : document.getElementById("txtEmail").value ,
		Idea : document.getElementById("txtIdea").value ,
		Lugar : document.getElementById("txtLugar").value,
		Tamano : document.getElementById("txtTamaño").value ,
		Color : document.getElementById("txtColor").value ,
		Artista : document.getElementById("txtArtista").value
	});
	dataCars.push(car);
	localStorage.setItem("dataCars", JSON.stringify(dataCars));
	alert("La información se guardo correctamente!");
	ListCar();
	return true;
}

function EditCar(selected_index){
	alert(selected_index);
	dataCars[selected_index] = JSON.stringify({
		Nombre : document.getElementById("txtNombre").value ,
		Email : document.getElementById("txtEmail").value ,
		Idea : document.getElementById("txtIdea").value ,
		Lugar : document.getElementById("txtLugar").value,
		Tamano : document.getElementById("txtTamaño").value ,
		Color : document.getElementById("txtColor").value ,
		Artista : document.getElementById("txtArtista").value
	});//Alter the selected item on the table

	localStorage.setItem("dataCars", JSON.stringify(dataCars));
	//alert("Dato Editado Correctamente")

	ListCar();
	return true;
}

function DeleteCar(selected_index){
	dataCars.splice(selected_index, 1);
	localStorage.setItem("dataCars", JSON.stringify(dataCars));
	ListCar();
	alert("Datos borrados"+selected_index);
}

function mEditarCar(selected_index){
	let cli = JSON.parse(dataCars[selected_index]);
	document.getElementById("txtID").value=cli.Nombre ;
	document.getElementById("txtName").value = cli.Email ;
	document.getElementById("txtPhone").value =cli.Idea ;
	document.getElementById("txtEmail").value = cli.Lugar;
	document.getElementById("txtName").value = cli.Tamano ;
	document.getElementById("txtPhone").value =cli.Color ;
	document.getElementById("txtEmail").value = cli.Artista;
	document.getElementById("txtOperacion").value = selected_index;
}


function GuardarCar(){
	selected_index=document.getElementById("txtOperacion").value ;
	if(selected_index == "A")
		return AddCar();
	if(selected_index >-1)
		return EditCar(selected_index);
	else '' ;
}

function RemoveAllDataCar(){
	for(let i in dataCars){
		dataCars.splice(i-1, 1);
	}
}