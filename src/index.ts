// Interfaces
export { Plataforma } from './interfaces/Plataforma';

// Abstracciones
export { Notificacion } from './abstractions/Notificacion';
export { Mensaje, Alerta, Advertencia, Confirmacion } from './abstractions/TiposNotificacion';

// Implementaciones
export { Escritorio, Movil, Web } from './implementations/Plataformas';
