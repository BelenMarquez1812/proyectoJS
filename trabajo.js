console.log("ingreso js")

const valorTicket=200
const descuento1=80
const descuento2=50
const descuento3=15



function calcTotal() {
let cant=document.getElementById("cant").value
let categoria=document.getElementById("categoria").value
let total=0

    if (categoria==1) {
         total=cant*valorTicket*.2;
    } else if (categoria==2) {
        total=cant*valorTicket*.5;;
    } else {
        total=cant*valorTicket*.85;;   
    }


document.getElementById("total").innerHTML = `Total a pagar: $${total}`
}


function limpiarFormulario() {
    document.getElementById("formulario").reset();
    document.getElementById("total").innerHTML = `Resumen: $0`
  }

