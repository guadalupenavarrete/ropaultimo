var cantidad=document.getElementById("cantidad").value
var producto=document.getElementById("producto").value

var body=document.getElementById("cuerpo")
var falsodiv=document.getElementById("gutters")
body.removeChild(falsodiv)


// primer div del gutter 
var cuerpo= document.getElementById("cuerpo")
var  row=document.getElementById("div")
row.id="row"
row.className="row gx-5"
gutter.appendchild (row)

for(var 1 = 0; 1 < cantidad; 1++){
    //columna del gutter
    var row = document.getElementById("row")
    var col= document.getElementById("div")
col.id="col"+1
col.className="col-4"
col.innerHTML= ""
row.appendChild(col)

//card
var col= document.getElementById("col"+1)
var card=document.createElement("div")
card.id="card" + 1
card.className="card"
card.innerHTML
col.appendChild(card)

//imagen del card
var card= document.getElementById("card"+1)
var img=document.createElement("img")
img.src="img/"+producto+1+".jpg"
img.className="card-img-top"
card.appendChild(img)

//cuerpo card
var cardbody =document.createElement("div")
cardbody.id ="cardbody"+1
cardbody.className="card-body"
card.appendChild(cardbody)

//titulo del card
var cuerpocar = document.getElementById("cardbody"+1)
var tittle = document.createElement("h5")
tittle.className="card-tittle"
tittle.textContent="titulo"
cuerpocard.appendChild(tittle)

//detalles 
var detalles =document.createElement("p")
detalles.className="card-text"
detalles.textContent="descripcion"
cuerpocard.appendChild(detalles)


//boton

var button =document.createElement("a")
button.className="btn btn-primary"
button.textContent=" go"
cuerpocard.appendChild(button)
}