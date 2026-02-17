"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notificacion = void 0;
/**
 * Abstracción del patrón Bridge
 * Clase base para todos los tipos de notificación
 */
class Notificacion {
    constructor(plataforma) {
        this.plataforma = plataforma;
    }
    cambiarPlataforma(plataforma) {
        this.plataforma = plataforma;
    }
}
exports.Notificacion = Notificacion;
