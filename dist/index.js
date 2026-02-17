"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Web = exports.Movil = exports.Escritorio = exports.Confirmacion = exports.Advertencia = exports.Alerta = exports.Mensaje = exports.Notificacion = void 0;
// Abstracciones
var Notificacion_1 = require("./abstractions/Notificacion");
Object.defineProperty(exports, "Notificacion", { enumerable: true, get: function () { return Notificacion_1.Notificacion; } });
var TiposNotificacion_1 = require("./abstractions/TiposNotificacion");
Object.defineProperty(exports, "Mensaje", { enumerable: true, get: function () { return TiposNotificacion_1.Mensaje; } });
Object.defineProperty(exports, "Alerta", { enumerable: true, get: function () { return TiposNotificacion_1.Alerta; } });
Object.defineProperty(exports, "Advertencia", { enumerable: true, get: function () { return TiposNotificacion_1.Advertencia; } });
Object.defineProperty(exports, "Confirmacion", { enumerable: true, get: function () { return TiposNotificacion_1.Confirmacion; } });
// Implementaciones
var Plataformas_1 = require("./implementations/Plataformas");
Object.defineProperty(exports, "Escritorio", { enumerable: true, get: function () { return Plataformas_1.Escritorio; } });
Object.defineProperty(exports, "Movil", { enumerable: true, get: function () { return Plataformas_1.Movil; } });
Object.defineProperty(exports, "Web", { enumerable: true, get: function () { return Plataformas_1.Web; } });
