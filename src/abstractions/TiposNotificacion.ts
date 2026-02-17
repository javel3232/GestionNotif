import { Notificacion } from './Notificacion';

export class Mensaje extends Notificacion {
  mostrar(mensaje: string): void {
    this.plataforma.renderizar(`MENSAJE: ${mensaje}`);
  }
}

export class Alerta extends Notificacion {
  mostrar(mensaje: string): void {
    this.plataforma.renderizar(`¡ALERTA! ${mensaje}`);
  }
}

export class Advertencia extends Notificacion {
  mostrar(mensaje: string): void {
    this.plataforma.renderizar(`⚠ ADVERTENCIA: ${mensaje}`);
  }
}

export class Confirmacion extends Notificacion {
  mostrar(mensaje: string): void {
    this.plataforma.renderizar(`✓ CONFIRMACIÓN: ${mensaje}`);
  }
}
