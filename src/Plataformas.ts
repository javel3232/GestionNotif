import { Plataforma } from './Plataforma';

export class Escritorio implements Plataforma {
  renderizar(tipo: string, mensaje: string): void {
    console.log(`[ESCRITORIO] ${tipo.toUpperCase()}: ${mensaje}`);
  }
}

export class Movil implements Plataforma {
  renderizar(tipo: string, mensaje: string): void {
    console.log(`[MÓVIL] ${tipo}: ${mensaje}`);
  }
}

export class Web implements Plataforma {
  renderizar(tipo: string, mensaje: string): void {
    console.log(`[WEB] <${tipo}>${mensaje}</${tipo}>`);
  }
}
