import { Plataforma } from '../interfaces/Plataforma';

export class Escritorio implements Plataforma {
  renderizar(contenido: string): void {
    console.log(`[ESCRITORIO] ${contenido}`);
  }
}

export class Movil implements Plataforma {
  renderizar(contenido: string): void {
    console.log(`[MÓVIL] ${contenido}`);
  }
}

export class Web implements Plataforma {
  renderizar(contenido: string): void {
    console.log(`[WEB] ${contenido}`);
  }
}
