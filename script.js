/**
 * =====================================================
 * GRÁFICAS CRISTAL - JavaScript Principal
 * =====================================================
 * 
 * Este archivo contiene toda la funcionalidad interactiva
 * del sitio web, incluyendo la renderización de servicios,
 * gestión del modal de detalles, notificaciones y más.
 * 
 * Compatible con: Vanilla JavaScript (ES6+)
 * Dependencias: Bootstrap 5.3+
 */

// =====================================================
// Datos de Servicios
// =====================================================

/**
 * Array de servicios disponibles en Gráficas Cristal.
 * Cada servicio contiene información básica, precio e imagen.
 */
const services = [
    {
        id: "banners",
        name: "Banners",
        description: "Impresión de banners de gran formato para eventos, promociones y publicidad exterior.",
        price: "Desde S/ 5.00 por m²",
        image: "images/banners-service.jpg",
        details: [
            "Hasta 2 diseños",
            "Volumen variable",
            "Acabado profesional",
            "Material resistente a la intemperie",
            "Variedad de tamaños disponibles"
        ]
    },
    {
        id: "volantes-a6",
        name: "Volantes A6",
        description: "Volantes de tamaño A6 de alta calidad, perfectos para campañas de marketing directo.",
        price: "S/ 48.00 por millar",
        image: "images/volantes_a6.png",
        details: [
            "A partir de 10 millares",
            "Papel de calidad premium",
            "Impresión nítida de colores",
            "Tamaño estándar 10.5 x 14.8 cm",
            "Ideal para distribución masiva"
        ]
    },
    {
        id: "volantes-a5",
        name: "Volantes A5",
        description: "Volantes de tamaño A5 personalizados con diseño profesional para mayor impacto.",
        price: "S/ 70.00 por millar",
        image: "images/volantes_a5.png",
        details: [
            "2, 4 ó 6 diseños diferentes",
            "Cantidad flexible según necesidades",
            "Acabado premium con brillo o mate",
            "Tamaño A5 (14.8 x 21 cm)",
            "Perfectos para promociones"
        ]
    },
    {
        id: "llaveros",
        name: "Llaveros Personalizados",
        description: "Llaveros con tu logo o diseño corporativo, ideales para souvenirs y promociones.",
        price: "S/ 460.00 por millar",
        image: "images/promotional-items.jpg",
        details: [
            "Grabado personalizado de alta calidad",
            "Material resistente y duradero",
            "Mínimo 1000 unidades",
            "Variedad de formas y colores",
            "Incluye cadena metálica"
        ]
    },
    {
        id: "lapiceros",
        name: "Lapiceros Publicitarios",
        description: "Lapiceros con impresión de logo corporativo para eventos y campañas publicitarias.",
        price: "Desde S/ 380.00 por millar",
        image: "images/pen-mockup.jpg",
        details: [
            "Tinta de calidad premium",
            "Variedad de colores disponibles",
            "Mínimo 1000 unidades",
            "Cuerpo de plástico resistente",
            "Clip metálico decorativo"
        ]
    },
    {
        id: "calendarios",
        name: "Calendarios",
        description: "Calendarios personalizados para empresas con diseño exclusivo y calidad garantizada.",
        price: "Desde S/ 45.00 por millar",
        image: "images/calendario.jpg",
        details: [
            "Diseño a medida según tu marca",
            "Impresión clara y nítida",
            "Acabado profesional de alta gama",
            "Variedad de tamaños y formatos",
            "Incluye espiral metálica"
        ]
    },
    {
        id: "almanaques",
        name: "Almanaques 50x35",
        description: "Almanaques de gran formato 50x35 cm ideales para promociones y publicidad.",
        price: "Desde S/ 395.00 por millar",
        image: "images/almanaque.jpg",
        details: [
            "Tamaño estándar profesional",
            "Impresión de alta calidad",
            "Cantidad variable según besoin",
            "Papel couché de Gramaje alto",
            "Acabado con ojetes metálicos"
        ]
    },
    {
        id: "etiquetas",
        name: "Etiquetas Adhesivas",
        description: "Etiquetas adhesivas personalizadas para productos, packaging y promociones.",
        price: "Según medida",
        image: "images/etiquetas.png",
        details: [
            "Medidas personalizadas",
            "Adhesivo resistente y duradero",
            "Diseño personalizado a tu marca",
            "Variedad de materiales disponibles",
            "Acabado brillante o mate"
        ]
    },
    {
        id: "polos",
        name: "Polos con Logo",
        description: "Polos personalizados con tu logo impreso mediante serigrafía de alta calidad.",
        price: "S/ 5.00 a partir de 1000 unidades",
        image: "images/apparel-printing.jpg",
        details: [
            "Impresión nítida y duradera",
            "Colores variados disponibles",
            "Mínimo 1000 unidades por diseño",
            "Algodón de alta calidad",
            "Variedad de tallas"
        ]
    },
    {
        id: "camisas",
        name: "Camisas Personalizadas",
        description: "Camisas con impresión según cantidad, ideales para uniformes corporativos.",
        price: "Según cantidad",
        image: "images/camisa.png",
        details: [
            "Diseño a medida para tu empresa",
            "Cantidad flexible de pedido",
            "Acabado profesional garantizado",
            " Tejidos de primera calidad",
            "Opciones de cuello y manga"
        ]
    },
    {
        id: "gorros",
        name: "Gorros Publicitarios",
        description: "Gorros personalizados con tu marca para eventos deportivos y promociones.",
        price: "Según cantidad",
        image: "images/gorro.png",
        details: [
            "Material de calidad premium",
            "Impresión resistente al lavado",
            "Cantidad variable disponible",
            "Diseño regulable",
            "Colores corporativos disponibles"
        ]
    },
    {
        id: "viniles",
        name: "Viniles y Decals",
        description: "Viniles en font y decals personalizados para vehículos, cristales y superficies.",
        price: "Según medida",
        image: "images/vinyl-printing.jpg",
        details: [
            "Medidas personalizadas",
            "Colores vibrantes y duraderos",
            "Adhesión resistente y duradera",
            "Aplicación en diversas superficies",
            "Acabado profesional garantizado"
        ]
    }
];

// =====================================================
// Elementos del DOM
// =====================================================

/**
 * Referencias a elementos del DOM utilizados en la aplicación.
 */
const elements = {
    servicesGrid: document.getElementById('services-grid'),
    serviceModal: document.getElementById('serviceModal'),
    modalTitle: document.getElementById('modalTitle'),
    modalDescription: document.getElementById('modalDescription'),
    modalPrice: document.getElementById('modalPrice'),
    modalDetails: document.getElementById('modalDetails'),
    toastContainer: document.querySelector('.toast-container')
};

// =====================================================
// Inicialización del DOM
// =====================================================

/**
 * Inicializa la aplicación cuando el DOM está listo.
 */
document.addEventListener('DOMContentLoaded', function() {
    initializeServices();
    initializeNavigation();
    initializeThemeToggle();
    observeScrollAnimations();
});

/**
 * Renderiza las tarjetas de servicios en el DOM.
 */
function initializeServices() {
    if (!elements.servicesGrid) {
        console.error('El contenedor de servicios no se encontró en el DOM');
        return;
    }

    elements.servicesGrid.innerHTML = services.map(service => createServiceCard(service)).join('');
    
    // Añadir event listeners a las tarjetas de servicio
    document.querySelectorAll('.service-card').forEach(card => {
        card.addEventListener('click', handleServiceClick);
        card.addEventListener('mouseenter', handleServiceMouseEnter);
        card.addEventListener('mouseleave', handleServiceMouseLeave);
    });
}

/**
 * Crea el HTML para una tarjeta de servicio.
 * @param {Object} service - Objeto con los datos del servicio.
 * @returns {string} HTML de la tarjeta de servicio.
 */
function createServiceCard(service) {
    return `
        <div class="col-12 col-md-6 col-lg-4" data-service-id="${service.id}">
            <div class="service-card h-100">
                <div class="service-card-image">
                    <img src="${service.image}" alt="${service.name}" loading="lazy" />
                </div>
                <div class="service-card-content">
                    <h3 class="service-card-title">${service.name}</h3>
                    <p class="service-card-description">${service.description}</p>
                    <div class="service-card-footer">
                        <span class="service-card-price">${service.price}</span>
                        <svg class="service-card-arrow" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// =====================================================
// Manejadores de Eventos de Servicios
// =====================================================

/**
 * Maneja el clic en una tarjeta de servicio.
 * @param {Event} event - Evento de clic.
 */
function handleServiceClick(event) {
    const card = event.currentTarget;
    const serviceId = card.closest('[data-service-id]').dataset.serviceId;
    const service = services.find(s => s.id === serviceId);
    
    if (service) {
        openServiceModal(service);
    }
}

/**
 * Maneja el evento mouseenter en una tarjeta de servicio.
 * @param {Event} event - Evento mouseenter.
 */
function handleServiceMouseEnter(event) {
    event.currentTarget.classList.add('hovered');
}

/**
 * Maneja el evento mouseleave en una tarjeta de servicio.
 * @param {Event} event - Evento mouseleave.
 */
function handleServiceMouseLeave(event) {
    event.currentTarget.classList.remove('hovered');
}

// =====================================================
// Funciones del Modal
// =====================================================

/**
 * Abre el modal con los detalles de un servicio.
 * @param {Object} service - Objeto con los datos del servicio.
 */
function openServiceModal(service) {
    if (!elements.serviceModal) {
        console.error('El modal de servicio no se encontró en el DOM');
        return;
    }

    // Actualizar contenido del modal
    if (elements.modalTitle) {
        elements.modalTitle.textContent = service.name;
    }
    
    if (elements.modalDescription) {
        elements.modalDescription.textContent = service.description;
    }
    
    if (elements.modalPrice) {
        elements.modalPrice.textContent = service.price;
    }
    
    if (elements.modalDetails) {
        elements.modalDetails.innerHTML = service.details
            .map(detail => `<li class="d-flex align-items-center gap-2"><span class="bg-accent rounded-circle" style="width: 8px; height: 8px; flex-shrink: 0;"></span><span class="text-muted">${detail}</span></li>`)
            .join('');
    }

    // Abrir modal usando Bootstrap
    const bootstrapModal = new bootstrap.Modal(elements.serviceModal);
    bootstrapModal.show();
}

// =====================================================
// Navegación
// =====================================================

/**
 * Inicializa la navegación suave y el comportamiento del menú.
 */
function initializeNavigation() {
    // Smooth scrolling para enlaces de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Cerrar menú colapsable en móviles
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                    bootstrap.Collapse.getInstance(navbarCollapse)?.hide();
                }
            }
        });
    });

    // Cerrar menú al hacer clic fuera
    document.addEventListener('click', function(e) {
        const navbar = document.querySelector('.navbar');
        const navbarCollapse = document.querySelector('.navbar-collapse');
        
        if (navbarCollapse && 
            navbarCollapse.classList.contains('show') && 
            !navbar.contains(e.target)) {
            bootstrap.Collapse.getInstance(navbarCollapse)?.hide();
        }
    });
}

// =====================================================
// Tema Oscuro/Claro
// =====================================================

/**
 * Inicializa la funcionalidad del tema oscuro/claro.
 */
function initializeThemeToggle() {
    // Verificar preferencia guardada
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.documentElement.setAttribute('data-bs-theme', 'dark');
    }

    // Escuchar cambios en la preferencia del sistema
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (!localStorage.getItem('theme')) {
            document.documentElement.setAttribute('data-bs-theme', e.matches ? 'dark' : 'light');
        }
    });
}

// =====================================================
// Animaciones al Scroll
// =====================================================

/**
 * Configura las animaciones que se activan al hacer scroll.
 */
function observeScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observar elementos que deben animarse
    document.querySelectorAll('.service-card, .contact-card, .geometric-line').forEach(el => {
        el.style.opacity = '0';
        el.style.animationDelay = '0.1s';
        observer.observe(el);
    });
}

// =====================================================
// Solicitud de Cotización
// =====================================================

/**
 * Maneja la acción de solicitar una cotización.
 * Muestra un toast de información para el usuario.
 */
function handleQuoteRequest() {
    showToast(
        'Solicitar Cotización',
        'Próximamente disponible. Por favor, contáctanos directamente por teléfono o email.',
        'info'
    );
}

// =====================================================
// Sistema de Notificaciones (Toast)
// =====================================================

/**
 * Muestra una notificación toast.
 * @param {string} title - Título del toast.
 * @param {string} message - Mensaje del toast.
 * @param {string} type - Tipo de toast (success, error, warning, info).
 */
function showToast(title, message, type = 'info') {
    if (!elements.toastContainer) {
        console.warn('Contenedor de toasts no encontrado');
        return;
    }

    // Determinar clase de icono según el tipo
    const icons = {
        success: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
        error: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" x2="9" y1="9" y2="15"/><line x1="9" x2="15" y1="9" y2="15"/></svg>',
        warning: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" x2="12" y1="9" y2="13"/><line x1="12" x2="12.01" y1="17" y2="17"/></svg>',
        info: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="16" y2="12"/><line x1="12" x2="12.01" y1="8" y2="8"/></svg>'
    };

    const bgColors = {
        success: 'var(--accent)',
        error: 'var(--destructive)',
        warning: '#ffc107',
        info: 'var(--accent)'
    };

    const toastId = 'toast-' + Date.now();
    const toastHTML = `
        <div id="${toastId}" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header" style="background-color: ${bgColors[type]}; color: white;">
                <span class="me-2">${icons[type] || icons.info}</span>
                <strong class="me-auto">${title}</strong>
                <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast" aria-label="Cerrar"></button>
            </div>
            <div class="toast-body">
                ${message}
            </div>
        </div>
    `;

    elements.toastContainer.insertAdjacentHTML('beforeend', toastHTML);

    const toastElement = document.getElementById(toastId);
    if (toastElement) {
        const toast = new bootstrap.Toast(toastElement, {
            autohide: true,
            delay: 5000
        });
        toast.show();

        // Eliminar el toast del DOM después de ocultarse
        toastElement.addEventListener('hidden.bs.toast', () => {
            toastElement.remove();
        });
    }
}

// =====================================================
// Utilidades
// =====================================================

/**
 * Debounce function para optimizar eventos de scroll y resize.
 * @param {Function} func - Función a ejecutar.
 * @param {number} wait - Tiempo de espera en milisegundos.
 * @returns {Function} Función con debounce aplicado.
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Verifica si un elemento está visible en el viewport.
 * @param {HTMLElement} element - Elemento a verificar.
 * @returns {boolean} True si el elemento es visible.
 */
function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// =====================================================
// Console Logging Personalizado
// =====================================================

// Mensaje de bienvenida en la consola
console.log(
    '%cGráficas Cristal',
    'color: #ff6b35; font-size: 24px; font-weight: bold;'
);
console.log(
    '%cSitio web desarrollado con HTML, CSS y JavaScript puro.',
    'color: #0a0a0a; font-size: 14px;'
);
