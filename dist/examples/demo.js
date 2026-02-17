"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ejecutarDemo = ejecutarDemo;
const Plataformas_1 = require("../implementations/Plataformas");
const TiposNotificacion_1 = require("../abstractions/TiposNotificacion");
function ejecutarDemo() {
    const alertaMovil = new TiposNotificacion_1.Alerta(new Plataformas_1.Movil());
    alertaMovil.mostrar('Batería baja');
    const mensajeEscritorio = new TiposNotificacion_1.Mensaje(new Plataformas_1.Escritorio());
    mensajeEscritorio.mostrar('Tienes un nuevo mensaje');
    const advertenciaWeb = new TiposNotificacion_1.Advertencia(new Plataformas_1.Web());
    advertenciaWeb.mostrar('Sesión a punto de expirar');
    const confirmacionMovil = new TiposNotificacion_1.Confirmacion(new Plataformas_1.Movil());
    confirmacionMovil.mostrar('Operación completada exitosamente');
    // Cambio dinámico de plataforma
    const notificacion = new TiposNotificacion_1.Alerta(new Plataformas_1.Escritorio());
    notificacion.mostrar('Alerta en escritorio');
    notificacion.cambiarPlataforma(new Plataformas_1.Web());
    notificacion.mostrar('Misma alerta ahora en web');
    notificacion.cambiarPlataforma(new Plataformas_1.Movil());
    notificacion.mostrar('Misma alerta ahora en móvil');
}
