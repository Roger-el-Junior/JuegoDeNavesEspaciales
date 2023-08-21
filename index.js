let posicionPer=123

let velosidad = 10

let derecha = 0
let izquierda = 0

function clickDerecho(){
    posicionPer++
    let personaje = document.getElementById('personaje')
    personaje.style.left=posicionPer+"px"
}

function clickIzquierdo(){
  posicionPer--
  let personaje = document.getElementById('personaje')
  personaje.style.left=posicionPer+"px"
}

function moverDerecha(){
  function mover(){
    posicionPer++
    let personaje = document.getElementById('personaje')
    personaje.style.left=posicionPer+"px"
  }
  derecha =  setInterval(mover, velosidad)
}

function moverIzquierda(){
  function mover(){
    posicionPer--
    let personaje = document.getElementById('personaje')
    personaje.style.left=posicionPer+"px"
  }
  izquierda = setInterval(mover, velosidad)
}


function detenerIzquierda(){
  clearInterval(izquierda)
}

function detenerDerecha(){
  clearInterval(derecha)
}