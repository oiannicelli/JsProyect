var selected_index = -1; //Index of the selected ListCar item

var dataCars = localStorage.getItem("dataCars");//Retrieve the stored data
	dataCars = JSON.parse(dataCars); //Converts string to object
		if(dataCars == null) //If there is no data, initialize an empty array
			dataCars = [];



function ListCar(){
	document.getElementById('tblList').innerHTML ="";
	var datos =" ";
	
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

	for(var i in dataCars){
		var cli = JSON.parse(dataCars[i]);
	  	datos +="<tr>";
		datos += '	<td><img src="edit.png" alt="Edit" "class="btnEdit"  onClick="mEditarCar(\''+i+'\');"/>';
		datos += ' <img src="delete.png" alt="Delete" "class="btnDelete"  onClick="DeleteCar(\''+i+'\');"/> </td>' ;
		datos += "	<td>"+cli.ID+"</td>" ;
		datos += "	<td>"+cli.Name+"</td>" ;
		datos += "	<td>"+cli.Phone+"</td>" ;
		datos += "	<td>"+cli.Email+"</td>" ;
		datos += "	<td>"+cli.Name+"</td>" ;
		datos += "	<td>"+cli.Phone+"</td>" ;
		datos += "	<td>"+cli.Email+"</td>" ;
		datos += "</tr>";
	}
	
	datos +="</tbody>";
	
	//datos += "</table>";
	document.getElementById('tblList').innerHTML =datos;
	document.getElementById("txtOperacion").value = "A";
	document.getElementById("txtID").value="" ;
	document.getElementById("txtName").value = "";
	document.getElementById("txtPhone").value ="" ;
	document.getElementById("txtEmail").value = "";
	console.log('entro en el ListCarar')
}

function AddCar(){
	var car = JSON.stringify({
		ID    : document.getElementById("txtID").value ,
		Name  : document.getElementById("txtName").value ,
		Phone : document.getElementById("txtPhone").value ,
		Email : document.getElementById("txtEmail").value
	});
	dataCars.push(car);
	localStorage.setItem("dataCars", JSON.stringify(dataCars));
	alert("The data was saved.");
	ListCar();
	return true;
}

function EditCar(selected_index){
	alert(selected_index);
	dataCars[selected_index] = JSON.stringify({
		ID    : document.getElementById("txtID").value ,
		Name  : document.getElementById("txtName").value ,
		Phone : document.getElementById("txtPhone").value ,
		Email : document.getElementById("txtEmail").value
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
	alert("Client deleted."+selected_index);
}

function mEditarCar(selected_index){
	var cli = JSON.parse(dataCars[selected_index]);
	document.getElementById("txtID").value=cli.ID ;
	document.getElementById("txtName").value = cli.Name ;
	document.getElementById("txtPhone").value =cli.Phone ;
	document.getElementById("txtEmail").value = cli.Email;
	document.getElementById("txtOperacion").value =selected_index;
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
	for(var i in dataCars){
		dataCars.splice(i-1, 1);
	}
}