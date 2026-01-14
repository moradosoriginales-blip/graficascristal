# Gráficas Cristal - Sitio Web

Sitio web oficial de Gráficas Cristal, desarrollado con HTML, CSS y JavaScript puro usando Bootstrap 5.

## Descripción

Este proyecto es la versión convertida del sitio web original en React/TypeScript a tecnologías web estándar (HTML5, CSS3, JavaScript ES6+) con el framework Bootstrap 5 para el diseño responsivo.

## Características

- **Diseño Minimalista Industrial**: Colores corporativos (naranja #ff6b35, negro #0a0a0a)
- **Tipografía**: Montserrat para títulos, Open Sans para cuerpo de texto
- **Responsive**: Totalmente adaptable a dispositivos móviles
- **Sin dependencias de compilación**: Listo para usar directamente
- **Compatible con GitHub Pages**: Configurado para despliegue automático

## Estructura del Proyecto

```
graficas-cristal-web/
├── index.html          # Página principal
├── 404.html            # Página de error personalizada
├── styles.css          # Estilos personalizados
├── script.js           # Funcionalidad JavaScript
├── images/             # Imágenes del sitio
│   ├── hero-banner.jpg
│   ├── banners-service.jpg
│   ├── promotional-items.jpg
│   ├── apparel-printing.jpg
│   └── vinyl-printing.jpg
└── README.md           # Este archivo
```

## Instalación y Uso Local

### Opción 1: Abrir directamente en el navegador

Simplemente abre el archivo `index.html` en tu navegador web:

```bash
# En Linux
xdg-open index.html

# En macOS
open index.html

# En Windows
start index.html
```

### Opción 2: Servidor web local (recomendado)

Puedes usar cualquier servidor web estático. Aquí algunas opciones:

#### Con Python
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

#### Con Node.js (si está instalado)
```bash
# Usando npx
npx serve .

# O usando http-server
npx http-server .
```

#### Con PHP
```bash
php -S localhost:8000
```

Después de ejecutar cualquiera de estos comandos, visita `http://localhost:8000` en tu navegador.

## Despliegue en GitHub Pages

### Método 1: Usando GitHub Actions (Automático)

1. Sube este directorio completo a un repositorio de GitHub.
2. Ve a Settings > Pages.
3. En "Source", selecciona "Deploy from a branch".
4. Selecciona la rama (usualmente "main" o "master").
5. El sitio se desplegará automáticamente.

### Método 2: Usando la rama gh-pages

1. Crea una rama llamada `gh-pages`:
   ```bash
   git checkout -b gh-pages
   ```

2. Asegúrate de que todos los archivos estén comprometidos:
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   ```

3. Empuja la rama:
   ```bash
   git push origin gh-pages
   ```

4. Ve a Settings > Pages y selecciona la rama `gh-pages`.

### Método 3: Usando la carpeta docs

1. Crea una carpeta llamada `docs` en tu repositorio.
2. Mueve todos los archivos a esa carpeta.
3. En Settings > Pages, selecciona "Deploy from a branch" y luego la carpeta `docs`.

## Personalización

### Colores

Los colores principales están definidos en `styles.css` en las variables CSS:

```css
:root {
    --accent: #ff6b35;    /* Color naranja principal */
    --foreground: #0a0a0a; /* Color negro */
    --muted-foreground: #8b8b8b; /* Color gris */
}
```

### Servicios

Para modificar los servicios, edita el array `services` en `script.js`:

```javascript
const services = [
    {
        id: "nuevo-servicio",
        name: "Nuevo Servicio",
        description: "Descripción del servicio",
        price: "S/ XX.00",
        image: "images/nueva-imagen.jpg",
        details: ["Característica 1", "Característica 2"]
    }
];
```

### Imágenes

Las imágenes deben colocarse en la carpeta `images/`. Los formatos soportados son JPG, PNG y WebP.

## Compatibilidad

- **Navegadores soportados**: Chrome, Firefox, Safari, Edge (versiones actuales)
- **Bootstrap 5.3**: Requiere navegadores con soporte ES6 moderno

## Licencia

© 2024 Gráficas Cristal. Todos los derechos reservados.

## Contacto

- **Teléfono**: +51 993 534 635
- **Email**: info@graficascristal.com
- **Ubicación**: Lima, Perú
