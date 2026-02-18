# Patrón Bridge - Sistema de Notificaciones (TypeScript)

## Tipo de Patrón
**ESTRUCTURAL - BRIDGE (PUENTE)**

## Descripción

Esta aplicación es un sistema de notificaciones multi-plataforma desarrollado en TypeScript, diseñado siguiendo principios de diseño orientados a separar la abstracción de la implementación y mejorar la escalabilidad del sistema.
En lugar de crear clases específicas para cada combinación de tipo de notificación y plataforma (NotificacionAlertaEmail, NotificacionAlertaMovil, NotificacionMensajeEmail, etc.), la aplicación separa los tipos de notificaciones de las plataformas de envío, permitiendo que ambas dimensiones evolucionen independientemente.
Este enfoque está inspirado en el Patrón de Diseño Bridge.

## Escenario

Una empresa necesita enviar diferentes tipos de notificaciones (alertas, mensajes, confirmaciones) a través de múltiples plataformas (Email, Móvil, Web, Escritorio). Sin una arquitectura adecuada, esto genera:

Explosión combinatoria de clases (N tipos × M plataformas = N×M clases)
Duplicación de código entre implementaciones similares
Rigidez al agregar nuevos tipos o plataformas
Acoplamiento fuerte entre la lógica de negocio y la tecnología

## Problema que Resuelve

Sin el patrón Bridge:
Explosión de clases: Cada combinación requiere una nueva clase concreta.
Código duplicado: La lógica de cada plataforma se repite para cada tipo de notificación.
Difícil de mantener: Un cambio en una plataforma requiere modificar múltiples clases.
Imposible de escalar: Agregar una nueva plataforma o tipo requiere crear/modificar decenas de clases.

## Solución Implementada
## Diagrama de clases
![Diagrama de Clases](https://drive.google.com/uc?export=view&id=1u_sqvpyoM4Js0HIwKl8F8YMbih7_amaE)

## Instalación

```bash
npm install
```

## Ejecución

### Modo desarrollo
```bash
npm run dev
```

### Compilar y ejecutar
```bash
npm run build
npm start
```

## Comandos disponibles

- `npm run build` - Compila el proyecto TypeScript
- `npm start` - Ejecuta el proyecto compilado
- `npm run dev` - Ejecuta en modo desarrollo con ts-node


## Estructura de Carpetas

```
src/
├── interfaces/           # Contratos e interfaces
│   └── Plataforma.ts    # Interfaz del patrón Bridge (Implementación)
│
├── abstractions/         # Abstracciones del patrón Bridge
│   ├── Notificacion.ts  # Clase abstracta base
│   └── TiposNotificacion.ts  # Implementaciones concretas (Mensaje, Alerta, etc.)
│
├── implementations/      # Implementaciones concretas de interfaces
│   └── Plataformas.ts   # Plataformas concretas (Escritorio, Móvil, Web)
│
├── examples/            # Ejemplos de uso
│   └── demo.ts          # Demostración del patrón Bridge
│
├── index.ts             # Exportaciones públicas del módulo
└── main.ts              # Punto de entrada de la aplicación
```

---

##  Capas de la Arquitectura

### 1. **Interfaces** (`interfaces/`)
- Define contratos sin implementación
- Bajo acoplamiento entre capas
- **Ejemplo:** `Plataforma.ts`

### 2. **Abstracciones** (`abstractions/`)
- Clases abstractas y refinadas del patrón Bridge
- Lado de la abstracción del patrón
- **Ejemplo:** `Notificacion.ts`, `TiposNotificacion.ts`

### 3. **Implementaciones** (`implementations/`)
- Implementaciones concretas de interfaces
- Lado de la implementación del patrón Bridge
- **Ejemplo:** `Plataformas.ts`

### 4. **Ejemplos** (`examples/`)
- Casos de uso y demostraciones
- No forma parte del core del sistema
- **Ejemplo:** `demo.ts`

## Beneficios de esta Arquitectura

### 1. **Facilita el mantenimiento**
* Agregar una nueva plataforma solo requiere crear **1 clase** que implemente `Plataforma`
* Agregar un nuevo tipo de notificación solo requiere crear **1 clase** que extienda `Notificacion`

### 2. **Mejor organización del código**
* La lógica de negocio (tipos de notificaciones) está separada de los detalles técnicos (plataformas)
* Cada plataforma encapsula su propia lógica de conexión y validación

### 3. **Reduce la complejidad del sistema**
* Evita la explosión combinatoria de clases
* Elimina código duplicado entre implementaciones

### 4. **Promueve la reutilización**
* Una misma notificación puede enviarse por cualquier plataforma
* Una misma plataforma puede enviar cualquier tipo de notificación

### 5. **Facilita las pruebas**
* Puedes probar tipos de notificaciones independientemente de las plataformas
* Puedes probar plataformas independientemente de los tipos

## Mejores Prácticas Aplicadas

- **Separación de responsabilidades** - Cada archivo una responsabilidad
- **Principio SOLID** - SRP, OCP, DIP
- **Barrel Exports** - Exports organizados con index.ts
- **Estructura modular** - Código en carpetas lógicas
- **Type Safety** - TypeScript estricto
- **Clean Code** - Nombres descriptivos, funciones pequeñas

###  Relación Bridge
La composición entre `Notificacion` y `Plataforma` es el **puente** que permite:
- Cambiar plataformas en tiempo de ejecución
- Agregar tipos sin modificar plataformas
- Agregar plataformas sin modificar tipos

### Ventajas Visualizadas
- **Sin Bridge**: 3 tipos × 4 plataformas = 12 clases
- **Con Bridge**: 3 + 4 + 1 base = 8 clases principales
