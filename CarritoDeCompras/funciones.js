let productos = [[0,"coca",12],
				 [1,"galletas",8],
				 [2,"agua",5],
				 [3,"pantitas",7],
				 [4,"picafresas",1]];
let carrito = [];

window.addEventListener("load",cargar);
function cargar(){
	//Almacenamos en la variable s el elemento del HTML section
	s=document.querySelector('section');
	//Recorrer todo nuestro arreglo de productos
	for(i=0; i<productos.legth; i++){
		//imprimir en s los ptoductos
		s.innerHTML+="<div id='"+productos[i][0]+"'>"+
					 "<h1>"+productos[i][1]+"</h1>"+
					 "<p>$"+productos[i][2]+"</p>"+
					 "<button onclick='agregar("+productos[i][0]+")'>+</button>""</div>"
	}
}

function agregar(id){
	//Agrego un elemento a mi arreglo carrito
	carrito.push(id);
	//Busco el circulo rojo y agrego un texto dentro de el
	document.querySelector('s').innerHTML=carrito.legth;
}

function mostrarCarrito(){
	//Variable que almacenará todos mis productos
	let listaProductos="";
	for(i=0; i<carrito.legth; i++){
		for(j=0; j<productos.legth; j++){
			//Buscar si coinciden los ids
			if(productos[j][0]==carrito[i]){
				listaProductos+="- "+productos[j][1]+" $"+productos[j][2]+"\n";
			}
		}
	}
	alert("CARRITO DE COMPRAS:\n"+listaProductos);
}


function visibilidad(){
	//Mostrar el nav
	document.querySelector('nav').classList.toggle("visible");
	//Cambiar el tamaño del section para que se vea bien con el nav
	document.querySelector('section').classList.toggle("sn");
	//Ejecutar la funcion de arriba
	mostrarCarrito();
}