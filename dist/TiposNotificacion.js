"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Confirmacion = exports.Advertencia = exports.Alerta = exports.Mensaje = void 0;
const Notificacion_1 = require("./Notificacion");
class Mensaje extends Notificacion_1.Notificacion {
    mostrar(mensaje) {
        this.plataforma.renderizar('Mensaje', mensaje);
    }
}
exports.Mensaje = Mensaje;
class Alerta extends Notificacion_1.Notificacion {
    mostrar(mensaje) {
        this.plataforma.renderizar('Alerta', mensaje);
    }
}
exports.Alerta = Alerta;
class Advertencia extends Notificacion_1.Notificacion {
    mostrar(mensaje) {
        this.plataforma.renderizar('Advertencia', mensaje);
    }
}
exports.Advertencia = Advertencia;
class Confirmacion extends Notificacion_1.Notificacion {
    mostrar(mensaje) {
        this.plataforma.renderizar('Confirmación', mensaje);
    }
}
exports.Confirmacion = Confirmacion;
