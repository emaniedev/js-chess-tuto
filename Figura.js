const tiposFiguras = {
  K: "Rey",
  Q: "Reina",
  T: "Torre",
  A: "Alfíl",
  C: "Caballo",
  P: "Peón",
};
function Figura(x, y, tipo) {
  let esTipoValido = tiposFiguras[tipo] || false;
  if (!esTipoValido) return console.log(`ERROR: se ha introducido el tipo ${tipo} no válido`);
  this.x = x;
  this.y = y;
  this.tipo = tipo;
}

Figura.prototype.moverA = function (x, y) {
  this.x = x;
  this.y = y;
};

export default Figura;
