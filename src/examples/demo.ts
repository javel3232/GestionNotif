import { Escritorio, Movil, Web } from '../implementations/Plataformas';
import { Mensaje, Alerta, Advertencia, Confirmacion } from '../abstractions/TiposNotificacion';

export function ejecutarDemo(): void {
  const alertaMovil = new Alerta(new Movil());
  alertaMovil.mostrar('Batería baja');

  const mensajeEscritorio = new Mensaje(new Escritorio());
  mensajeEscritorio.mostrar('Tienes un nuevo mensaje');

  const advertenciaWeb = new Advertencia(new Web());
  advertenciaWeb.mostrar('Sesión a punto de expirar');

  const confirmacionMovil = new Confirmacion(new Movil());
  confirmacionMovil.mostrar('Operación completada exitosamente');

  // Cambio dinámico de plataforma
  const notificacion = new Alerta(new Escritorio());
  notificacion.mostrar('Alerta en escritorio');

  notificacion.cambiarPlataforma(new Web());
  notificacion.mostrar('Misma alerta ahora en web');

  notificacion.cambiarPlataforma(new Movil());
  notificacion.mostrar('Misma alerta ahora en móvil');
}
