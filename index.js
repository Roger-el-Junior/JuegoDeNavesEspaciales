function onLoad(){
  setInterval(moverBala, 10)
  enemigo()
}

let posicionPer=123

let velosidad = 10

let derecha = 0
let izquierda = 0

function clickDerecho(){
    posicionPer++
    let personaje = document.getElementById('personaje')
    personaje.style.left=posicionPer+"px"
    
    limite()
}

function clickIzquierdo(){
  limite()
  posicionPer--
  let personaje = document.getElementById('personaje')
  personaje.style.left=posicionPer+"px"
  
  
}


function moverDerecha(){
  function mover(){
    posicionPer++
    let personaje = document.getElementById('personaje')
    personaje.style.left=posicionPer+"px"
    
    limite()
  }
  derecha =  setInterval(mover, velosidad)
}

function moverIzquierda(){
  function mover(){
    posicionPer--
    let personaje = document.getElementById('personaje')
    personaje.style.left=posicionPer+"px"
    limite()
  }
  izquierda = setInterval(mover, velosidad)
}


function detenerIzquierda(){
  clearInterval(izquierda)
}

function detenerDerecha(){
  clearInterval(derecha)
}


function limite(){
  if(posicionPer==1){
    posicionPer=2
  }
  else if(posicionPer==275){
    posicionPer=274
  }
}


let bala = ""
let tope = 280
let posicionDeBala = ""

function proyectil(){
  bala= document.createElement("img")
  bala.setAttribute("class", "bala")
  bala.src="image/proyectil.png"
  document.body.appendChild(bala)
  bala.style.left=posicionPer+"px"
  
  posicionDeBala = posicionPer
  
}

function moverBala(){
  
  if(tope==0){
    tope=280
    document.body.removeChild(bala)
    
  }else if(tope ==280){
    proyectil()
    bala.style.top=tope+"px"
    tope-=10
    
  }else{
    tope-=10
    bala.style.top=tope+"px"
  }
  inpacto()
  
}


let bot = 0
let posicionBot=""

function enemigo(){
  bot = document.createElement("img")
  bot.setAttribute("class", "enemigo")
  bot.src="image/enemigo.png"
  document.body.appendChild(bot)
  posicionDeBot()
}

function posicionDeBot(){
  posicionBot=Math.floor(Math.random()*280)
  bot.style.left=posicionBot+"px"
}

function inpacto(){
  if( (posicionBot-15<posicionDeBala) && (posicionBot+15>posicionDeBala) ){
    if(tope==40){
      document.body.removeChild(bot)
      tope=0
      enemigo()
    }
  }
}