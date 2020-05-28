const carro = new Carrito();
const carrito = document.getElementById('carrito');
const productos = document.getElementById('listaproductos1');
const productos2 = document.getElementById('listaproductos2');
const productos3 = document.getElementById('listaproductos3');
const productos4 = document.getElementById('listaproductos4');
const productos5 = document.getElementById('listaproductos5');
const productos6 = document.getElementById('listaproductos6');
const productos7 = document.getElementById('listaproductos7');
const productos8 = document.getElementById('listaproductos8');
const productos9 = document.getElementById('listaproductos9');

const listaProductos = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
const procesarPedidoBtn = document.getElementById('procesar-pedido');

cargarEventos();

function cargarEventos(){

    //Se ejecuta cuando se presionar agregar carrito
    productos.addEventListener('click', (e)=>{carro.comprarProducto(e)});

      //Se ejecuta cuando se presionar agregar carrito
      productos2.addEventListener('click', (e)=>{carro.comprarProducto(e)});

      //Se ejecuta cuando se presionar agregar carrito
      productos3.addEventListener('click', (e)=>{carro.comprarProducto(e)});

      //Se ejecuta cuando se presionar agregar carrito
      productos4.addEventListener('click', (e)=>{carro.comprarProducto(e)});

      //Se ejecuta cuando se presionar agregar carrito
      productos5.addEventListener('click', (e)=>{carro.comprarProducto(e)});

      //Se ejecuta cuando se presionar agregar carrito
      productos6.addEventListener('click', (e)=>{carro.comprarProducto(e)});

      //Se ejecuta cuando se presionar agregar carrito
      productos7.addEventListener('click', (e)=>{carro.comprarProducto(e)});

      //Se ejecuta cuando se presionar agregar carrito
      productos8.addEventListener('click', (e)=>{carro.comprarProducto(e)});

      //Se ejecuta cuando se presionar agregar carrito
      productos9.addEventListener('click', (e)=>{carro.comprarProducto(e)});

    //Cuando se elimina productos del carrito
    carrito.addEventListener('click', (e)=>{carro.eliminarProducto(e)});

    //Al vaciar carrito
    vaciarCarritoBtn.addEventListener('click', (e)=>{carro.vaciarCarrito(e)});

    //Al cargar documento se muestra lo almacenado en LS
    document.addEventListener('DOMContentLoaded', carro.leerLocalStorage());

    //Enviar pedido a otra pagina
    procesarPedidoBtn.addEventListener('click', (e)=>{carro.procesarPedido(e)});
}