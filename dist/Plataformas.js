"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Web = exports.Movil = exports.Escritorio = void 0;
class Escritorio {
    renderizar(tipo, mensaje) {
        console.log(`[ESCRITORIO] ${tipo.toUpperCase()}: ${mensaje}`);
    }
}
exports.Escritorio = Escritorio;
class Movil {
    renderizar(tipo, mensaje) {
        console.log(`[MÓVIL] ${tipo}: ${mensaje}`);
    }
}
exports.Movil = Movil;
class Web {
    renderizar(tipo, mensaje) {
        console.log(`[WEB] <${tipo}>${mensaje}</${tipo}>`);
    }
}
exports.Web = Web;
