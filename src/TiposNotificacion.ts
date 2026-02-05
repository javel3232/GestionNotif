import { Notificacion } from './Notificacion';

export class Mensaje extends Notificacion {
  mostrar(mensaje: string): void {
    this.plataforma.renderizar('Mensaje', mensaje);
  }
}

export class Alerta extends Notificacion {
  mostrar(mensaje: string): void {
    this.plataforma.renderizar('Alerta', mensaje);
  }
}

export class Advertencia extends Notificacion {
  mostrar(mensaje: string): void {
    this.plataforma.renderizar('Advertencia', mensaje);
  }
}

export class Confirmacion extends Notificacion {
  mostrar(mensaje: string): void {
    this.plataforma.renderizar('Confirmación', mensaje);
  }
}
