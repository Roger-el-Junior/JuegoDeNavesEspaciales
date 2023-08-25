

function onLoad() {

  setInterval(moverBala, 1)
  enemigo()

  setInterval(ataque, 100)
  document.getElementById("caja").style.display = "none"
  
  document.getElementById("contenedor").style.display="block"

}

let puntos = 0

let posicionPer = 123

let derecha = 0
let izquierda = 0

function clickDerecho() {
  posicionPer++
  let personaje = document.getElementById('personaje')
  personaje.style.left = posicionPer+"px"

  limite()
}

function clickIzquierdo() {
  limite()
  posicionPer--
  let personaje = document.getElementById('personaje')
  personaje.style.left = posicionPer+"px"

}

function moverDerecha() {
  function mover() {
    posicionPer++
    let personaje = document.getElementById('personaje')
    personaje.style.left = posicionPer+"px"

    limite()
  }
  derecha = setInterval(mover, 10)
}

function moverIzquierda() {
  function mover() {
    posicionPer--
    let personaje = document.getElementById('personaje')
    personaje.style.left = posicionPer+"px"
    limite()
  }
  izquierda = setInterval(mover, 10)
}

function detenerIzquierda() {
  clearInterval(izquierda)
}

function detenerDerecha() {
  clearInterval(derecha)
}

function limite() {
  if (posicionPer == 1) {
    posicionPer = 2
  } else if (posicionPer == 275) {
    posicionPer = 274
  }
}

let bala = ""
let tope = 280
let posicionDeBala = ""

function proyectil() {
  bala = document.createElement("img")
  bala.setAttribute("class", "bala")
  bala.src = "image/proyectil.png"
  document.body.appendChild(bala)
  bala.style.left = posicionPer+"px"

  son()

  posicionDeBala = posicionPer

}


function son() {
  let sonido = new Audio()
  sonido.src = "sonido/disparo(2).mp3"

  sonido.volume = 0.1
  return sonido.play()
}


function moverBala() {

  if (tope == 0) {
    tope = 280

    document.body.removeChild(bala)

  } else if (tope == 280) {
    proyectil()

    bala.style.top = tope+"px"
    tope -= 10

  } else {
    tope -= 10
    bala.style.top = tope+"px"
  }
  inpacto()

}

let bot = 0
let posicionBot = ""
let posicionAtaque = 0

function enemigo() {
  bot = document.createElement("img")
  bot.setAttribute("class", "enemigo")
  bot.src = "image/enemigo.png"
  document.body.appendChild(bot)
  posicionDeBot()
}

function posicionDeBot() {
  posicionBot = Math.floor(Math.random()*280)
  bot.style.left = posicionBot+"px"
}

function ataque() {
  posicionAtaque += 1
  bot.style.top = posicionAtaque+"px"

}

function inpacto() {
  if ((posicionBot-15 < posicionDeBala) && (posicionBot+15 > posicionDeBala)) {

    if ((tope-10 < posicionAtaque) && (tope+10 > posicionAtaque)) {

     sonido()
      bot.src = "image/explota.png"
      tope = 0

      function eliminar() {
        if (n == 3) {

          document.body.removeChild(bot)

          enemigo()

          posicionAtaque = 0

          clearInterval(m)

          return

        } else {

          n += 1

        }
      }

      let m = 0
      let n = 0
      m = setInterval(eliminar, 50)

      aggPuntos()
    }
  }

  function aggPuntos() {
    puntos += 1
    let x = document.getElementById("puntos")
    x.innerHTML = puntos
  }
}

function sonido() {
   let sonido2 = new Audio()
      sonido2.src = "sonido/explota.mp3"


      sonido2.play()

}