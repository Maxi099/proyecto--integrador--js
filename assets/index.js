


const d = document;
const $btnMenuCarrito = d.getElementById ("btn--menu--carrito");
const $btnMenuBarras = d.getElementById ("btn--menu--barras");
const $overlay = d.getElementById ("overlay");
const $btnCerrarCarrito = d.getElementById ("btn--cerrar--carrito");
const $btnCerrarMenu = d.getElementById ("btn--cerrar--menu");
const $carritoCompras = d.getElementById ("carrito--compras");
const $botonesMenu =d.getElementsByClassName ("botones--menu");
const $menuBarras = d.getElementById ("nav--menu");
const $listaCategorias = d.getElementById ("lista--categorias");
const $botonesCategorias = d.getElementsByClassName ("botones--categorias");
const $cardsContainer = d.getElementById ("cards--container");
const $paginas = d.getElementById ("paginas");
const $pagina = d.getElementsByClassName ("pagina");
const $btnCategoria = d.getElementsByClassName ("botones--categorias");
const $mapaContainer = d.getElementById ("mapa--container");
const $carritoContenedor = d.getElementById ("carrito--contenedor");
const $msjAgregarItemCarrito = d.getElementById ("msj--agregar--item-carrito");
const $textAgregarItemCarrito = d.querySelector ("#msj--agregar--item-carrito  p");
const $subtotal = d.querySelector (".subtotal  span");
const $total = d.querySelector (".total span");
const $burbuja = d.getElementById ("burbuja");
const $btnVaciarCarrito = d.querySelector (".btn--vaciar--carrito");
const $btnComprar = d.querySelector (".btn--comprar");
const $aviso = d.getElementById("aviso");
const arrRender = [];
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];



/***************CONTACTO */


const $formContainer = d.getElementById("form--container");
const $inputNombre = d.getElementById("input--nombre");
const $inputMail = d.getElementById("input--mail");
const $inputMensaje = d.getElementById("input--mensaje");
const $smallNombre= d.getElementById("small--nombre");
const $smallMail= d.getElementById("small--mail");
const $smallMensaje= d.getElementById("small--mensaje");


const estaVacia = (input) => {
    return !input.value.trim().length;
  };


  const mailValido = (input) => {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    return re.test(input.value.trim());
  };

  const nombreValido=(input)=>{
    const re = /[A-Za-z]/;
    return re.test(input.value.trim());
  }

const enviarContacto=(e)=>{
e.preventDefault()
let inputvalido = true;
let esvalido=false;
        if (estaVacia($inputNombre))
        inputvalido =insertarMensaje ("El campo Nombre esta vacio",$smallNombre,$inputNombre);  
        else if (!nombreValido($inputNombre))        
        inputvalido= insertarMensaje ("Solo Letras en este campo.",$smallNombre,$inputNombre); 
        if (inputvalido) 
        {
            inputValido ($smallNombre,$inputNombre); 
            esvalido = true;
        }      
         
        
        inputvalido=true;
          
       
        if (estaVacia($inputMail))
        inputvalido =insertarMensaje ("El campo Mail esta vacio",$smallMail,$inputMail);  
        else if (!mailValido($inputMail))        
        inputvalido= insertarMensaje ("Formato de mail invalido.",$smallMail,$inputMail); 
        if (inputvalido)       
        inputValido ($smallMail,$inputMail);
        else esvalido=false;
       
        inputvalido=true;
       
        
        if (estaVacia($inputMensaje))
        inputvalido =insertarMensaje ("El campo Mensaje esta vacio",$smallMensaje,$inputMensaje);  
        if (inputvalido) 
        {
            inputValido ($smallMensaje,$inputMensaje);
            if (esvalido)
            {
                $formContainer.reset() 
                mostarAviso('<h2>El mensaje fue enviado con exito</h2><h3>Proximamente nos pondremos en contacto</h3><button class="form__submit aviso--cerrar">Cerrar</button>');
                
            }
            

        }      
         
       
        
        
}

const insertarMensaje=(msj,elem,input)=>{
    
    elem.textContent = msj;
    elem.classList.add("small--fuente__activo");  
   input.classList.add("input--invalido"); 
   return false;
   
}

const inputValido=(elem,input)=>{
    elem.classList.remove("small--fuente__activo");  
    input.classList.remove("input--invalido");   

}
 



    const btnCerrarAviso =(e)=>{

       if( e.target.classList.contains("aviso--cerrar"))
       {
        cerrarAviso();
        sacarOverlay();
       }
        

    }



 const cerrarAviso =(e)=>{

       $aviso.classList.remove("aviso__activo");
       
    }





/*************FIN CONATCTO */




const mostarAviso = (msj)=>{

    $aviso.classList.add("aviso__activo")
    $aviso.innerHTML = msj;
    abrirOverlay();
    
}




const abrirCarrito =(e) =>{
   e.preventDefault();
   if (carrito.length ===0)
    {
        $btnMenuCarrito.classList.add("carrito--vacio__activo")
      setTimeout(() => {
        $btnMenuCarrito.classList.remove("carrito--vacio__activo")
   }, 1500);
return;
    }
$carritoCompras.classList.add("carrito--compras___activo");
abrirOverlay()
}

const cerrarCarrito =() =>{   
    
 $carritoCompras.classList.remove("carrito--compras___activo");
 sacarOverlay()
 }

 const abrirOverlay = ()=>{
    $overlay.classList.add("overlay__activo");
 }

 const sacarOverlay = ()=>{
    $overlay.classList.remove("overlay__activo");
 }

 const cerrarOverlay = ()=>{
    cerrarCarrito ();
    cerrarMenu (); 
    cerrarAviso();
   
 }


const abrirMenu =() =>{   
$menuBarras.classList.add("nav--bars__activo");
abrirOverlay()
}
const cerrarMenu =() =>{   
    $menuBarras.classList.remove("nav--bars__activo");
    sacarOverlay()
    }

const cerrarMenu2 =(e) =>{   
    if (e.target.classList.contains("botones--menu"))
    cerrarMenu();
    }


    
    
    const renderizarCategorias = () =>{
       
        let inner ="";
        let inner2 ="";
        let total=0;

       
        for(let i=0;i<listaProductos.length;i++)
        {
            let salir=0;
            let categoria = listaProductos[i].categoria;
            let repetido= 0;
            for( let j=0;j<listaProductos.length;j++)
            {
                if (listaProductos[i].categoria == listaProductos[j].categoria)
  
                {                          
                    if (i<=j)
                    repetido+=1;
                    if (i>j)
                    {
                        salir=1;
                        break;                         
                    }                                                
                                        
                }                                  

            }
           if (salir===0)
           {
            inner+= `<li class="botones--categorias" data-name="${categoria}">${categoria}(${repetido})</li>`
            total+=repetido;
           }
           
            inner2 = `<li class="botones--categorias li--cat--activo" data-name="Todas">Todas(${total})</li>`;
           inner2 += inner;
        }
    $listaCategorias.innerHTML=inner2;
        
    }






const seleccionarProductos =(e) =>{  
   
if(e.target.classList.contains ("botones--categorias"))
{
    
    if (e.target.classList.contains("li--cat--activo"))return;
    vaciarProductos();
    activarBtnCategoria(e.target.dataset.name);
    $paginas.innerHTML = "";
    if (e.target.dataset.name === "Todas")
    {
        separarPaginas(listaProductos);
        return;
    }  
        const arrProductos = listaProductos.filter((arr)=>e.target.dataset.name == arr.categoria);
        separarPaginas(arrProductos);
    
    
}

}

const vaciarProductos = () =>{
    $cardsContainer.innerHTML= "";

}

const separarPaginas =(arr)=>{
let pagina = 0;
let cambio = 1;
arrRender.length=0;

for(let i=0;i<arr.length;i++)
{
    if (cambio===1)
    arrRender[pagina] = "";   
    arrRender[pagina]  +=
    `<div class="card">  
    <img src="${arr[i].img}" alt="${arr[i].nombre}">
<div class="card--info">
<div class="info--desc">
<h3>${arr[i].nombre}</h3>
<p>${arr[i].desc}</p>
</div>
    <div class="info--compra">
    <span>$${arr[i].precio}</span>
    <small>Stock: ${arr[i].stock}</small>
    </div>
    <button class="form__submit btn--añadir--carrito"
    data-id="${arr[i].id}"
    data-nombre="${arr[i].nombre}"
    data-desc="${arr[i].desc}"
    data-stock="${arr[i].stock}"
    data-precio="${arr[i].precio}"
    data-img="${arr[i].img}"
    >Añadir al Carrito</button> 
     </div>
  </div>`
       
  cambio=0;
    if (i!=0 && i!=1)
    {       
        if ((i+1)%6===0)
        {
        pagina+=1;
         cambio=1; 
        }
              
       
    }
   
}


renderProductos(0);
renderPaginas();
activarPagina(1);

}

const renderProductos = (num)=>{
    
     $cardsContainer.innerHTML = arrRender[num];
        

}

const renderPaginas=()=>{
    if (arrRender.length > 1)
    arrRender.forEach((e, i) => $paginas.innerHTML+=`<a href="#main--productos" class="pagina" data-pagina="${i+1}">${i+1}</a>` );
}




const cambiarPagina = (e)=>{

    
    if(e.target.classList.contains ("pagina"))
    {
        if (e.target.classList.contains("pagina__activa"))return;
        vaciarProductos();
        renderProductos(Number(e.target.dataset.pagina)-1);
        activarPagina(Number(e.target.dataset.pagina));

    }
    

}

const activarPagina =(num)=>{
const pagina = [...$pagina];
pagina.forEach ((e)=> Number(e.dataset.pagina)===num ? e.classList.add("pagina__activa") : e.classList.remove("pagina__activa"));
}

const activarBtnCategoria =(name)=>{
    const btnCategoria = [...$btnCategoria];
    btnCategoria.forEach ((e)=> e.dataset.name===name ? e.classList.add("li--cat--activo") : e.classList.remove("li--cat--activo"));
    }


    const renderMapa =()=>{
        $mapaContainer.innerHTML=`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3286.1130572201077!2d-58.481271023445615!3d-34.55069275470129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb696ab5cb4ed%3A0x887c745720a0e9b6!2sParque%20Saavedra!5e0!3m2!1ses-419!2sar!4v1683392521864!5m2!1ses-419!2sar" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;

        }


       const  añadirCarrito =(e)=>{
        
        if (e.target.classList.contains("btn--añadir--carrito"))  
              { 
                 const  itemCarrito = {
                    id:e.target.dataset.id,
                    nombre:e.target.dataset.nombre,
                    desc:e.target.dataset.desc,
                    stock:e.target.dataset.stock,
                    precio: Number(e.target.dataset.precio),
                    img:e.target.dataset.img,
                    cantidad:1
                } 
                
                let indice = carrito.findIndex((arr) => arr.id ===itemCarrito.id )
                if (indice != -1)
                {
                    if (carrito[indice].cantidad==itemCarrito.stock)                
                     return msjSinStock("No hay mas Stock disponible para agregar");                       
                                                
                    carrito[indice].cantidad+= 1; 
                    
                    msjAgregarCarrito("Se agrego un item al producto del carrito");
                }                
                 else
                 {
                    carrito = [...carrito, itemCarrito ]
                    msjAgregarCarrito("Se agrego el producto al carrito");
                 }
                
                
                renderCarrito();
                grabarCarrito();
       }}


      const renderCarrito = ()=>{
        
        $carritoContenedor.innerHTML="";
        let inner="";
        for(let i=0;i<carrito.length;i++)
        {
     inner+=
        ` <div class="carrito--item">  
        <div class="carrito--info">             
        <img src="${carrito[i].img}" alt="">
             <div class="carrito--info--desc">
                <h4>${carrito[i].nombre} </h4>
                <span>${carrito[i].desc}</span>
             </div>

            </div>
            <div class="carrito--item--derecha">
                 <div class="carrito--cantidad">
                         <span class="mas" data-id="${carrito[i].id}">+</span>
                          <span class="cantidad">${carrito[i].cantidad}</span>
                        <span class="menos"data-id="${carrito[i].id}">-</span>
                  </div>
     
             <span>$${carrito[i].precio}</span>                                                                                                                                                                
     </div> 
<img src="./assets/img/delete.svg" alt="" class="btn--borrar" data-id="${carrito[i].id}"> </div> `  

}
$carritoContenedor.innerHTML= inner;
valorBurbuja();
    sumarTotal();
    

      }


const grabarCarrito =()=>{
    localStorage.setItem('carrito', JSON.stringify(carrito));
}






const msjAgregarCarrito=(msj)=>{
   
   $msjAgregarItemCarrito.classList.add("msj--agregar--item-activo")
   $textAgregarItemCarrito.textContent = msj;
   setTimeout(() => {
    $msjAgregarItemCarrito.classList.remove("msj--agregar--item-activo")
   }, 1500);
    

    }

    const msjSinStock=(msj)=>{
        
        $msjAgregarItemCarrito.classList.add("msj--agregar--item-sinstock")
        $textAgregarItemCarrito.textContent = msj;
        setTimeout(() => {
         $msjAgregarItemCarrito.classList.remove("msj--agregar--item-sinstock")
        }, 1500);
         
     
         }



const botoneDentroCarrito =(e)=>{
    if(e.target.classList.contains ("mas"))
    {
        let indice = carrito.findIndex((arr) => arr.id ===e.target.dataset.id)
        if (carrito[indice].cantidad<carrito[indice].stock)
        carrito[indice].cantidad+=1;     
            
    }
    
    if(e.target.classList.contains ("menos"))
    {
        let indice = carrito.findIndex((arr) => arr.id ===e.target.dataset.id)
        if (carrito[indice].cantidad > 1)
        carrito[indice].cantidad-=1;
       
       
    }
    if(e.target.classList.contains ("btn--borrar"))  
    {carrito = carrito.filter((arr)=>arr.id != e.target.dataset.id )  
        if (carrito.length===0)
       {
        vaciarCarrito();
        return;
       }
        
        

    }   
 
    renderCarrito();
    grabarCarrito();
}


const valorBurbuja=()=>{    
  let total = carrito.reduce((acc, curr) => acc + curr.cantidad,0);
  if (total>0)
  {
    $burbuja.classList.add("burbuja__activa");
    $burbuja.textContent = total;
    return;
  }    
   $burbuja.classList.remove("burbuja__activa");

}

const sumarTotal=()=>{    
    let total = carrito.reduce((acc, curr) => acc + curr.precio * curr.cantidad,0);
    $subtotal.textContent = `$${total}`;
    $total.textContent = `$${total}`;
  }

  const vaciarCarrito=()=>{   
        carrito.length =0;
        cerrarCarrito();
        valorBurbuja();
        localStorage.clear();
  }


  const clickComprar =()=>{
     vaciarCarrito();
    mostarAviso('<h2>La compra se realizo con exito</h2><h3>Proximamente nos pondremos en contacto</h3><button class="form__submit aviso--cerrar">Cerrar</button>');

  }





const init = () =>{
    
    renderMapa();
    renderizarCategorias();
    renderCarrito();
    separarPaginas(listaProductos);
    $btnMenuCarrito.addEventListener ("click", abrirCarrito );
    $btnCerrarCarrito.addEventListener("click", cerrarCarrito );
    $overlay.addEventListener("click", cerrarOverlay );
    $btnMenuBarras.addEventListener("click", abrirMenu );
    $btnCerrarMenu.addEventListener("click", cerrarMenu );
    $menuBarras.addEventListener("click", cerrarMenu2 );
    $listaCategorias.addEventListener ("click", seleccionarProductos);
    $paginas.addEventListener ("click", cambiarPagina );
    $cardsContainer.addEventListener("click", añadirCarrito);
    $carritoContenedor.addEventListener("click", botoneDentroCarrito);
    $btnVaciarCarrito.addEventListener ("click", vaciarCarrito); 
    $btnComprar.addEventListener("click", clickComprar )
    $aviso.addEventListener ("click", btnCerrarAviso); 
    $formContainer.addEventListener("submit", enviarContacto)


  }



  
  
  init()


 