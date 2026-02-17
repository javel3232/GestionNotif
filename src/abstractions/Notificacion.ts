import { Plataforma } from '../interfaces/Plataforma';

export abstract class Notificacion {
  protected plataforma: Plataforma;

  constructor(plataforma: Plataforma) {
    this.plataforma = plataforma;
  }

  cambiarPlataforma(plataforma: Plataforma): void {
    this.plataforma = plataforma;
  }

  abstract mostrar(mensaje: string): void;
}
