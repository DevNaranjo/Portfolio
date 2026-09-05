# 🧑‍💻 Portfolio Profesional — Iriome Naranjo Rodríguez

[![GitHub Pages](https://img.shields.io/badge/Live-devnaranjo.github.io%2FPortfolio-4F46E5?style=flat&logo=github)](https://devnaranjo.github.io/Portfolio)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-inaranjorodriguez-0A66C2?style=flat&logo=linkedin)](https://linkedin.com/in/inaranjorodriguez)

> Desarrollador Backend Java Junior | Estudiante de DAM  
> Junior Java Backend Developer | DAM Student

---

## 🇪🇸 Español

## 👋 Sobre el proyecto

Este repositorio contiene el código fuente de mi portfolio profesional y personal. Como estudiante de **Desarrollo de Aplicaciones Multiplataforma (DAM)**, mi objetivo profesional principal es el **desarrollo Backend en Java**, la arquitectura orientada a objetos modular y la calidad del software mediante pruebas unitarias.

Este espacio reúne mis proyectos propios de ingeniería de software, trayectoria formativa, competencias técnicas y experiencia profesional complementaria en soporte IT y automatización de procesos (RPA).

---

## 🧰 Stack tecnológico

| Área | Tecnologías |
|---|---|
| **Backend** | Java · Java SE · Programación Orientada a Objetos (POO) · Arquitectura modular |
| **Testing** | JUnit 5 · TDD (Test-Driven Development) |
| **Bases de datos** | PostgreSQL · MongoDB · SQL / NoSQL · JDBC · Hibernate (fundamentos) |
| **Control de versiones** | Git · GitHub · GitFlow |
| **Automatización (RPA)** | Power Automate Desktop (PAD) · Microsoft 365 · PowerApps · Outlook API |
| **Frontend** | HTML5 · CSS3 · JavaScript (Vanilla) |
| **Sistemas & Complementarias** | Python · Kotlin (bases v2.2) · Bash · Linux · Windows |

---

## 🚀 Proyectos destacados

### 🃏 [El Piedrero](https://devnaranjo.github.io/Portfolio/proyecto-elpiedrero.html) — Marcador Android para Ronda Canaria
Aplicación móvil nativa en **Kotlin** y **Jetpack Compose** (Material 3) diseñada bajo **Clean Architecture** y arquitectura reactiva MVI con `StateFlow`. Dispone de sincronización multijugador offline en tiempo real mediante **Sockets TCP** con cifrado **AES-256-GCM**, protección anti-replay (sequenceNumber) y vinculación P2P por escaneo de código QR (CameraX / ZXing) en red local sin servidores ni Internet. Incorpora streaming **Zero-Disk-IO** con AudioFocus nativo, accesibilidad universal **WCAG 2.1 AA/AAA** (48×48 dp), optimización **R8** (8.2 MB) y firma Release oficial compatible con MIUI/HyperOS. Publicada como proyecto Open Source bajo **Licencia MIT**. ([Ver repositorio en GitHub](https://github.com/DevNaranjo/El-Piedrero)).

### 🏠 [Habitly](https://devnaranjo.github.io/Portfolio/proyecto-habitly.html) — Software de Gestión Inmobiliaria
Aplicación de escritorio en **Java SE** con interfaz gráfica en **Java Swing** (Modo Oscuro) y arquitectura modular por capas. Incluye un motor de validación normativa parametrizable (Ley 12/2023 / LAU, límites IRAV, control de fianzas ICAVI), protección de datos personales mediante cifrado **AES-256-GCM** (PBKDF2) y cobertura de lógica de negocio crítica con pruebas automatizadas en **JUnit 5**. Proyecto propio principal que demuestra capacidades integrales de desarrollo backend y diseño de software.

### 💸 [Split It](https://devnaranjo.github.io/Portfolio/proyecto-splitit.html) — Motor de Facturación y Prorrateo
Herramienta CLI modular en **Java SE** para el desglose y distribución exacta de facturas gastronómicas, desarrollada a partir de requerimientos de negocio del sector HORECA. Garantiza precisión matemática (desviación = 0.00 €) mediante el uso estricto de **BigDecimal** y un algoritmo propio de compensación residual de céntimos entre comensales, estructurada con separación de responsabilidades (POO) y validada mediante **JUnit 5** y metodología **GitFlow**. ([Ver repositorio en GitHub](https://github.com/DevNaranjo/Split-It)).

### 🤖 [Automatización RPA de Incidencias](https://devnaranjo.github.io/Portfolio/proyecto-rpa.html)
Flujo de automatización end-to-end implementado con **Power Automate Desktop** sobre portales corporativos de soporte (**PowerApps / Microsoft 365**) y Dynamics 365 Business Central. Integra extracción automatizada de datos vía *browser automation*, scraping estructurado, filtrado dinámico por estado/fecha y envío de comunicaciones automáticas por Outlook. Flujo desplegado en producción real que procesa **+75 casos diarios** y permitió eliminar **25+ horas semanales** de gestión manual.

### 🧠 [Generador de Resúmenes de Incidencias con IA](https://devnaranjo.github.io/Portfolio/proyecto-rpa-resumen.html)
Flujo automatizado con **Power Automate Desktop** integrado con **Microsoft Teams**, **OneDrive** y **ChatGPT Enterprise**. Procesa periódicamente registros estructurados de incidencias no resueltas para sintetizar y clasificar resúmenes ejecutivos, facilitando el seguimiento operativo y reduciendo los tiempos de análisis del equipo técnico.

---

## 🗂️ Estructura del Repositorio

| Ruta | Descripción |
|---|---|
| `index.html` | Portada principal con propuesta de valor, stack técnico y tarjetas de proyectos destacados. |
| `sobre-mi.html` | Perfil profesional, formación académica (SMR/DAM), metodología y calendario de disponibilidad 2026–2028. |
| `proyectos.html` | Catálogo completo de proyectos con filtros de estado y enlaces a repositorios de código. |
| `proyecto-elpiedrero.html` | Ficha técnica de El Piedrero (Android nativo, Kotlin, Jetpack Compose, Sockets TCP, QR, IA). |
| `proyecto-habitly.html` | Ficha técnica de Habitly (Java Swing GUI, validación LAU/Ley 12/2023, JUnit 5, AES-256-GCM). |
| `proyecto-splitit.html` | Ficha técnica de Split It (Java SE, `BigDecimal`, compensación de redondeo, roadmap Kotlin). |
| `proyecto-rpa.html` | Ficha técnica de la automatización RPA de incidencias (Power Automate Desktop, PowerApps, M365, Outlook). |
| `proyecto-rpa-resumen.html` | Ficha técnica del generador de resúmenes semanales con IA (Teams, OneDrive, PAD, ChatGPT Enterprise). |
| `contacto.html` | Formulario de contacto seguro integrado con Web3Forms y verificación anti-spam. |
| `privacidad.html` | Política de privacidad y tratamiento de datos conforme al RGPD. |
| `cv.html` | Currículum interactivo web adaptado para lectura digital y optimizado para exportación/impresión A4 en 2 páginas. |
| `src/assets/` | Recursos visuales, capturas WebP, fotografías de perfil, iconos de marca y PDF descargable (`CV_Iriome_Naranjo_Backend_Java.pdf`). |
| `src/css/style.css` | Sistema de diseño unificado, paleta de colores, variables CSS y diseño responsive. |
| `src/js/script.js` | Motor de interfaz, simulador de terminal, calendario dinámico, gestor de temas/consentimiento y atajos de teclado. |
| `doc/` | Documentación técnica y especificaciones funcionales de los proyectos. |

---

## 🛠️ Características técnicas

### 🎨 UI/UX & Accesibilidad
- **Diseño Responsive & Accesible:** Rejillas CSS fluidas, adaptaciones móviles con áreas táctiles conformes a WCAG 2.2 (`min-height: 44px`) y atributos semánticos `aria-current="page"`.
- **Modo Oscuro / Claro:** Carga por defecto en modo oscuro con alternador flotante y transiciones suaves de 0.5s en sincronía con el sistema.
- **Navegación de Proyectos:** Menú desplegable con acceso directo a las tres aplicaciones destacadas (Habitly, Split It y El Piedrero) y enlace al catálogo completo.
- **Calendario Dinámico:** Visualizador de disponibilidad 2026–2028 en `sobre-mi.html` con filtros de estado y pie de página que reacciona en tiempo real a la fecha actual del sistema.
- **Logotipo Interactivo:** Identificador dinámico `Iriome.build(sección)` que actualiza su parámetro según la página activa.
- **CV Interactivo & Exportación (`cv.html`):** Vista web adaptada con descarga directa en PDF y exportación milimétrica a formato A4 de 2 páginas vía `@media print`.

### ⚙️ JavaScript & Interactividad
- **Simulador de Terminal:** Emulación en JavaScript de la salida y ejecución por consola de los programas en Java (Habitly y Split It).
- **Copiado Rápido y Toasts:** Copiado de correo y teléfono al portapapeles con notificaciones flotantes interactivas.
- **Desarrollo Nativo:** Construido con HTML5, CSS3 y JavaScript vanilla sin dependencias externas pesadas, garantizando una puntuación de rendimiento óptima.

### 🔐 Ciberseguridad & Privacidad (RGPD)
- **Protección Anti-Scraping para Datos Personales (PII):** Los correos y teléfonos se almacenan codificados en Base64 y se decodifican dinámicamente en tiempo de ejecución, impidiendo su extracción por spambots.
- **Content Security Policy (CSP):** Cabeceras meta en todas las páginas restringiendo orígenes legítimos para scripts, estilos, conexiones y fuentes.
- **Formulario Seguro:** Verificación anti-spam mediante hCaptcha e integración con Web3Forms.
- **Analítica y Cumplimiento:** Integración con Google Tag Manager (GTM) respetando el banner de consentimiento dinámico (Consent Mode v2 con denegación por defecto) y la normativa europea de protección de datos (RGPD).

### ⚡ Rendimiento
- **Optimización de Assets (WebP):** Imágenes y capturas de proyectos convertidas al formato `.webp` (calidad 80%), reduciendo el peso de descarga inicial en más de 2.75 MB.
- **Carga Eficiente:** Código modular y tipografías optimizadas (`Plus Jakarta Sans` y `JetBrains Mono`).

### 🧩 Herramientas Auxiliares
- **Generador Local de Correo (`plantilla_correo.html`):** Utilidad local privada para la generación ágil de respuestas formales por correo electrónico (accesible mediante el atajo `Ctrl + Alt + I`, archivo excluido del repositorio público).

---

## 🌐 Portfolio & Contacto

- **Portfolio Web:** [devnaranjo.github.io/Portfolio](https://devnaranjo.github.io/Portfolio)
- **GitHub:** [github.com/DevNaranjo](https://github.com/DevNaranjo)
- **LinkedIn:** [linkedin.com/in/inaranjorodriguez](https://linkedin.com/in/inaranjorodriguez)
- **Email:** [inaranjordgz@gmail.com](mailto:inaranjordgz@gmail.com)

---

## 🇬🇧 English

## 👋 About the Project

This repository contains the source code for my personal and professional web portfolio. As a **Multiplatform Application Development (DAM)** student, my core professional focus is **Java Backend Development**, object-oriented software architecture, and quality assurance through automated unit testing.

This space showcases my software development projects, academic background, technical skills, and complementary corporate experience in IT support and Robotic Process Automation (RPA).

---

## 🧰 Tech Stack

| Area | Technologies |
|---|---|
| **Backend** | Java · Java SE · Object-Oriented Programming (OOP) · Modular Architecture |
| **Testing** | JUnit 5 · TDD (Test-Driven Development) |
| **Databases** | PostgreSQL · MongoDB · SQL / NoSQL · JDBC · Hibernate (foundations) |
| **Version Control** | Git · GitHub · GitFlow |
| **Automation (RPA)** | Power Automate Desktop (PAD) · Microsoft 365 · PowerApps · Outlook API |
| **Frontend** | HTML5 · CSS3 · JavaScript (Vanilla) |
| **Systems & Additional** | Python · Kotlin (v2.2 foundations) · Bash · Linux · Windows |

---

## 🚀 Featured Projects

### 🃏 [El Piedrero](https://devnaranjo.github.io/Portfolio/proyecto-elpiedrero.html) — Android Scorer for Canarian Ronda
Native Android mobile app developed in **Kotlin** and **Jetpack Compose** (Material 3) built with **Clean Architecture** and reactive MVI with `StateFlow`. Features real-time offline multiplayer synchronization via local **TCP Sockets** with **AES-256-GCM** end-to-end encryption, monotonic anti-replay protection and instant QR pairing (CameraX / ZXing). Features **Zero-Disk-IO** audio streaming with native AudioFocus ducking, **WCAG 2.1 AA/AAA** accessibility (48×48 dp), **R8** optimization (8.2 MB payload), and official signed Release build verified for Xiaomi/MIUI/HyperOS. Published as Open Source under the **MIT License**. ([View repository on GitHub](https://github.com/DevNaranjo/El-Piedrero)).

### 🏠 [Habitly](https://devnaranjo.github.io/Portfolio/proyecto-habitly.html) — Real Estate Management Software
Desktop application built with **Java SE** and a **Java Swing** GUI (Dark Mode) following a layered modular architecture. It features a configurable regulatory compliance engine (Law 12/2023 / LAU, IRAV limits, deposit control), personal data protection via **AES-256-GCM** encryption (PBKDF2), and extensive test coverage of critical business logic using **JUnit 5**. A flagship software project highlighting core backend and software design capabilities.

### 💸 [Split It](https://devnaranjo.github.io/Portfolio/proyecto-splitit.html) — Bill Splitting & Invoicing Engine
Modular CLI application in **Java SE** designed for parsing and evenly distributing restaurant bills, developed as a simulated real-world client project for the hospitality sector. It guarantees zero rounding deviation (0.00 € error) through strict **BigDecimal** arithmetic and a custom penny-distribution algorithm, structured with OOP separation of concerns and validated with **JUnit 5** and **GitFlow**. ([View repository on GitHub](https://github.com/DevNaranjo/Split-It)).

### 🤖 [RPA Incident Support Automation](https://devnaranjo.github.io/Portfolio/proyecto-rpa.html)
End-to-end automation workflow developed with **Power Automate Desktop** across customer support portals (**PowerApps / Microsoft 365**) and Dynamics 365 Business Central. Integrates automated browser data extraction, structured scraping, state/date filtering, and dynamic Outlook communications. Live production flow processing **+75 daily tickets** and saving **25+ weekly hours** of manual administrative effort.

### 🧠 [AI-Powered Incident Summary Generator](https://devnaranjo.github.io/Portfolio/proyecto-rpa-resumen.html)
Automated flow built with **Power Automate Desktop** integrated with **Microsoft Teams**, **OneDrive**, and **ChatGPT Enterprise**. Periodically analyzes structured logs of unresolved tickets to synthesize and classify executive summaries, streamlining operational follow-up and reducing analysis overhead for technical teams.

---

## 🗂️ Repository Structure

| Path | Description |
|---|---|
| `index.html` | Main landing page highlighting value proposition, tech stack, and featured project cards. |
| `sobre-mi.html` | Profile, academic background (SMR/DAM), methodology, and 2026–2028 availability calendar. |
| `proyectos.html` | Full project catalog with category filters and links to source code repositories. |
| `proyecto-elpiedrero.html` | Technical breakdown of El Piedrero (Native Android, Kotlin, Jetpack Compose, TCP Sockets, QR, AI). |
| `proyecto-habitly.html` | Technical breakdown of Habitly (Java Swing GUI, LAU compliance, JUnit 5, AES-256-GCM). |
| `proyecto-splitit.html` | Technical breakdown of Split It (Java SE, `BigDecimal`, rounding compensation, Kotlin roadmap). |
| `proyecto-rpa.html` | Technical details of the RPA ticket automation (Power Automate Desktop, PowerApps, M365, Outlook). |
| `proyecto-rpa-resumen.html` | Technical details of the AI-powered weekly summary flow (Teams, OneDrive, PAD, ChatGPT Enterprise). |
| `contacto.html` | Secure contact form with Web3Forms API and anti-spam verification. |
| `privacidad.html` | Privacy Policy page in compliance with GDPR regulations. |
| `cv.html` | Interactive web CV designed for digital review and optimized for 2-page A4 printing. |
| `src/assets/` | Visual assets, WebP project previews, profile photos, brand icons, and CV PDF (`CV_Iriome_Naranjo_Backend_Java.pdf`). |
| `src/css/style.css` | Unified design system, color palette, CSS custom properties, and responsive styles. |
| `src/js/script.js` | UI engine, CLI terminal simulator, dynamic calendar, theme/consent handlers, and keyboard shortcuts. |
| `doc/` | Technical documentation and functional specifications. |

---

## 🛠️ Technical Features

### 🎨 UI/UX
- **Fluid Responsiveness:** Elastic CSS grids and tailored layouts for mobile phones, tablets, and desktop displays.
- **Dark / Light Theme:** Default dark mode load with a smooth floating toggle and 0.8s flicker-free transition.
- **Project Navigation:** Clean dropdown menu with direct links to the three featured applications (Habitly, Split It, and El Piedrero) and full catalog access.
- **Dynamic Calendar:** 2026–2028 availability viewer on `sobre-mi.html` with state filters and real-time reactive footer status.
- **Interactive Code Logo:** Dynamic `Iriome.build(section)` logo updating its parameter based on the active page.

### ⚙️ JavaScript & Interactivity
- **CLI Terminal Simulator:** JavaScript simulation reproducing console output and user interactions of Java developments (Habitly and Split It).
- **Quick Copy & Toasts:** Automatic copy of email and phone to clipboard with non-intrusive interactive toast notifications.
- **Native Implementation:** Built entirely with native HTML5, CSS3, and vanilla JavaScript, minimizing external dependencies for fast, lightweight performance.

### 🔐 Privacy & Analytics
- **Secure Form:** Anti-spam verification using hCaptcha and Web3Forms integration.
- **Analytics & Compliance:** Integrated Google Tag Manager (GTM) with dynamic consent management (Consent Mode v2) adhering to GDPR guidelines.

### ⚡ Performance
- **Asset Optimization (WebP):** Images and project previews converted to `.webp` format (80% quality), saving over 2.75 MB in initial page payload.
- **Efficient Loading:** Modular codebase and optimized local web fonts for immediate rendering.

### 🧩 Auxiliary Tools
- **Local Mail Generator (`plantilla_correo.html`):** Private utility for generating formal email responses (accessible via shortcut `Ctrl + Alt + I`, excluded from the public repository).

---

## 🌐 Links & Contact

- **Portfolio Web:** [devnaranjo.github.io/Portfolio](https://devnaranjo.github.io/Portfolio)
- **GitHub:** [github.com/DevNaranjo](https://github.com/DevNaranjo)
- **LinkedIn:** [linkedin.com/in/inaranjorodriguez](https://linkedin.com/in/inaranjorodriguez)
- **Email:** [inaranjordgz@gmail.com](mailto:inaranjordgz@gmail.com)

---

## 📌 Historial reciente / Recent Changelog

### Agosto 2026 / August 2026
- **Calendario de Disponibilidad Dinámico (2026–2028):** Integración del calendario interactivo en `sobre-mi.html` con selector de años (2026, 2027, 2028), filtros dinámicos en vivo, ocultación inteligente de meses pasados y ajuste del periodo lectivo de 2º DAM (finalización de docencia el 31 de mayo de 2027 y **junio de 2027 configurado con 100% de disponibilidad total**) (*Dynamic availability calendar on `sobre-mi.html` with year selector, live filters, smart past month pruning, and 2nd year DAM completion set to May 31 2027 with June 2027 having 100% total availability*).
- **Homogeneización & Grid Estricto de Proyectos:** Reestructuración de `.projects-grid` mediante CSS Grid (`repeat(auto-fit, minmax(300px, 380px))`) y unificación de miniaturas con marco de ventana (`.project-thumbnail-bar` y relación de aspecto `16 / 9`) tanto en `index.html` como en `proyectos.html`, garantizando alturas matemáticamente idénticas y alineación horizontal uniforme de botones y etiquetas (*CSS Grid refactor ensuring strict equal-height project cards and unified 16:9 window-framed thumbnails across index and project pages*).
- **Ventana Curiosa en Ficha de Proyecto «Split It»:** Inclusión al inicio de `proyecto-splitit.html` de un callout visual estilizado en cian/degradado explicando el origen funcional y la identidad del nombre *Split It* (*Added a stylish curious callout banner at the top of SplitIt detailing the naming rationale and business focus*).
- **Optimización de Assets & Favicons 100% WebP:** Migración integral de todos los `<link rel="icon">` de las 12 páginas a `src/assets/logo.webp` (`image/webp`), logrando que el 100% de los recursos visuales del portfolio operen bajo el formato moderno WebP (*Updated all 12 HTML pages to load `logo.webp` favicons, achieving 100% WebP image asset coverage*).
- **Alineación de Píldora de Estado del Hero:** Corrección del contenedor `.hero-tag` y `.hero-status-dot` para evitar saltos de línea desalineados, con resplandor verde esmeralda y tipografía monoespaciada limpia (*Refined hero status tag pill with flex centering and emerald glow*).
- **Exportación PDF & Impresión Segura del CV (`cv.html`):** Función `printCV()` con conmutación temporal automática a tema claro durante la generación del PDF y restablecimiento del tema anterior en `afterprint`, acompañada de reglas `@media print` de alto contraste en 2 páginas (*Print/PDF export script for `cv.html` ensuring light mode rendering and 2-page A4 layout*).
- **Notificaciones Toast Flotantes:** Rediseño del toast para copiado de correo y teléfono como píldora flotante centrada con efecto glassmorphism en `cv.html` y global (*Refactored copy-to-clipboard toast notifications into centered glassmorphic pills*).
- **Resumen Ejecutivo 'Lo Esencial 🔍' (Sobre Mí):** Incorporación de un botón interactivo y modal desplegable en `sobre-mi.html` con el perfil condensado en 60 segundos (*Interactive 'Lo esencial 🔍' executive summary card condensing the full professional profile into a quick 60-second read*).
- **Easter Eggs en Ventanas y Consolas:** Al pulsar el botón amarillo (`●`) de las barras de ventana en tarjetas de proyectos se dispara la navegación interactiva a la ficha técnica, y en la ventana del Hero redirige con efecto de zoom a `sobre-mi.html` (*Interactive yellow dot window buttons acting as direct navigation easter eggs across project cards and hero IDE*).
- **Estandarización de Animaciones & Justificación Global:** Sincronización milimétrica de todas las transiciones por categorías (`0.2s` interactivos, `0.3s` componentes, `0.4s` zoom de página, `0.5s` cambio de tema) (*Standardized animation tokens across CSS/JS and global justified text alignment*).

### Septiembre 2026 / September 2026
- **Nuevo Proyecto: «El Piedrero» (Android MVP v1.0 · Open Source):** Incorporación de la ficha técnica completa `proyecto-elpiedrero.html` con metodología STAR, diagrama de arquitectura (Kotlin, Jetpack Compose, Sockets TCP, CameraX), simulador interactivo de partida con audios reales de cantos tradicionales de la Ronda Canaria y roadmap de 3 fases (MVP completado → v1.1 UX → Kotlin Multiplatform iOS) (*Added full technical case study page for El Piedrero with STAR methodology, architecture diagram, live interactive game simulator with real folclore audio cues, and 3-phase roadmap*).
- **Categoría «📱 Aplicaciones Móviles» en `proyectos.html`:** Reestructuración del catálogo de proyectos en subapartados por tecnología: `💻 Desarrollos de Software (Java)` y `📱 Aplicaciones Móviles`, con la tarjeta de El Piedrero (badge `Fase MVP (1.0)`) en la nueva categoría (*Reorganized project catalog into tech subcategories; added dedicated Mobile Apps section*).
- **Simulador Interactivo Android (El Piedrero):** Marco visual en `proyecto-elpiedrero.html` que emula el marcador nativo Jetpack Compose/Material 3 con selección de equipos, botonera de cantos (+1 Ronda, +3 Parranda, +4 Caracol, +5 Caracolillo, Majo, Limpiar, Majo y Limpio), reproducción de audios MP3 originales, detección de paso a «¡Buenas!» y botón de reinicio (*Interactive Android scoreboard simulator with real audio playback and full game mechanics*).
- **Ventanas Curiosas (Naming Boxes) en los 3 proyectos:** Conversión del acordeón de Habitly a tarjeta fija estilo Split It; actualización del título y texto de El Piedrero al origen etimológico del nombre (3 líneas, conciso); coherencia visual `💡` en las tres fichas (*Unified naming curiosity boxes across all three project pages with fixed card format and concise copy*).
- **🃏 El Piedrero — v1.0.5 (04/09/2026 - Patch 1) — 🪨:** Transmisión de pantalla en vivo a televisores y monitores externos (`TvCastDialog`), ciclo de vida optimizado con `singleTask` y detección de cierre `AppCleanupService`, 6 piezas instrumentales folclóricas canarias generadas por IA libres de SGAE (`bgm_01.mp3` a `bgm_06.mp3`), reconexión de 5 minutos con cuenta atrás, control estricto del reparto de 40 cartas, avisos dinámicos de victoria tras recuento y diseño compacto accesible (*Live TV Cast streaming, singleTask lifecycle persistence, 6 AI-generated royalty-free Canarian folk BGM tracks, 5-minute reconnect grace window, 40-card strict recount validation, and compact UI layout*).
- **Actualización «El Piedrero» (v1.0.03092026.2 · QR & UI Polishing):** Optimización del escaneo QR con liberación inmediata del hardware de cámara (`unbindAll`), pantalla de sincronización de sala (`ConnectionLoadingView`) y error amigable sin fugas de IP/puertos, corrección de ergonomía táctil en estado «En Buenas» (≥44 dp), sincronización dinámica de volumen de sintetizador y háptico, ofuscación R8 (8.2 MB), protección anti-replay LAN y enlace directo al binario oficial `ElPiedrero_v1.0.03.092026.2.apk` (*Release v1.0.03092026.2: camera hardware release upon QR scan, friendly connection status screen without IP leak, ergonomic scoreboard layout in Buenas, volume sync, and direct official APK release link*).
- **Actualización «El Piedrero» (v1.0.02092026.2):** Cifrado de red local **AES-256-GCM**, touch targets accesibles de 48 dp (WCAG), streaming de audio Zero-Disk-IO, canales sonoros paralelos, firma Release oficial y audio de victoria integrado en el simulador web (*Upgraded El Piedrero to v1.0.02092026.2: AES-256-GCM encryption, 48 dp touch targets, Zero-Disk-IO audio streaming, and official signed release build*).
- **Badge `Fase MVP (1.0)` y enlaces APK:** Añadido el badge de estado y el botón de descarga directa del APK compilado en todos los puntos de acceso de El Piedrero (`index.html`, `cv.html`, `sobre-mi.html`, `proyectos.html`, `proyecto-elpiedrero.html`) (*Added MVP badge and direct APK download button across all El Piedrero entry points*).
- **Ajuste de Roadmap «Canary Wine & Guachinches API»:** Reprogramación del periodo de desarrollo activo de la API REST a **Octubre 2026 – Enero 2027** en `sobre-mi.html`, actualizando la cabecera del roadmap a 2026 – 2027 (*Rescheduled Canary Wine & Guachinches API development timeline to October 2026 – January 2027 in `sobre-mi.html`*).
- **Hoja de Ruta Oficial «El Piedrero» (MVP inicial vs v1.0 Estable):** Reestructuración del roadmap en `proyecto-elpiedrero.html` para desacoplar el prototipo inicial MVP (commit `fe10dbf`, 01/09/2026) del hito de la **Versión Oficial 1.0 Estable**, documentando todas las capacidades consolidadas en producción (cifrado AES-256-GCM, TV Cast, accesibilidad WCAG AAA, ciclo de vida robusto y audio inteligente) (*Restructured El Piedrero project roadmap distinguishing the initial MVP commit from the official stable v1.0 milestone and its production architecture*).
- **Menú Desplegable & Nota Informativa Unificada:** Reemplazo del submenú de automatizaciones RPA por acceso directo a «El Piedrero» en el desplegable de navegación de las 12 páginas, e igualación cromática índigo de la nota informativa en `proyecto-elpiedrero.html` (*Replaced RPA submenu in project navigation dropdown across all 12 pages with direct link to El Piedrero; aligned nota informativa styling*).
- **Renombramiento Oficial «Split It» & Repositorio «Split-It»:** Actualización de la identidad de marca del proyecto de facturación a **Split It** (con espacio) y sincronización de los enlaces de código fuente al repositorio oficial **Split-It** en GitHub (*Official rebranding to Split It and repository URL updated to Split-It on GitHub*).
- **Lanzamiento Oficial «El Piedrero» (v1.0-stable):** Integración del enlace oficial de descarga directa `El-Piedrero-v1.0-stable.apk` desde GitHub Releases y actualización homogénea de badges a `v1.0-stable` en `index.html`, `proyectos.html`, `sobre-mi.html`, `cv.html` y ficha del proyecto (*Official stable v1.0 release for El Piedrero: direct APK download link and site-wide propagation of `v1.0-stable` badges*).
- **Rediseño de Botonera de Tarjetas de Proyectos & Botón Releases:** Unificación de los botones de código a «Repositorio» con protección de salto de línea (`white-space: nowrap`) e incorporación del botón amarillo estilizado `#FFFF5C` de «Releases» en la tarjeta de El Piedrero en `index.html` y `proyectos.html` (*Refactored project card actions to single-line 'Repositorio' buttons and integrated yellow #FFFF5C Releases button on El Piedrero cards in index and project catalog*).
- **El Piedrero — v1.0.1 (05/09/2026 - Parche de Estabilidad y Accesibilidad):** Actualización oficial a la versión de mantenimiento `v1.0.1` (`versionCode = 2`) con el binario oficial `El_Piedrero_v1.0.1.apk`. Incorpora selector dinámico de tamaño de fuente en ajustes (Normal, Grande +12%, Extra +25%), diálogo inicial de 4 cartas («Cartas a la Mesa») exclusivo para el repartidor en multijugador, prioridad sonora ininterrumpida para *¡Buenas!* y *¡Últimas!*, botón para deshacer la última jugada directamente desde la ventana de victoria y bloqueo estricto con candado 🔒 del equipo rival en red local (*Maintenance release v1.0.1: dynamic font scaling accessibility options, dealer-exclusive 4-card table deal dialog, protected audio queue priority for Buenas and Últimas, undo option on victory screen, strict rival lock in LAN multiplayer, and official signed binary `El_Piedrero_v1.0.1.apk`*).


---

*Desarrollado con orden y pasión por el código. / Built with order and passion for code.* 🚀
