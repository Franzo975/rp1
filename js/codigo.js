// perimite guardar los datos en el local storage 
//var c=[1,1,1,1,1,1];
/* $(document).ready(function () {
    $("a").click(function (evento) {
        alert("Ahora estas ingresando a lapagina web de la usat");
    })

    $("#theTarget").skippr();
}); */
function añadir(nombre){
   
    var cantidad=1;
    for(var i=0;i<localStorage.length;i++){
        var key = localStorage.key(i);
        if(key == nombre){
            cantidad =parseInt(localStorage.getItem(key),10);
            cantidad++; 
                       
            }
    }
    
    localStorage.setItem(nombre,cantidad);
    //precioFinal=precio*cantidad;
   updateData();    
}
function disminuir(nombre){
    for(var i=0;i<localStorage.length;i++){
        var key = localStorage.key(i);
        if(key == nombre){
            cantidad =parseInt(localStorage.getItem(nombre),10);
            if(cantidad ==1)
            {
                localStorage.removeItem(nombre); 
            }
            else
            {   
                cantidad--;
                localStorage.setItem(nombre,cantidad);
            }

           }
    }
    
    //localStorage.setItem(nombre,cantidad);
    updateData();   
}
//funcion para generar la columna del carrito
/* function registro(key="",cantidad="",precio=""){
    
    a= '<div class="row"><div class="col-4"><span>'+key+'</span></div><div class="col-4"> <span>'
                        +precio+ '</span></div><div class="col-4"> <span>'+'<button type="button" class="btn btn-warning" onclick="eliminarProducto('+'\''+key+'\''+')">'+'X'+'</button>'
                        +cantidad+'<button type="button" class="btn btn-warning" onclick="eliminarProducto('+'\''+key+'\''+')">'+'X'+'</button>'+'&nbsp &nbsp'+ 
                        '&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp'+
                        '<button type="button" class="btn btn-warning" onclick="eliminarProducto('+'\''+key+'\''+')">'+'X'+'</button>'+
                        '</span></div> </div> <br>';
    return a;
} */
//permite recorrer el local storage y colocar los datos guardados

function updateData(){
    var registro ="";
   // var cantidad=1;
    var precioTotal=0;
    precio=10;
    if(localStorage.length == 0){
        registro +='<h4>¿Desea un producto? solo dele a "agregar" al producto</h4>';
    }
    else{

        for(i=0;i<=localStorage.length -1;i++){
            var key = localStorage.key(i);
            var cantidad=parseInt(localStorage.getItem(key));
            if(key!='precioTotal')
            {
            if(key =='Crystron Halqifibrax DUOV-EN001 ultra rare 1st edition')
                {precio = 120;}
            else if (key =='Linkross ETCO-SP049 ultra rare 1st edition') {
                precio= 85;
            } 
            else if(key =='Chaos Space TOCH-SP009 super rare 1st edition')
            {
                
                precio=30;
            }
            else if(key == 'Pot of Extravagance TOCH-SP059 ultra rare 1st edition')
             {   precio=165;            
            }
            else if(key == 'Toon Black Luster Soldier TOCH-SP001 ultra rare 1st edition')
            {
                precio=70;
            }
            else if(key == 'Girsu, the Orcust Mekk-Knight ETCO-EN024 secret rare 1st edition')
            {
                precio =160;
            }
            registro+= ' <div class="row"><div class="col-4"><span>'+key+'</span></div><div class="col-4"> <span>'
            +precio+ '</span></div><div class="col-4"> <span>'+'<button type="button" class="btn btn-danger" onclick="disminuir('+'\''+key+'\''+')">'+'-'+'</button>'
            +cantidad+'<button type="button" class="btn btn-success" onclick="añadir('+'\''+key+'\''+')">'+'+'+'</button>'+'&nbsp &nbsp'+ 
            '&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp'+
            '<button type="button" class="btn btn-warning" onclick="eliminarProducto('+'\''+key+'\''+')">'+'X'+'</button>'+
            '</span></div> </div> <br>';
            
            precioTotal=precioTotal+(precio*cantidad);
            }
        }
    }
    document.getElementById('cart').innerHTML=registro;
    document.getElementById('totalGeneral').innerHTML=precioTotal;
    localStorage.setItem('precioTotal',precioTotal);
}

// borra los datos del local storage
function limpiar(){
    localStorage.clear();
    updateData();
}
// saber que elemento se quiere eliminar y removerlo 
function eliminarProducto(key){
    localStorage.removeItem(key);
    updateData();
}
function comprar(){
    var elemnto = document.querySelector('#registroBuy');
    var nombre = document.getElementById('names').value;
    var email = document.getElementById('email').value;
    var totalCompra = localStorage.getItem('precioTotal');
    
    if(nombre !=0  && email != 0 && totalCompra !=0){
    document.getElementById('registroBuy').innerHTML = '<h2>Compra registrada</h><button class="btn btn-primary"onclick="cerrarDialog()" id="btnDialog">X</button><br>'+
     '<h6>'+nombre+'</h6><br>'+'<h6>'+email+'</h6><br><h6><p> total de la compra S/ '+totalCompra+'</h6></p>';
    }
    else{
        document.getElementById('registroBuy').innerHTML = '<h4>Registre los datos nesesarios</h4><button class="btn btn-primary" onclick="cerrarDialog()" id="btnDialog">X</button>';
    }
    elemnto.classList.add('animate__animated', 'animate__zoomInDown');
    elemnto.setAttribute("open","");
  
}
function cerrarDialog(){
    var elemnto = document.querySelector('#registroBuy'); 
    elemnto.removeAttribute("open")
    elemnto.setAttribute("close","");
    limpiar();
    document.getElementById("names").value ="";
    document.getElementById("email").value ="";
}
 