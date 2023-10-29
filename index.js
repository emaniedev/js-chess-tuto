import Figura from "./Figura.js";

const FILAS = 8;
const COLUMNAS = FILAS;
const N_FIGURAS = 16;
const HUECO_LIBRE = "";
let tablero = new Array(COLUMNAS);
const figuras = new Array(N_FIGURAS);

main();

function main() {
  generaTablero();
  initFigurasTablero(tablero);
  console.table(tablero);
}

function colocarPieza(figura, tablero) {
  if (!figura?.tipo) return console.error("La figura no tiene tipo, no es válida");

  tablero[figura.y][figura.x] = figura.tipo;
}
function generaTablero() {
  for (let i = 0; i < COLUMNAS; i++) {
    tablero[i] = new Array(FILAS).fill(HUECO_LIBRE);
  }
}

function initFigurasTablero(tablero) {
  console.assert(N_FIGURAS >= 16, "El número de figuras tiene que ser mayor o igual a 16");
  for (let i = 0; i < N_FIGURAS; i++) {
    let tipo = "";
    switch (i) {
      case 8:
        tipo = "K";
        break;
      case 9:
        tipo = "Q";
        break;
      case 10:
      case 11:
        tipo = "T";
        break;
      case 12:
      case 13:
        tipo = "A";
        break;
      case 14:
      case 15:
        tipo = "C";
        break;
      default:
        tipo = "P";
        break;
    }
    let nuevaFigura = generaFigura(tipo);
    colocarPieza(nuevaFigura, tablero);
    figuras.push(nuevaFigura);
  }
}

function generaFigura(tipo) {
  let rndCoord = coordenadaRandom();
  if (esHuecoLibre(tablero, rndCoord.x, rndCoord.y)) {
    return new Figura(rndCoord.x, rndCoord.y, tipo);
  } else {
    return generaFigura(tipo);
  }
}

function coordenadaRandom() {
  let rndFila = Math.floor(Math.random() * FILAS);
  let rndColumna = Math.floor(Math.random() * COLUMNAS);
  return { x: rndFila, y: rndColumna };
}

function esHuecoLibre(tablero, x, y) {
  return tablero[y][x] === HUECO_LIBRE ? true : false;
}
