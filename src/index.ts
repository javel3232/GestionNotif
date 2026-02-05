import { Escritorio, Movil, Web } from './Plataformas';
import { Mensaje, Alerta, Advertencia, Confirmacion } from './TiposNotificacion';

const escritorio = new Escritorio();
const movil = new Movil();
const web = new Web();

const alertaMovil = new Alerta(movil);
alertaMovil.mostrar('Batería baja');

const mensajeEscritorio = new Mensaje(escritorio);
mensajeEscritorio.mostrar('Tienes un nuevo mensaje');

const advertenciaWeb = new Advertencia(web);
advertenciaWeb.mostrar('Sesión a punto de expirar');

const confirmacionMovil = new Confirmacion(movil);
confirmacionMovil.mostrar('Operación completada exitosamente');
