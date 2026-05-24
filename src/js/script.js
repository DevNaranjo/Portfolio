document.addEventListener('DOMContentLoaded', () => {
    // 1. Navegación Activa Dinámica
    const currentPath = window.location.pathname;
    const pageName = currentPath.substring(currentPath.lastIndexOf('/') + 1);
    
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (pageName === linkPath || (pageName === '' && linkPath === 'index.html')) {
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

    // 3. Copiado de Correo al Portapapeles
    setupEmailCopy();

    // 4. Formulario de Contacto Animado e Interactivo
    setupContactForm();

    // 5. Configuración de Modo Oscuro (Alternancia y Persistencia)
    setupThemeToggle();

    setupPrivateTemplateShortcut();
});

/**
 * Simula el comportamiento de la aplicación Habitly por consola.
 */
function runTerminalSimulation(element) {
    const lines = [
        "c:\\Users\\iriom\\Habitly> java com.habitly.ui.Habitly",
        "[INFO] Cargando módulo Habitly - Gestión de Alquileres (Java SE 17)...",
        "[INFO] Inicializando base de datos binaria serializada...",
        "[OK] Datos cargados con éxito.",
        "",
        "========================================",
        "       BIENVENIDO A HABITLY (v1.0 OFICIAL)",
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
    const terminalWindow = document.querySelector('.terminal-window');
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
                response: "2\n\nCerrando sesión de invitado...\n¡Hasta pronto!\n\n========================================\n       BIENVENIDO A HABITLY (v1.0 OFICIAL)\n========================================\n1. Registrarme como PROPIETARIO\n2. Registrarme como INQUILINO\n3. Acceder como INVITADO (Solo lectura)\n4. Acceder con mi DNI (Login)\n0. Salir de la aplicación\n----------------------------------------\n¿Cómo quieres empezar hoy?: _",
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
                response: "10\n\nGuardando cambios y cerrando sesión...\n¡Hasta pronto, IRIOME NARANJO!\n\n========================================\n       BIENVENIDO A HABITLY (v1.0 OFICIAL)\n========================================\n1. Registrarme como PROPIETARIO\n2. Registrarme como INQUILINO\n3. Acceder como INVITADO (Solo lectura)\n4. Acceder con mi DNI (Login)\n0. Salir de la aplicación\n----------------------------------------\n¿Cómo quieres empezar hoy?: _",
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
 * Gestiona el copiado del correo al portapapeles para evitar problemas con clientes de mail locales.
 */
function setupEmailCopy() {
    const emailLink = document.getElementById('contact-mail');
    if (!emailLink) return;

    // Crear el Toast en el documento
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.innerHTML = '<span>✉</span> ¡Correo copiado al portapapeles!';
    document.body.appendChild(toast);

    emailLink.addEventListener('click', (e) => {
        e.preventDefault(); // Evitar abrir aplicaciones externas
        const emailAddress = "inaranjordgz@gmail.com";

        // Usar la función robusta de copiado
        copyTextToClipboard(emailAddress).then(() => {
            // Mostrar Toast
            toast.classList.add('show');
            
            // Ocultar Toast tras 3 segundos
            setTimeout(() => {
                toast.classList.remove('show');
            }, 3000);
        }).catch(err => {
            console.error('Error al copiar correo: ', err);
            // Fallback extremo: si todo falla, abrimos el mailto
            window.location.href = `mailto:${emailAddress}`;
        });
    });
}

/**
 * Agrega animaciones y estados de carga/éxito interactivos al formulario de contacto.
 */
function setupContactForm() {
    const form = document.querySelector('.contact-form');
    if (!form) return;

    const card = document.getElementById('contact-card');
    const submitBtn = document.getElementById('btn-submit-contact');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); 

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

    toggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        let newTheme = 'light';
        if (currentTheme !== 'dark') {
            newTheme = 'dark';
        }
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
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
        "c:\\Users\\iriom\\Propinas> java com.tipcalc.Main",
        "[INFO] Inicializando Calculadora de Propinas e Impuestos (Java SE 17)...",
        "[OK] Módulo cargado correctamente.",
        "",
        "Introduce el total de la cuenta (EUR): _"
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
            } else if (lineText.startsWith("[OK]")) {
                lineText = `<span style="color: var(--accent-sage); font-weight: bold;">${lineText}</span>`;
            }

            element.innerHTML += lineText + "\n";
            currentLine++;
            
            let delay = 120;
            if (currentLine === 1) delay = 250;
            if (currentLine > 2) delay = 40;
            
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
            label: "Simular Cuenta 52.50€ (3 comensales / 15% propina)", 
            response: "52.50\nIntroduce el porcentaje de propina (ej. 10, 15, 20): 15\nIntroduce el número de personas: 3\n\n========================================\n           TICKET DE COMPRA\n========================================\nCuenta Base:        52.50 EUR\nPropina (15.0%):     7.88 EUR\nTotal General:      60.38 EUR\n----------------------------------------\nComensales:         3 personas\nPago por Persona:   20.13 EUR\n========================================\n\nIntroduce el total de la cuenta (EUR): _"
        },
        { 
            label: "Simular Cuenta 120.00€ (5 comensales / 10% propina)", 
            response: "120.00\nIntroduce el porcentaje de propina (ej. 10, 15, 20): 10\nIntroduce el número de personas: 5\n\n========================================\n           TICKET DE COMPRA\n========================================\nCuenta Base:       120.00 EUR\nPropina (10.0%):    12.00 EUR\nTotal General:     132.00 EUR\n----------------------------------------\nComensales:         5 personas\nPago por Persona:   26.40 EUR\n========================================\n\nIntroduce el total de la cuenta (EUR): _"
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