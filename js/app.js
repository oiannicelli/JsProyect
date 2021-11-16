// 3° Leer todos los ID del tienda.html y carrito.html
const cards = document.getElementById('cards')
const items = document.getElementById('items')
const footer = document.getElementById('footer2')
const templateCard = document.getElementById('template-card').content
const templateFooter = document.getElementById('template-footer').content
const templateCarrito = document.getElementById('template-carrito').content

// 5° ??
const fragment = document.createDocumentFragment()

// 8° Declaro la COLECCION DE OBJETOS para el carrito
let carrito = {}

//////////////////////////////////////////////////////////////

// 2° Leer todo el documento y ejecutar una accion...:
document.addEventListener('DOMContentLoaded', () => {

	// llamamos a la constante del JSON declarada abajo
	fetchData()
})

//////////////////////////////////////////////////////////////

// 6° BOTON RESERVAR - Leo el elemento y le asigno una accion
cards.addEventListener('click', e => {

	// Funcion agregar al carrito (punto 7°)
	addCarrito(e) 
})

//////////////////////////////////////////////////////////////

// 1° Leer los productos/datos del JSON
const fetchData = async () => {

	// hacemos la peticion de los datos
	try {
		const res = await fetch("./data/productos.json")

		// guardamos los datos de la peticion
		const data = await res.json()

		// guardamos los datos en la funcion para mostrar los productos
		mostrarProductos(data)
	}
	catch (error) {
		
	}
}

//////////////////////////////////////////////////////////////

// 4° Declaro una funcion para mostrar cada producto/card
const mostrarProductos = data => {
	data.forEach(producto => {

		// Accedemos a la estructura del HTML y agregamos los datos de cada producto en el JSON
		templateCard.querySelector('img').setAttribute("src", producto.imagen)
		templateCard.querySelector('h6').textContent = producto.titulo
		templateCard.querySelector('p').textContent = producto.tamaño
		templateCard.querySelector('h3').textContent = producto.precio
		templateCard.querySelector('.btn').dataset.id = producto.id

		// ???
		const clone = templateCard.cloneNode(true)
		fragment.appendChild(clone)
	})

	// Muestro la info del fragment
	cards.appendChild(fragment)
}

//////////////////////////////////////////////////////////////

// 7° Declaro una funcion agregar al carrito
const addCarrito = e => {
	if (e.target.classList.contains('btn')) {

		// guardo la informacion del objeto para agregar luego al carrito en el punto 9°
		setCarrito(e.target.parentElement)
	}

	// Detiene cualquier otro evento del contenedor padre
	e.stopPropagation()
}

//////////////////////////////////////////////////////////////

// 9° CARRITO Declaro la funcion que recibe el objeto con todos los datos al carrito
const setCarrito = objeto => {

	// Declaro el objeto con todos los datos
	const producto = {
		id: objeto.querySelector('.btn').dataset.id,
		titulo: objeto.querySelector('h3').textContent,
		precio: objeto.querySelector('h6').textContent,
		cantidad: 1
	}

	// si aumenta la cantidad de un producto...
	if(carrito.hasOwnProperty(producto.id)) {
		// aumenta la cantidad del producto (no repito el producto otra vez)
		producto.cantidad = carrito[producto.id].cantidad + 1
	}

	// pusheo el producto con sus datos al carrito:
	carrito[producto.id] = {...producto}

	// pusheo el carrito cuando agrego un elemento/produdcto:
	mostrarCarrito()
}

//////////////////////////////////////////////////////////////

// 10° Declaro una funcion para mostrar el carrito (similar a punto 4)
const mostrarCarrito = () => {

	// Reinicio el carrito para que no se sobreescriba la info
	items.innerHTML = ''

	// Declaro la coleccion de objetos:
	Object.values(carrito).forEach(producto => {

		// Accedemos a la estructura del HTML y agregamos los datos de cada producto
		templateCarrito.querySelector('th').textContent = producto.id
		templateCarrito.querySelectorAll('td')[1].textContent = producto.titulo
		templateCarrito.querySelectorAll('td')[0].textContent = producto.cantidad
		templateCarrito.querySelector('.btn-info').dataset.id = producto.id
		templateCarrito.querySelector('.btn').dataset.id = producto.id
		templateCarrito.querySelector('span').textContent = producto.cantidad * producto.precio

		// Clonar ???
		const clone = templateCarrito.cloneNode(true)
		fragment.appendChild(clone)
	})

	// Muestro la info del fragment
	items.appendChild(fragment)

	// Mostrar la info del footer
	mostrarFooter()
}

//////////////////////////////////////////////////////////////

// 11° Creo la constante para la info del footer:
const mostrarFooter = () => {

	// Reinicio el footer para que no se sobreescriba la info
	footer.innerHTML = ''

	// Agrego los condicionales - cuando se vacia el carrito se muestra esta info:
	if (Object.keys(carrito).length === 0) {
		footer.innerHTML =  `
		<th scope="row" colspan="5" class="color-text5">Carrito vacío - comience a reservar!</th>
		`
	}

	// Agrego otro condicional - cuando sumo productos al carrito:
	// primero sumo la cantidad de productos:
	const nCantidad = Object.values(carrito).reduce((acc, {cantidad}) => acc + cantidad, 0)
	// segundo sumo el precio:
	const nPrecio = Object.values(carrito).reduce((acc, {cantidad, precio}) => acc + cantidad * precio, 0)

	// tercero muestro la info de los condicionales en el footer:
	templateFooter.querySelectorAll('td')[0].textContent = nCantidad
	templateFooter.querySelectorAll('span')[0].textContent = nPrecio

	// Clonar ???
	const clone = templateFooter.cloneNode(true)
	fragment.appendChild(clone)

	// Muestro la info del fragment
	footer.appendChild(fragment)
}