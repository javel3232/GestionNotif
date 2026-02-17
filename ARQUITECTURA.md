# Diagrama de clases

![Diagrama de Clases](https://drive.google.com/uc?export=view&id=1u_sqvpyoM4Js0HIwKl8F8YMbih7_amaE)


# Arquitectura del Proyecto

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

