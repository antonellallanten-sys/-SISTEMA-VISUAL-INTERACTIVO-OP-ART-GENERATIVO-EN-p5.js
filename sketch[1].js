// OP ART 

let estadoColor = 0;
let reloj = 0;

function setup() {
  createCanvas(800, 800);
  rectMode(CENTER);
  noStroke();
}

function draw() {
  background(10 + sin(reloj) * 10, 10, 25);

  reloj += 0.015;

  // DENSIDAD
  
  let densidad = map(mouseY, 0, height, 40, 80);

  for (let x = 0; x < width; x += densidad) {
    for (let y = 0; y < height; y += densidad) {

      // un poco de desorden controlado
      let ruidoX = noise(x * 0.01, y * 0.01, reloj);
      let ruidoY = noise(x * 0.02, y * 0.02, reloj);

      let nx = x + map(ruidoX, 0, 1, -45, 45);
      let ny = y + map(ruidoY, 0, 1, -45, 45);

      push();
      translate(nx, ny);

      // ROTACION DE FIGURAS
      rotate(ruidoX * TWO_PI + reloj * 0.3);

      let distanciaMouse = dist(nx, ny, mouseX, mouseY);

      // TAMAÑO CAMBIANTE
      
      let tam = map(distanciaMouse, 0, 400, 55, 10);
      tam += sin(reloj + x * 0.1) * 2;

      let tipoForma = noise(x * 0.02, y * 0.02, reloj);

      // COLORES
      
      if (estadoColor === 0) {

        if (distanciaMouse < 120) {
          fill(255, 120, 40);
        } else {
          fill(
            map(x, 0, width, 50, 90),
            map(y, 0, height, 120, 200),
            map(distanciaMouse, 0, 400, 220, 80)
          );
        }

      } else if (estadoColor === 1) {

        // PATRON
        
        let checker = (floor(x / densidad) + floor(y / densidad)) % 2;

        if (distanciaMouse < 120) {
          fill(255, 100, 30);
        } else if (checker === 0) {
          fill(30, 70, 220);
        } else {
          fill(180, 210, 255);
        }

      } else {

        fill(
          map(distanciaMouse, 0, 400, 240, 50),
          120 + tipoForma * 100,
          255
        );
      }

      // FORMAS
      
      dibujar(tipoForma, tam);

      pop();
    }
  }
}

// FUNCION PROPIA X2

function dibujar(t, s) {
  if (t < 0.33) {
    ellipse(0, 0, s, s);
  } else if (t < 0.66) {
    rect(0, 0, s, s);
  } else {
    triangle(-s, s, 0, -s, s, s);
  }
}

// INTERACCION CON CLICK
function mousePressed() {
  estadoColor++;

  if (estadoColor > 2) {
    estadoColor = 0;
  }
}