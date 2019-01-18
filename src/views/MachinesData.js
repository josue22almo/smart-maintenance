function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

class Machine {
  constructor(id, fhoras, estado) {
    this.id = id;
    this.temperatura = [0, 0, 0, 0, 0, 0, 0, 0];
    this.presion = [0, 0, 0, 0, 0, 0, 0, 0];
    this.fhoras = fhoras;
    this.estado = estado;
  }

  get id() {
    return this._id;
  }
  set id(id) {
    this._id = id;
  }
  get temperatura() {
    return this._temperatura;
  }
  set temperatura(temperatura) {
    this._temperatura = temperatura;
  }
  get presion() {
    return this._presion;
  }
  get estado() {
    return this._estado;
  }
  set presion(presion) {
    this._presion = presion;
  }
  get fhoras() {
    return this._fhoras;
  }
  set fhoras(fhoras) {
    this._fhoras = fhoras;
  }
  set estado(estado) {
    this._estado = estado;
  }
  actualizarTemp() {
    this._temperatura.shift();
    this._temperatura.push(random(70,90) + random(-10,15));
  }
  actualizarPre() {
    this._presion.shift();
    this._presion.push(random(10,20) + random(-5,1));
  }

}

class Machines {
  constructor() {
    this.maquinas = [
      new Machine(1, 762, "Encendido"),
      new Machine(2, 645, "Apagado"),
      new Machine(3, 367, "Encendido"),
      new Machine(4, 149, "Encendido"),
      new Machine(5, 13, "Encendido"),
    ];
  }
  get maquinas() {
    return this._maquinas;
  }

  set maquinas(maquinas) {
    this._maquinas = maquinas;
  }
}

var data = new Machines();

export default (data);

