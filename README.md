# SGV Landing Page

Landing page moderna y profesional para la clínica veterinaria SGV (Sistema de Gestión Veterinaria).

## 🚀 Tecnologías

- **Astro** - Framework para sitios estáticos
- **TailwindCSS** - Framework de utilidades CSS
- **GSAP** - Animaciones avanzadas
- **Lucide React** - Iconos SVG

## 📦 Instalación

```bash
npm install
```

## 🛠️ Desarrollo

```bash
npm run dev
```

## 🔧 Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto con la siguiente variable:

```env
# URL de la aplicación web (redirige directamente al login)
PUBLIC_LINK_APP=https://app.example.com
```

**Nota:** Todas las variables de entorno públicas en Astro deben tener el prefijo `PUBLIC_` para estar disponibles en el cliente.

### Variable disponible:

- `PUBLIC_LINK_APP` - URL de la aplicación web. Todos los botones (Agendar Cita, Ingresar, Agendar Consulta) redirigen directamente a esta URL.

Si no se define esta variable, los enlaces por defecto apuntarán a `#contacto` (sección de contacto en la misma página).

## 🏗️ Build

```bash
npm run build
```

## 👀 Preview

```bash
npm run preview
```

## 📁 Estructura del Proyecto

```
src/
├── components/     # Componentes Astro
├── config/        # Configuración (variables de entorno)
├── layouts/       # Layouts base
├── pages/         # Páginas
├── styles/        # Estilos globales
└── utils/         # Utilidades (GSAP animations)
```
