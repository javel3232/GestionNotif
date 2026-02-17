"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Confirmacion = exports.Advertencia = exports.Alerta = exports.Mensaje = void 0;
const Notificacion_1 = require("./Notificacion");
class Mensaje extends Notificacion_1.Notificacion {
    mostrar(mensaje) {
        this.plataforma.renderizar(`MENSAJE: ${mensaje}`);
    }
}
exports.Mensaje = Mensaje;
class Alerta extends Notificacion_1.Notificacion {
    mostrar(mensaje) {
        this.plataforma.renderizar(`¡ALERTA! ${mensaje}`);
    }
}
exports.Alerta = Alerta;
class Advertencia extends Notificacion_1.Notificacion {
    mostrar(mensaje) {
        this.plataforma.renderizar(`⚠ ADVERTENCIA: ${mensaje}`);
    }
}
exports.Advertencia = Advertencia;
class Confirmacion extends Notificacion_1.Notificacion {
    mostrar(mensaje) {
        this.plataforma.renderizar(`✓ CONFIRMACIÓN: ${mensaje}`);
    }
}
exports.Confirmacion = Confirmacion;
