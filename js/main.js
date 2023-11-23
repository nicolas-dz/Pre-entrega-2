
const productos = [ 
    {nombre :  "cuchillos", calidad: 1 , precio : 1000},
    {nombre :  "cuchillos",calidad: 2 , precio : 1500},
    {nombre :  "cuchillos", calidad: 3 ,  precio : 2000},
    {nombre :  "cucharas",  calidad: 1 , precio : 1000},
    {nombre :  "cucharas", calidad: 2 , precio : 1500},
    {nombre :  "cucharas",  calidad: 3 , precio : 2000},
    {nombre :  "tenedores", calidad: 1 , precio : 1000},
    {nombre :  "tenedores",calidad: 2 , precio : 1500},
    {nombre :  "tenedores", calidad: 3 ,  precio : 2000}
];


let productoBuscado = prompt ("Ingrese el nombre del producto que quiere comprar : cuchillos, cucharas o tenedores");

while (true) {
    if (!isNaN(productoBuscado)) {
          alert("Por favor, ingresa solo palabras (cuchillos,cucharas o tenedores).");
          productoBuscado = prompt ("Ingrese el nombre del producto que quiere comprar : cuchillos, cucharas o tenedores");
    } 
    
    else if (productoBuscado === "") {
          alert("Por favor, ingresa un producto (cuchillos,cucharas o tenedores).");
          productoBuscado = prompt ("Ingrese el nombre del producto que quiere comprar : cuchillos, cucharas o tenedores");
    } 
    
    else if (productoBuscado !== "cuchillos" && productoBuscado !== "cucharas" && productoBuscado !== "tenedores" )
    {
        alert("Por favor, ingresa un producto (cuchillos,cucharas o tenedores).");
        productoBuscado = prompt ("Ingrese el nombre del producto que quiere comprar : cuchillos, cucharas o tenedores");
    }
     
    else 
    {    alert("el producto seleccionado es "+productoBuscado);
          console.log("El producto seleccionado es "+productoBuscado);
          break;
    } }



let calidadProducto = parseInt(prompt ("Contamos con 3 calidades distintas : "+ "\n" +"1) Nacional"+ "\n" +"2) importada"+ "\n" + "3) Premium"+ "\n" +"indique que calidad busca (1, 2 o 3)" ))


while (true) {
    if (isNaN(calidadProducto)) {
          alert("Por favor, ingresa solo números.");
          calidadProducto = parseInt(prompt ("Contamos con 3 calidades distintas : "+ "\n" +"1) Nacional"+ "\n" +"2) importada"+ "\n" + "3) Premium"+ "\n" +"indique que calidad busca (1, 2 o 3)" ));
    } else if (parseInt(calidadProducto) <= 0) {
          alert("Por favor, ingresa un número mayor que cero.");
          calidadProducto = parseInt(prompt ("Contamos con 3 calidades distintas : "+ "\n" +"1) Nacional"+ "\n" +"2) importada"+ "\n" + "3) Premium"+ "\n" +"indique que calidad busca (1, 2 o 3)" ));
    } else if (parseInt(calidadProducto)>3){
        alert("Por favor, ingresa un número menor o igual a 3 ");
        calidadProducto = parseInt(prompt ("Contamos con 3 calidades distintas : "+ "\n" +"1) Nacional"+ "\n" +"2) importada"+ "\n" + "3) Premium"+ "\n" +"indique que calidad busca (1, 2 o 3)" ));
    }
    else {
        console.log("Selecciono calidad "+calidadProducto);
          break;
    } }

    if (calidadProducto===1){
        alert("Usted selecciono "+productoBuscado + " calidad nacional")
    } else if (calidadProducto===2){
        alert("Usted selecciono "+productoBuscado + " calidad importada")
    }else if (calidadProducto===3){
        alert("Usted selecciono "+productoBuscado + " calidad premium")};


        
        function precioProducto(productoBuscado,calidadProducto) {
           const productoSeleccion = productos.find(producto => producto.nombre === productoBuscado && producto.calidad === calidadProducto);
            
           if (productoSeleccion){
           return productoSeleccion.precio * 1.21 ;
        }
            else {
             return "Producto no disponible";
            }
        }
            
        const precioFinal = precioProducto(productoBuscado,calidadProducto);
        alert ("El precio del producto con iva es de $"+precioFinal);

            document.write("<h3>"+"Su producto "+productoBuscado+" en la calidad seleccionada tiene un valor de $"+precioFinal + " IVA incluido."+ "</h3>") ;
    