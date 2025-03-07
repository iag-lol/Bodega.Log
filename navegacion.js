// navegacion.js - Reemplaza toda la lógica de navegación anterior

document.addEventListener('DOMContentLoaded', function() {
    console.log("Inicializando navegación...");

    // 1. PRIMERO: Esconder todas las secciones excepto dashboard
    var secciones = document.querySelectorAll('section[id]');
    console.log("Secciones encontradas:", secciones.length);
    
    secciones.forEach(function(seccion) {
        if (seccion.id !== 'dashboard') {
            seccion.style.display = 'none';
        } else {
            seccion.style.display = 'block';
        }
    });

    // 2. Configurar los enlaces de navegación
    var enlaces = document.querySelectorAll('.nav-link, .mobile-nav-link');
    console.log("Enlaces de navegación encontrados:", enlaces.length);

    enlaces.forEach(function(enlace) {
        enlace.addEventListener('click', function(e) {
            e.preventDefault();
            console.log("Clic en enlace:", this.getAttribute('data-section'));
            
            // Quitar activo de todos los enlaces
            enlaces.forEach(function(el) {
                el.classList.remove('active');
            });
            
            // Activar este enlace
            this.classList.add('active');
            
            // Obtener el ID de la sección a mostrar
            var targetSeccionId = this.getAttribute('data-section');
            
            // Esconder todas las secciones
            secciones.forEach(function(seccion) {
                seccion.style.display = 'none';
            });
            
            // Mostrar la sección seleccionada
            var targetSeccion = document.getElementById(targetSeccionId);
            if (targetSeccion) {
                console.log("Mostrando sección:", targetSeccionId);
                targetSeccion.style.display = 'block';
            } else {
                console.error("No se encontró la sección:", targetSeccionId);
            }
            
            // Cerrar sidebar en móvil
            var sidebar = document.getElementById('sidebar');
            if (sidebar) {
                sidebar.classList.remove('open');
            }
        });
    });

    // 3. Botón de menú móvil
    var menuButton = document.getElementById('mobileMenuToggle');
    if (menuButton) {
        menuButton.addEventListener('click', function() {
            var sidebar = document.getElementById('sidebar');
            if (sidebar) {
                sidebar.classList.toggle('open');
            }
        });
    }

    // 4. Botón de cierre de sidebar
    var closeButton = document.getElementById('sidebarClose');
    if (closeButton) {
        closeButton.addEventListener('click', function() {
            var sidebar = document.getElementById('sidebar');
            if (sidebar) {
                sidebar.classList.remove('open');
            }
        });
    }

    console.log("Inicialización de navegación completada");
});