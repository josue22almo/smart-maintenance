import Data from './MachinesData'

class Notification {
  constructor(id, mensaje, color) {
    this.id = id;
    this.mensaje = "";
    this.color = "";
  }

  get id() {
    return this._id;
  }
  set id(id) {
    this._id = id;
  }
  get mensaje() {
    return this._mensaje;
  }
  set mensaje(mensaje) {
    this._mensaje = mensaje;
  }
  get color() {
    return this._color;
  }
  set color(color) {
    this._color = color;
  }
  
  actualizarNotifs(temperatureData, pressureData) {
    var j = this.id - 1;
    var i = temperatureData[j].length-2;
    if (temperatureData[j][i] >= 100) {
      notifications.unshift({
        id: Data.maquinas[j].id,
        message: "Temperatura superior al límite: " + temperatureData[j][i].toString(),
        color: "danger"
      });          
    }
    var z = pressureData[j].length-2;
    if (pressureData[j][z] >= 20) {
      notifications.unshift({
        id: Data.maquinas[j].id,
        message: "Presión superior al límite: " + pressureData[j][z].toString(),
        color: "warning",
      });          
    }
  }

}

class Notifications {
  constructor() {
    this.notificaciones = [];
    var temperatureData = [];
    var pressureData = [];
    for (var i = 0; i <= 5; i++) {
        temperatureData[j].push(Data.maquinas[j].temperatura[i]);
        pressureData[j].push(Data.maquinas[j].presion[i]);      
    }
    for (var j = 0; j < 7; j++) {
      for (var i = 0; i <= 5; i++) {
        if (temperatureData[j][i] >= 100) {
            this.notificaciones.unshift(new Notification(
            Data.maquinas[j].id,
            "Temperatura superior al límite: " + temperatureData[j][i].toString(),
            "danger"
            ));          
        }
      }
      for (var i = 0; i <= 5; i++) {
        if (pressureData[j][i] >= 20) {
            this.notificaciones.unshift(new Notification(
            Data.maquinas[j].id,
            "Presión superior al límite: " + pressureData[j][i].toString(),
            "warning",
            ));          
        }
      }        
    }
  }
  get notificaciones() {
    return this._notificaciones;
  }

  set notificaciones(notificaciones) {
    this._notificaciones = notificaciones;
  }
  
}

var data = new Notifications();

export default (data);

