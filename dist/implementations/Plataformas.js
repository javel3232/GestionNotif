"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Web = exports.Movil = exports.Escritorio = void 0;
class Escritorio {
    renderizar(contenido) {
        console.log(`[ESCRITORIO] ${contenido}`);
    }
}
exports.Escritorio = Escritorio;
class Movil {
    renderizar(contenido) {
        console.log(`[MÓVIL] ${contenido}`);
    }
}
exports.Movil = Movil;
class Web {
    renderizar(contenido) {
        console.log(`[WEB] ${contenido}`);
    }
}
exports.Web = Web;
