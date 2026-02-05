import { Plataforma } from './Plataforma';

export abstract class Notificacion {
  protected plataforma: Plataforma;

  constructor(plataforma: Plataforma) {
    this.plataforma = plataforma;
  }

  abstract mostrar(mensaje: string): void;
}
