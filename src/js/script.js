document.addEventListener('DOMContentLoaded', () => {
    // 1. Navegación Activa Dinámica
    const currentPath = window.location.pathname;
    const pageName = currentPath.substring(currentPath.lastIndexOf('/') + 1);
    
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        const isProjectDetail = pageName.startsWith('proyecto-') && linkPath === 'proyectos.html';
        if (pageName === linkPath || (pageName === '' && linkPath === 'index.html') || isProjectDetail) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // 2. Simuladores de Terminal de Java (Interactivos)
    const habitlyTerminal = document.querySelector('#terminal-simulator .terminal-body pre');
    if (habitlyTerminal) {
        runTerminalSimulation(habitlyTerminal);
    }

    const calculatorTerminal = document.querySelector('#terminal-calculator .terminal-body pre');
    if (calculatorTerminal) {
        runCalculatorSimulation(calculatorTerminal);
    }

    // 3. Copiado de Correo y Teléfono al Portapapeles
    setupEmailCopy();
    setupPhoneCopy();

    // 4. Formulario de Contacto Animado e Interactivo
    setupContactForm();

    // 5. Configuración de Modo Oscuro (Alternancia y Persistencia)
    setupThemeToggle();

    setupPrivateTemplateShortcut();
    setupProjectDetailsZoom();
    initConsentManagement();
    setupMobileMenu();
});

/**
 * Configura el menú de navegación móvil colapsable (hamburguesa).
 */
function setupMobileMenu() {
    const nav = document.querySelector('.container.nav');
    const navLinks = document.querySelector('.nav-links');
    
    if (nav && navLinks) {
        // Crear el botón toggle dinámicamente
        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'nav-toggle';
        toggleBtn.setAttribute('aria-label', 'Abrir menú de navegación');
        toggleBtn.setAttribute('aria-expanded', 'false');
        toggleBtn.innerHTML = '<span class="hamburger"></span>';
        
        // Insertarlo antes de los enlaces
        nav.insertBefore(toggleBtn, navLinks);
        
        // Obtener elementos del desplegable de proyectos
        const dropdown = navLinks.querySelector('.dropdown');
        const dropbtn = navLinks.querySelector('.dropbtn');

        // Manejar el clic del menú hamburguesa
        toggleBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isActive = toggleBtn.classList.toggle('active');
            navLinks.classList.toggle('active');
            toggleBtn.setAttribute('aria-expanded', isActive);
            toggleBtn.setAttribute('aria-label', isActive ? 'Cerrar menú de navegación' : 'Abrir menú de navegación');
        });

        // Prevenir navegación del botón principal de Proyectos e interceptarlo en móvil
        if (dropdown && dropbtn) {
            dropbtn.addEventListener('click', (e) => {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    e.stopPropagation();
                    dropdown.classList.toggle('open');
                }
            });
        }
        
        // Cerrar al hacer clic fuera del menú
        document.addEventListener('click', (e) => {
            if (!nav.contains(e.target) && navLinks.classList.contains('active')) {
                toggleBtn.classList.remove('active');
                navLinks.classList.remove('active');
                toggleBtn.setAttribute('aria-expanded', 'false');
                toggleBtn.setAttribute('aria-label', 'Abrir menú de navegación');
                
                if (dropdown) {
                    dropdown.classList.remove('open');
                }
            }
        });

        // Cerrar el menú al pulsar la tecla Escape (Accesibilidad)
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navLinks.classList.contains('active')) {
                toggleBtn.classList.remove('active');
                navLinks.classList.remove('active');
                toggleBtn.setAttribute('aria-expanded', 'false');
                toggleBtn.setAttribute('aria-label', 'Abrir menú de navegación');
                toggleBtn.focus();
                
                if (dropdown) {
                    dropdown.classList.remove('open');
                }
            }
        });
    }
}


/**
 * Simula el comportamiento de la aplicación Habitly por consola.
 */
function runTerminalSimulation(element) {
    const lines = [
        "c:\\Users\\DevNaranjo\\Habitly> java com.habitly.ui.Habitly",
        "[INFO] Cargando módulo Habitly - Gestión de Alquileres (Java SE 17)...",
        "[INFO] Inicializando base de datos binaria serializada...",
        "[OK] Datos cargados con éxito.",
        "",
        "========================================",
        "       BIENVENIDO A HABITLY",
        "========================================",
        "1. Registrarme como PROPIETARIO",
        "2. Registrarme como INQUILINO",
        "3. Acceder como INVITADO (Solo lectura)",
        "4. Acceder con mi DNI (Login)",
        "0. Salir de la aplicación",
        "----------------------------------------",
        "¿Cómo quieres empezar hoy?: _"
    ];

    let currentLine = 0;
    element.innerHTML = "";

    function typeLine() {
        if (currentLine < lines.length) {
            let lineText = lines[currentLine];
            
            if (lineText.startsWith("c:\\Users")) {
                lineText = `<span style="color: var(--accent-sage)">${lineText}</span>`;
            } else if (lineText.startsWith("[INFO]")) {
                lineText = `<span style="color: var(--accent-blue)">${lineText}</span>`;
            } else if (lineText.startsWith("[AVISO]")) {
                lineText = `<span style="color: var(--accent-rose); font-weight: bold;">${lineText}</span>`;
            } else if (lineText.startsWith("[OK]")) {
                lineText = `<span style="color: var(--accent-sage); font-weight: bold;">${lineText}</span>`;
            } else if (lineText.includes("BIENVENIDO A HABITLY")) {
                lineText = `<span style="color: var(--accent-rose); font-weight: bold;">${lineText}</span>`;
            }

            element.innerHTML += lineText + "\n";
            currentLine++;
            
            let delay = 120;
            if (currentLine === 1) delay = 250;
            if (currentLine > 4) delay = 40;
            
            element.scrollTop = element.scrollHeight;
            setTimeout(typeLine, delay);
        } else {
            addInteractivePrompt(element, "INITIAL");
        }
    }

    setTimeout(typeLine, 300);
}

function addInteractivePrompt(element, state) {
    const terminalWindow = element.closest('.terminal-window');
    if (!terminalWindow) return;
    
    // Si ya existen controles, no duplicarlos
    const oldControls = terminalWindow.querySelector('.terminal-controls');
    if (oldControls) oldControls.remove();

    const controls = document.createElement('div');
    controls.className = 'terminal-controls';
    controls.style.padding = '15px 24px';
    controls.style.backgroundColor = '#2D2D34';
    controls.style.borderTop = '1px solid #1E1E24';
    controls.style.display = 'flex';
    controls.style.gap = '10px';
    controls.style.flexWrap = 'wrap';
    
    let options = [];
    
    if (state === "INITIAL") {
        options = [
            { 
                label: "3. Acceder como Invitado", 
                val: "3", 
                response: "3\n\nMODO INVITADO ACTIVADO (Privilegios limitados)\n\n=======================================================\n  HABITLY - SESIÓN INVITADO: INVITADO TEMPORAL\n=======================================================\n1. Consultar inventario detallado\n2. Salir\n-------------------------------------------------------\nSeleccione una operación (1-2): _",
                nextState: "GUEST"
            },
            { 
                label: "4. Iniciar Sesión (Propietario)", 
                val: "4", 
                response: "4\nIntroduzca su DNI para acceder: 12345678X\n\nAcceso concedido. Bienvenido, IRIOME NARANJO\n\n=======================================================\n  HABITLY - SESIÓN PROPIETARIO: IRIOME NARANJO\n=======================================================\n1. Gestión de usuarios y perfiles\n2. Registrar nueva vivienda\n3. Consultar inventario detallado\n4. Registrar cobro de mensualidad\n5. REGISTRAR FACTURA/SUMINISTRO\n6. ELIMINAR VIVIENDA\n7. DASHBOARD DE BENEFICIO TOTAL\n8. GESTIÓN DE CONTRATOS Y LEGAL\n9. Actualización de precios (IPC)\n10. Salir y Guardar\n11. Borrar datos (Reset de fábrica)\n12. Listar mis viviendas\n-------------------------------------------------------\nSeleccione una operación (1-12): _",
                nextState: "PROPRIETOR" 
            },
            { 
                label: "0. Salir", 
                val: "0", 
                response: "0\n\n¡Gracias por usar Habitly! Cerrando...\n[Proceso finalizado con código de salida 0]",
                nextState: "EXITED" 
            }
        ];
    } else if (state === "GUEST") {
        options = [
            { 
                label: "1. Consultar Inventario", 
                val: "1", 
                response: "1\n\nID | ESTADO | DIRECCIÓN | TIPO | M2 | EUR/M2\n1 | ALQUILADO | Calle Mayor 12, 2A | Piso | 85 | 10.50\n2 | DISPONIBLE | Avenida de Canarias 45 | Casa | 120 | 8.75\n3 | ALQUILADO | Calle Triana 8, 4B | Piso | 65 | 12.00\n-------------------------------------------------------\nSeleccione una operación (1-2): _",
                nextState: "GUEST"
            },
            { 
                label: "2. Salir (Cerrar Sesión)", 
                val: "2", 
                response: "2\n\nCerrando sesión de invitado...\n¡Hasta pronto!\n\n========================================\n       BIENVENIDO A HABITLY\n========================================\n1. Registrarme como PROPIETARIO\n2. Registrarme como INQUILINO\n3. Acceder como INVITADO (Solo lectura)\n4. Acceder con mi DNI (Login)\n0. Salir de la aplicación\n----------------------------------------\n¿Cómo quieres empezar hoy?: _",
                nextState: "INITIAL"
            }
        ];
    } else if (state === "PROPRIETOR") {
        options = [
            { 
                label: "3. Consultar Inventario", 
                val: "3", 
                response: "3\n\nID | ESTADO | DIRECCIÓN | TIPO | M2 | EUR/M2\n1 | ALQUILADO | Calle Mayor 12, 2A | Piso | 85 | 10.50\n2 | DISPONIBLE | Avenida de Canarias 45 | Casa | 120 | 8.75\n3 | ALQUILADO | Calle Triana 8, 4B | Piso | 65 | 12.00\n-------------------------------------------------------\nSeleccione una operación (1-12): _",
                nextState: "PROPRIETOR"
            },
            { 
                label: "7. Dashboard Rentabilidad", 
                val: "7", 
                response: "7\n\n========================================\n    DASHBOARD DE RENTABILIDAD\n========================================\nDirección                      | Ingresos     | Gastos       | Neto        \n------------------------------------------------------------------------\nCalle Mayor 12, 2A             |    850.00€   |    120.00€   |    730.00€  \nCalle Triana 8, 4B             |    780.00€   |     50.00€   |    730.00€  \nAvenida de Canarias 45         |      0.00€   |      0.00€   |      0.00€  \n------------------------------------------------------------------------\nTOTAL GENERAL                  |   1630.00€   |    170.00€   |   1460.00€  \n========================================\n-------------------------------------------------------\nSeleccione una operación (1-12): _",
                nextState: "PROPRIETOR"
            },
            { 
                label: "8. Compliance Legal (Contratos)", 
                val: "8", 
                response: "8\n\n===========================================\n   HABITLY - GESTIÓN DE CONTRATOS Y LEGAL\n===========================================\n1. Formalizar nuevo contrato de alquiler\n2. Consultar contratos activos\n3. Asignar límite IRAV a vivienda\n4. Aplicar actualización anual (IRAV)\n5. Registrar depósito de fianza (ICAVI)\n6. Ver fianzas pendientes de depósito\n7. Dashboard de cumplimiento legal\n8. Volver\n-------------------------------------------\nSeleccione una operación (1-8): 7\n\n========================================\n     DASHBOARD DE CUMPLIMIENTO LEGAL\n========================================\nTotal Contratos Activos:            2\nFianzas Pendientes de Depósito:    1\n  -> Fuera de plazo legal (>30d):   0\nContratos Próximos a Vencer (<4m):  1\n----------------------------------------\n[⚠️ ALERTA DE VENCIMIENTO]: Contratos próximos a vencer/renovar:\n  - Contrato: C-402 (Vivienda: Calle Mayor 12, 2A). Vence el: 2026-09-15 (en 3 meses). Plazo preaviso: 4 meses.\n----------------------------------------\nNormativa aplicada: LAU 2026 + Ley 12/2023\n========================================\n-------------------------------------------------------\nSeleccione una operación (1-12): _",
                nextState: "PROPRIETOR"
            },
            { 
                label: "10. Salir y Guardar", 
                val: "10", 
                response: "10\n\nGuardando cambios y cerrando sesión...\n¡Hasta pronto, IRIOME NARANJO!\n\n========================================\n       BIENVENIDO A HABITLY\n========================================\n1. Registrarme como PROPIETARIO\n2. Registrarme como INQUILINO\n3. Acceder como INVITADO (Solo lectura)\n4. Acceder con mi DNI (Login)\n0. Salir de la aplicación\n----------------------------------------\n¿Cómo quieres empezar hoy?: _",
                nextState: "INITIAL"
            }
        ];
    }
    
    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.innerText = opt.label;
        btn.style.backgroundColor = '#1E1E24';
        btn.style.color = '#F4F6FC';
        btn.style.border = '1px solid #A9A9B3';
        btn.style.padding = '6px 14px';
        btn.style.borderRadius = '6px';
        btn.style.cursor = 'pointer';
        btn.style.fontFamily = 'var(--font-sans)';
        btn.style.fontSize = '0.85rem';
        btn.style.transition = 'var(--transition-smooth)';
        
        btn.addEventListener('mouseenter', () => {
            btn.style.borderColor = 'var(--accent-rose)';
            btn.style.color = 'var(--accent-rose)';
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.borderColor = '#A9A9B3';
            btn.style.color = '#F4F6FC';
        });
        
        btn.addEventListener('click', () => {
            element.innerHTML = element.innerHTML.replace("_", "");
            element.innerHTML += opt.response;
            element.scrollTop = element.scrollHeight;
            addInteractivePrompt(element, opt.nextState);
        });
        
        controls.appendChild(btn);
    });

    // Agregar botón de reinicio
    const resetBtn = document.createElement('button');
    resetBtn.innerText = "Reiniciar Consola";
    resetBtn.style.backgroundColor = '#1E1E24';
    resetBtn.style.color = '#F4F6FC';
    resetBtn.style.border = '1px solid #A9A9B3';
    resetBtn.style.padding = '6px 14px';
    resetBtn.style.borderRadius = '6px';
    resetBtn.style.cursor = 'pointer';
    resetBtn.style.fontFamily = 'var(--font-sans)';
    resetBtn.style.fontSize = '0.85rem';
    resetBtn.style.transition = 'var(--transition-smooth)';
    resetBtn.style.marginLeft = 'auto';
    
    resetBtn.addEventListener('mouseenter', () => {
        resetBtn.style.borderColor = 'var(--accent-sage)';
        resetBtn.style.color = 'var(--accent-sage)';
    });
    resetBtn.addEventListener('mouseleave', () => {
        resetBtn.style.borderColor = '#A9A9B3';
        resetBtn.style.color = '#F4F6FC';
    });
    
    resetBtn.addEventListener('click', () => {
        controls.remove();
        runTerminalSimulation(element);
    });
    
    controls.appendChild(resetBtn);
    terminalWindow.appendChild(controls);
}

/**
 * Copia texto al portapapeles de manera compatible con file:// (sin HTTPS) y localhost/HTTPS.
 */
function copyTextToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        return navigator.clipboard.writeText(text);
    } else {
        return new Promise((resolve, reject) => {
            try {
                const textArea = document.createElement("textarea");
                textArea.value = text;
                textArea.style.position = "fixed";
                textArea.style.top = "0";
                textArea.style.left = "0";
                textArea.style.width = "2em";
                textArea.style.height = "2em";
                textArea.style.padding = "0";
                textArea.style.border = "none";
                textArea.style.outline = "none";
                textArea.style.boxShadow = "none";
                textArea.style.background = "transparent";
                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();
                const successful = document.execCommand('copy');
                document.body.removeChild(textArea);
                if (successful) {
                    resolve();
                } else {
                    reject(new Error('No se pudo copiar el texto.'));
                }
            } catch (err) {
                reject(err);
            }
        });
    }
}

/**
 * Muestra una notificación Toast flotante con contenido HTML.
 */
let toastTimeout;
function showToast(htmlContent) {
    let toast = document.querySelector('.toast-notification');
    if (!toast) {
        toast = document.createElement('div');
        toast.className = 'toast-notification';
        document.body.appendChild(toast);
    }
    toast.innerHTML = htmlContent;
    toast.classList.add('show');
    
    if (toastTimeout) {
        clearTimeout(toastTimeout);
    }
    
    toastTimeout = setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

/**
 * Gestiona el copiado del correo al portapapeles para evitar problemas con clientes de mail locales.
 */
function setupEmailCopy() {
    // Buscar cualquier enlace de correo
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
    if (emailLinks.length === 0) return;

    emailLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Evitar abrir aplicaciones de correo locales
            const emailAddress = "inaranjordgz@gmail.com";

            // Usar la función robusta de copiado
            copyTextToClipboard(emailAddress).then(() => {
                showToast('<span>✉</span> ¡Correo copiado al portapapeles!');
            }).catch(err => {
                console.error('Error al copiar correo: ', err);
                // Fallback: abrir el mailto tradicional si falla el portapapeles
                window.location.href = `mailto:${emailAddress}`;
            });
        });
    });
}

/**
 * Gestiona el copiado del teléfono al portapapeles.
 */
function setupPhoneCopy() {
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    if (phoneLinks.length === 0) return;

    phoneLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const phoneNumber = "+34 627 328 887";

            copyTextToClipboard(phoneNumber).then(() => {
                showToast('<span>📞</span> ¡Teléfono copiado al portapapeles!');
            }).catch(err => {
                console.error('Error al copiar teléfono: ', err);
                window.location.href = `tel:+34627328887`;
            });
        });
    });
}

// Escuchar el evento pageshow para limpiar clases de animación de salida cuando se regresa con el botón de "Atrás" del navegador
window.addEventListener('pageshow', (event) => {
    const mainContainer = document.querySelector('main');
    if (mainContainer) {
        mainContainer.classList.remove('page-zoom-exit');
    }
    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => {
        card.classList.remove('project-card-zoom-exit');
    });
});

/**
 * Agrega animaciones y estados de carga/éxito interactivos al formulario de contacto.
 */
function setupContactForm() {
    const form = document.querySelector('.contact-form');
    if (!form) return;

    // Pre-rellenar mensaje si viene de la solicitud de CV
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('reason') === 'cv') {
        const messageInput = form.querySelector('#message');
        if (messageInput) {
            messageInput.value = "Hola Iriome, he visto tu portfolio y me gustaría solicitar tu CV completo en PDF para un proceso de selección.";
        }
    }

    const card = document.getElementById('contact-card');
    const submitBtn = document.getElementById('btn-submit-contact');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); 

        // Validar checkbox de privacidad
        const privacyCheckbox = form.querySelector('#privacy');
        if (privacyCheckbox && !privacyCheckbox.checked) {
            alert('Debes aceptar la Política de Privacidad para poder enviar el mensaje.');
            return;
        }

        // 1. Mostrar estado de carga en el botón
        submitBtn.classList.add('btn-loading');

        // Comprobar si hay una clave de acceso real para Web3Forms
        const accessKeyInput = form.querySelector('input[name="access_key"]');
        const isDemo = !accessKeyInput || accessKeyInput.value === 'YOUR_ACCESS_KEY_HERE';

        if (isDemo) {
            // Modo Simulación de Prueba (Demo)
            setTimeout(() => {
                submitBtn.classList.remove('btn-loading');
                
                // Ocultar formulario con transición y mostrar tarjeta de éxito
                form.style.transition = 'opacity 0.3s ease';
                form.style.opacity = '0';
                
                setTimeout(() => {
                    card.innerHTML = `
                        <div class="success-card">
                            <div class="success-icon">✓</div>
                            <h3>¡Mensaje enviado con éxito!</h3>
                            <p style="color: var(--text-secondary); font-size: 0.95rem;">
                                ¡Gracias por ponerte en contacto! He recibido tu mensaje de forma de prueba. Te responderé en menos de 24 horas.
                            </p>
                            <p style="color: var(--accent-rose); font-size: 0.8rem; font-style: italic; margin-top: 5px;">
                                Nota: El formulario está en modo simulación. Para recibir correos reales, añade tu clave de Web3Forms en contacto.html.
                            </p>
                            <button class="btn btn-secondary" onclick="window.location.reload();" style="margin-top: 15px; padding: 8px 20px; font-size: 0.85rem;">
                                Enviar otro mensaje
                            </button>
                        </div>
                    `;
                }, 300);
            }, 1500);
        } else {
            // Envío Real mediante Web3Forms API
            
            // Validar que hCaptcha esté completado
            const hCaptchaResponse = form.querySelector('[name="h-captcha-response"]');
            if (hCaptchaResponse && !hCaptchaResponse.value) {
                submitBtn.classList.remove('btn-loading');
                alert('Por favor, completa el captcha de seguridad para poder enviar el mensaje.');
                return;
            }

            const formData = new FormData(form);
            
            // Personalizar el asunto de forma dinámica con el nombre del cliente
            const clientName = formData.get('Nombre') || 'Contacto';
            formData.set('subject', `Nuevo mensaje de ${clientName} - Iriome.dev`);

            const object = Object.fromEntries(formData);
            const json = JSON.stringify(object);

            fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: json
            })
            .then(async (response) => {
                let jsonRes = await response.json();
                if (response.status == 200) {
                    submitBtn.classList.remove('btn-loading');
                    form.style.transition = 'opacity 0.3s ease';
                    form.style.opacity = '0';
                    setTimeout(() => {
                        card.innerHTML = `
                            <div class="success-card">
                                <div class="success-icon">✓</div>
                                <h3>¡Mensaje enviado con éxito!</h3>
                                <p style="color: var(--text-secondary); font-size: 0.95rem;">
                                    ¡Gracias por escribirme! El mensaje ha sido enviado correctamente a mi correo. Te responderé lo antes posible (generalmente en menos de 24 horas).
                                </p>
                                <button class="btn btn-secondary" onclick="window.location.reload();" style="margin-top: 15px; padding: 8px 20px; font-size: 0.85rem;">
                                    Enviar otro mensaje
                                </button>
                            </div>
                        `;
                    }, 300);
                } else {
                    console.log(jsonRes);
                    throw new Error(jsonRes.message || 'Error en el servidor.');
                }
            })
            .catch(error => {
                console.error(error);
                submitBtn.classList.remove('btn-loading');
                alert('Hubo un error al enviar el formulario: ' + error.message + '\nPor favor, escribe directamente a inaranjordgz@gmail.com.');
            });
        }
    });
}

/**
 * Configura el botón flotante de alternancia de tema claro/oscuro.
 */
function setupThemeToggle() {
    const toggleBtn = document.getElementById('theme-toggle');
    if (!toggleBtn) return;

    let transitionTimeout;

    toggleBtn.addEventListener('click', () => {
        // Añadir clase temporal para transición suave y gradual
        document.documentElement.classList.add('theme-transitioning');
        
        const currentTheme = document.documentElement.getAttribute('data-theme');
        let newTheme = 'light';
        if (currentTheme !== 'dark') {
            newTheme = 'dark';
        }
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);

        // Limpiar el timeout anterior si el usuario hace clic rápidamente
        if (transitionTimeout) {
            clearTimeout(transitionTimeout);
        }

        // Remover la clase después de que la transición (0.8s) se complete
        transitionTimeout = setTimeout(() => {
            document.documentElement.classList.remove('theme-transitioning');
        }, 800);
    });

}

function setupPrivateTemplateShortcut() {
    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey && e.altKey && e.code === 'KeyI') {
            e.preventDefault();
            window.location.href = 'plantilla_correo.html';
        }
    });
}


/**
 * Simula el comportamiento de la Calculadora de Propinas.
 */
function runCalculatorSimulation(element) {
    const lines = [
        `<span style="color: var(--accent-sage)">c:\\Users\\DevNaranjo\\Calculadora-Propinas&gt; java com.rivas.gestion.Main</span>`,
        `<span style="color: var(--accent-blue)">==================================================</span>`,
        `<span style="color: #FFFFFF; font-weight: bold;">            GRUPO GASTRONÓMICO RIVAS              </span>`,
        `<span style="color: #FFFFFF;">       SISTEMA DE FACTURACIÓN Y ARQUEO            </span>`,
        `<span style="color: var(--accent-blue)">==================================================</span>`,
        `Bienvenido. Siga las instrucciones en pantalla para`,
        `desglosar y dividir las cuentas de manera exacta.`,
        ``,
        `<span style="color: var(--accent-blue)">--- Nueva Mesa ---</span>`,
        `<span style="color: var(--accent-sage)">1. Ingrese el importe total de la base imponible (€): </span>_`
    ];

    let currentLine = 0;
    element.innerHTML = "";

    function typeLine() {
        if (currentLine < lines.length) {
            let lineText = lines[currentLine];
            element.innerHTML += lineText + "\n";
            currentLine++;
            
            let delay = 100;
            if (currentLine === 1) delay = 200;
            if (currentLine > 2 && currentLine < 8) delay = 30;
            if (currentLine >= 8) delay = 100;
            
            element.scrollTop = element.scrollHeight;
            setTimeout(typeLine, delay);
        } else {
            addCalculatorInteractivePrompt(element);
        }
    }

    setTimeout(typeLine, 300);
}

function addCalculatorInteractivePrompt(element) {
    const terminalWindow = document.querySelector('#terminal-calculator');
    if (!terminalWindow) return;
    
    // Si ya existen controles, no duplicarlos
    const oldControls = terminalWindow.querySelector('.terminal-controls');
    if (oldControls) oldControls.remove();

    const controls = document.createElement('div');
    controls.className = 'terminal-controls';
    controls.style.padding = '15px 24px';
    controls.style.backgroundColor = '#2D2D34';
    controls.style.borderTop = '1px solid #1E1E24';
    controls.style.display = 'flex';
    controls.style.gap = '10px';
    controls.style.flexWrap = 'wrap';
    
    const options = [
        { 
            label: "Simular Cuenta 52.50€ (3 comensales / 15% propina / IVA)", 
            response: "52.50\n<span style=\"color: var(--accent-sage)\">2. Seleccione el tipo de impuesto aplicable:</span>\n   [1] IGIC (7%)\n   [2] IVA (21%)\n<span style=\"color: var(--accent-sage)\">Selección (1 o 2): </span>2\n<span style=\"color: var(--accent-sage)\">3. Seleccione el porcentaje de propina (0%, 5%, 10%, 15%): </span>15\n<span style=\"color: var(--accent-sage)\">4. Ingrese el número de comensales entre los que dividir la cuenta: </span>3\n\n<span style=\"color: var(--accent-blue)\">===============================================</span>\n<span style=\"color: #FFFFFF; font-weight: bold;\">            GRUPO GASTRONÓMICO RIVAS           </span>\n<span style=\"color: #FFFFFF;\">               TICKET DE CIERRE                </span>\n<span style=\"color: var(--accent-blue)\">===============================================</span>\nSubtotal (Base Imponible):             52,50 €\nImpuestos (IVA 21,00%):                11,03 €\nPropina (15%):                          7,88 €\n<span style=\"color: var(--accent-blue)\">-----------------------------------------------</span>\n<span style=\"color: var(--accent-sage); font-weight: bold;\">TOTAL DE LA FACTURA:                   71,41 €</span>\n<span style=\"color: var(--accent-blue)\">===============================================</span>\nComensales:                                  3\n<span style=\"color: var(--accent-blue)\">-----------------------------------------------</span>\n<span style=\"color: #FFFFFF; font-weight: bold;\">Detalle de pago por comensal:</span>\n  1 comensal paga:                     23,81 €\n  2 comensales pagan:                  23,80 € cada uno\n<span style=\"color: var(--accent-blue)\">  (Se ha distribuido el céntimo restante del redondeo)</span>\n<span style=\"color: var(--accent-blue)\">-----------------------------------------------</span>\nSuma total de los comensales:          71,41 €\n<span style=\"color: var(--accent-sage); font-weight: bold;\">✓ El cuadre de caja es exacto (Diferencia: 0.00 €)</span>\n<span style=\"color: var(--accent-blue)\">===============================================</span>\n\n<span style=\"color: var(--accent-sage)\">¿Desea procesar la cuenta de otra mesa? (S/N): </span>_"
        },
        { 
            label: "Simular Cuenta 120.00€ (5 comensales / 10% propina / IGIC)", 
            response: "120.00\n<span style=\"color: var(--accent-sage)\">2. Seleccione el tipo de impuesto aplicable:</span>\n   [1] IGIC (7%)\n   [2] IVA (21%)\n<span style=\"color: var(--accent-sage)\">Selección (1 o 2): </span>1\n<span style=\"color: var(--accent-sage)\">3. Seleccione el porcentaje de propina (0%, 5%, 10%, 15%): </span>10\n<span style=\"color: var(--accent-sage)\">4. Ingrese el número de comensales entre los que dividir la cuenta: </span>5\n\n<span style=\"color: var(--accent-blue)\">===============================================</span>\n<span style=\"color: #FFFFFF; font-weight: bold;\">            GRUPO GASTRONÓMICO RIVAS           </span>\n<span style=\"color: #FFFFFF;\">               TICKET DE CIERRE                </span>\n<span style=\"color: var(--accent-blue)\">===============================================</span>\nSubtotal (Base Imponible):            120,00 €\nImpuestos (IGIC  7,00%):                8,40 €\nPropina (10%):                         12,00 €\n<span style=\"color: var(--accent-blue)\">-----------------------------------------------</span>\n<span style=\"color: var(--accent-sage); font-weight: bold;\">TOTAL DE LA FACTURA:                  140,40 €</span>\n<span style=\"color: var(--accent-blue)\">===============================================</span>\nComensales:                                  5\n<span style=\"color: var(--accent-blue)\">-----------------------------------------------</span>\n<span style=\"color: #FFFFFF; font-weight: bold;\">Detalle de pago por comensal:</span>\n  Cada comensal paga:                  28,08 € (5 comensales)\n<span style=\"color: var(--accent-blue)\">-----------------------------------------------</span>\nSuma total de los comensales:         140,40 €\n<span style=\"color: var(--accent-sage); font-weight: bold;\">✓ El cuadre de caja es exacto (Diferencia: 0.00 €)</span>\n<span style=\"color: var(--accent-blue)\">===============================================</span>\n\n<span style=\"color: var(--accent-sage)\">¿Desea procesar la cuenta de otra mesa? (S/N): </span>_"
        }
    ];
    
    options.forEach(opt => {
        const btn = document.createElement('button');
        btn.innerText = opt.label;
        btn.style.backgroundColor = '#1E1E24';
        btn.style.color = '#F4F6FC';
        btn.style.border = '1px solid #A9A9B3';
        btn.style.padding = '6px 14px';
        btn.style.borderRadius = '6px';
        btn.style.cursor = 'pointer';
        btn.style.fontFamily = 'var(--font-sans)';
        btn.style.fontSize = '0.85rem';
        btn.style.transition = 'var(--transition-smooth)';
        
        btn.addEventListener('mouseenter', () => {
            btn.style.borderColor = 'var(--accent-rose)';
            btn.style.color = 'var(--accent-rose)';
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.borderColor = '#A9A9B3';
            btn.style.color = '#F4F6FC';
        });
        
        btn.addEventListener('click', () => {
            element.innerHTML = element.innerHTML.replace("_", "");
            element.innerHTML += opt.response;
            element.scrollTop = element.scrollHeight;
        });
        
        controls.appendChild(btn);
    });

    // Agregar botón de reinicio
    const resetBtn = document.createElement('button');
    resetBtn.innerText = "Reiniciar";
    resetBtn.style.backgroundColor = '#1E1E24';
    resetBtn.style.color = '#F4F6FC';
    resetBtn.style.border = '1px solid #A9A9B3';
    resetBtn.style.padding = '6px 14px';
    resetBtn.style.borderRadius = '6px';
    resetBtn.style.cursor = 'pointer';
    resetBtn.style.fontFamily = 'var(--font-sans)';
    resetBtn.style.fontSize = '0.85rem';
    resetBtn.style.transition = 'var(--transition-smooth)';
    resetBtn.style.marginLeft = 'auto';
    
    resetBtn.addEventListener('mouseenter', () => {
        resetBtn.style.borderColor = 'var(--accent-sage)';
        resetBtn.style.color = 'var(--accent-sage)';
    });
    resetBtn.addEventListener('mouseleave', () => {
        resetBtn.style.borderColor = '#A9A9B3';
        resetBtn.style.color = '#F4F6FC';
    });
    
    resetBtn.addEventListener('click', () => {
        controls.remove();
        runCalculatorSimulation(element);
    });
    
    controls.appendChild(resetBtn);
    terminalWindow.appendChild(controls);
}

/**
 * Agrega un efecto de zoom y desvanecimiento al hacer clic en "Ver Detalles"
 * de los proyectos para dar una transición más fluida e inmersiva.
 */
function setupProjectDetailsZoom() {
    const detailButtons = document.querySelectorAll('.project-card-actions a.btn-primary');
    detailButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const href = btn.getAttribute('href');
            if (href && href.startsWith('proyecto-')) {
                e.preventDefault();
                
                const card = btn.closest('.project-card');
                const mainContainer = document.querySelector('main');
                
                // Aplicar efectos visuales
                if (card) {
                    card.classList.add('project-card-zoom-exit');
                }
                if (mainContainer) {
                    mainContainer.classList.add('page-zoom-exit');
                }
                
                // Navegar una vez finalice la animación
                setTimeout(() => {
                    window.location.href = href;
                }, 450);
            }
        });
    });
}

/**
 * =======================================================
 * Lógica de Banner de Consentimiento y Google Consent Mode v2
 * =======================================================
 */
const GA_MEASUREMENT_ID = 'G-M8P0Z9L7Y1';
const consentKey = 'user-consent-preferences';

function initConsentManagement() {
    // Registrar el listener del pie de página y botones
    const footerCookiesLinks = document.querySelectorAll('footer a[href="politica-cookies.html"], footer a[href$="politica-cookies.html"]');
    footerCookiesLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            openConsentSettingsModal();
        });
    });

    const pageTrigger = document.getElementById('btn-trigger-cst-page');
    if (pageTrigger) {
        pageTrigger.addEventListener('click', (e) => {
            e.preventDefault();
            openConsentSettingsModal();
        });
    }

    const savedConsent = localStorage.getItem(consentKey);
    if (savedConsent) {
        try {
            const consent = JSON.parse(savedConsent);
            applyConsent(consent);
        } catch (e) {
            console.error("Error al parsear el consentimiento:", e);
            showConsentBanner();
        }
    } else {
        showConsentBanner();
    }
}

function applyConsent(consent) {
    if (typeof gtag === 'function') {
        gtag('consent', 'update', {
            'analytics_storage': consent.analytics ? 'granted' : 'denied'
        });
    }
    
    if (consent.analytics) {
        loadGoogleAnalytics();
    }
}

function loadGoogleAnalytics() {
    if (window.gaLoaded) return;
    window.gaLoaded = true;
    
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script1);
    
    const script2 = document.createElement('script');
    script2.text = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_MEASUREMENT_ID}', { 'anonymize_ip': true });
    `;
    document.head.appendChild(script2);
}

function showConsentBanner() {
    if (document.getElementById('cst-banner')) return;
    
    const banner = document.createElement('div');
    banner.id = 'cst-banner';
    banner.className = 'cst-banner';
    banner.innerHTML = `
        <div class="cst-banner-title">Preferencias de Privacidad</div>
        <div class="cst-banner-text">
            Este sitio web utiliza cookies técnicas para recordar tus preferencias de tema visual y cookies analíticas para comprender cómo navegas. Puedes aceptar todas, rechazarlas o configurar tus preferencias de forma detallada. Consulta nuestra <a href="politica-cookies.html">Política de Cookies</a> para más información.
        </div>
        <div class="cst-banner-buttons">
            <button class="btn btn-accept" id="btn-accept-all-cst">Aceptar todas</button>
            <button class="btn btn-reject" id="btn-reject-all-cst">Rechazar todas</button>
            <button class="btn btn-settings" id="btn-settings-cst">Configurar</button>
        </div>
    `;
    document.body.appendChild(banner);
    
    setTimeout(() => {
        banner.classList.add('show');
    }, 100);
    
    document.getElementById('btn-accept-all-cst').addEventListener('click', () => {
        saveConsentSetting({ analytics: true });
    });
    
    document.getElementById('btn-reject-all-cst').addEventListener('click', () => {
        saveConsentSetting({ analytics: false });
    });
    
    document.getElementById('btn-settings-cst').addEventListener('click', () => {
        openConsentSettingsModal();
    });
}

function saveConsentSetting(consent) {
    localStorage.setItem(consentKey, JSON.stringify(consent));
    applyConsent(consent);
    
    const banner = document.getElementById('cst-banner');
    if (banner) {
        banner.classList.remove('show');
        setTimeout(() => banner.remove(), 500);
    }
    
    const modal = document.getElementById('cst-modal');
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => modal.remove(), 400);
    }
}

function openConsentSettingsModal() {
    let modal = document.getElementById('cst-modal');
    if (modal) {
        modal.classList.add('show');
        return;
    }
    
    const currentConsent = localStorage.getItem(consentKey) 
        ? JSON.parse(localStorage.getItem(consentKey)) 
        : { analytics: false };
        
    modal = document.createElement('div');
    modal.id = 'cst-modal';
    modal.className = 'cst-modal';
    modal.innerHTML = `
        <div class="cst-modal-content">
            <div class="cst-modal-header">
                <div class="cst-modal-title">Ajustes de Cookies</div>
                <button class="cst-modal-close" id="btn-close-cst-modal">&times;</button>
            </div>
            <div class="cst-modal-body">
                <div class="cst-option">
                    <div class="cst-option-info">
                        <div class="cst-option-name">Cookies Técnicas (Necesarias)</div>
                        <div class="cst-option-desc">Permiten recordar preferencias de visualización como el modo claro/oscuro y garantizar el correcto funcionamiento del sitio. Siempre activas.</div>
                    </div>
                    <label class="cst-switch">
                        <input type="checkbox" checked disabled>
                        <span class="cst-slider"></span>
                    </label>
                </div>
                <div class="cst-option">
                    <div class="cst-option-info">
                        <div class="cst-option-name">Cookies de Analítica</div>
                        <div class="cst-option-desc">Recopilan información estadística anónima sobre la navegación para que podamos optimizar el rendimiento y contenido del portafolio.</div>
                    </div>
                    <label class="cst-switch">
                        <input type="checkbox" id="chk-analytics-cst" ${currentConsent.analytics ? 'checked' : ''}>
                        <span class="cst-slider"></span>
                    </label>
                </div>
            </div>
            <div class="cst-modal-footer">
                <button class="btn btn-reject" id="btn-modal-reject-all" style="flex:1;">Rechazar todas</button>
                <button class="btn btn-save" id="btn-modal-save" style="flex:1;">Guardar ajustes</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    
    setTimeout(() => {
        modal.classList.add('show');
    }, 50);
    
    document.getElementById('btn-close-cst-modal').addEventListener('click', () => {
        modal.classList.remove('show');
        if (!localStorage.getItem(consentKey) && !document.getElementById('cst-banner')) {
            showConsentBanner();
        }
    });
    
    document.getElementById('btn-modal-reject-all').addEventListener('click', () => {
        saveConsentSetting({ analytics: false });
    });
    
    document.getElementById('btn-modal-save').addEventListener('click', () => {
        const analyticsConsent = document.getElementById('chk-analytics-cst').checked;
        saveConsentSetting({ analytics: analyticsConsent });
    });
}