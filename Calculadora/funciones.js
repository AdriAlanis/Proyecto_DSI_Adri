//declara una variable p1 que va a almacenar algo
let p1 = document.getElementById('pantalla1');
let p2 = document.getElementById('pantalla2');
let calculadora = document.getElementById('calculadora');

function agregar(num){
	//innrtHTML lo que hace es traer el espacio que hay
	//dentro de un elemento agregar un dato dentro del 
	//elemento HTML p1
	p1.innerHTML+=num;
	calcular();
}

function calcular(){
	//El método eval evalua lo que hay en un elemento
	p2.innerHTML = eval (p1.innerHTML);
}

function borrar(){
	p1.innerHTML="";
	p2.innerHTML="";
}

function resultado (){
	p1.innerHTML=p2.innerHTML;
	p2.innerHTML="";	
}

function claro (){
	calculadora.classList.remove('oscuro');
	calculadora.classList.add('claro');
	let boton = document.querySelectorAll('.boton');
	let t = boton.length;
	for(i=t-1; i>=0; i--){
		boton[i].classList.remove('toscuro');
		boton[i].classList.add('tclaro');
	}
	p1.classList.remove('toscuro');
	p1.classList.add('tclaro');
	document.querySelector('#bc').classList.add('activo');
	document.querySelector('#b0').classList.add('activo');
	document.querySelector('body').classList.add('claro');
	document.querySelector('body').classList.add('oscuro');
}

function oscuro (){
	calculadora.classList.remove('claro');
	calculadora.classList.add('oscuro');
	let boton = document.querySelectorAll('.boton');
	let t = boton.length;
	for(i=t-1; i>=0; i--){
		boton[i].classList.remove('tclaro');
		boton[i].classList.add('toscuro');
	}
	p1.classList.remove('tclaro');
	p1.classList.add('toscuro');
	document.querySelector('#bc').classList.add('activo');
	document.querySelector('#b0').classList.add('activo');
	document.querySelector('body').classList.add('claro');
	document.querySelector('body').classList.add('oscuro');
}