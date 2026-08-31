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

### 🏠 [Habitly](https://devnaranjo.github.io/Portfolio/proyecto-habitly.html) — Software de Gestión Inmobiliaria
Aplicación de escritorio en **Java SE** con interfaz gráfica en **Java Swing** (Modo Oscuro) y arquitectura modular por capas. Incluye un motor de validación normativa parametrizable (Ley 12/2023 / LAU, límites IRAV, control de fianzas ICAVI), protección de datos personales mediante cifrado **AES-256-GCM** (PBKDF2) y cobertura de lógica de negocio crítica con pruebas automatizadas en **JUnit 5**. Proyecto propio principal que demuestra capacidades integrales de desarrollo backend y diseño de software.

### 💸 [SplitIt](https://devnaranjo.github.io/Portfolio/proyecto-splitit.html) — Motor de Facturación y Prorrateo
Herramienta CLI modular en **Java SE** para el desglose y distribución exacta de facturas gastronómicas, desarrollada a partir de requerimientos de negocio del sector HORECA. Garantiza precisión matemática (desviación = 0.00 €) mediante el uso estricto de **BigDecimal** y un algoritmo propio de compensación residual de céntimos entre comensales, estructurada con separación de responsabilidades (POO) y validada mediante **JUnit 5** y metodología **GitFlow**. ([Ver repositorio en GitHub](https://github.com/DevNaranjo/SplitIt)).

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
| `proyecto-habitly.html` | Ficha técnica de Habitly (Java Swing GUI, validación LAU/Ley 12/2023, JUnit 5, AES-256-GCM). |
| `proyecto-splitit.html` | Ficha técnica de SplitIt (Java SE, `BigDecimal`, compensación de redondeo, roadmap Kotlin). |
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
- **Navegación Multinivel:** Menú desplegable con submenús anidados para agrupar proyectos de automatización RPA, optimizado para hover en PC y toque táctil en móviles.
- **Calendario Dinámico:** Visualizador de disponibilidad 2026–2028 en `sobre-mi.html` con filtros de estado y pie de página que reacciona en tiempo real a la fecha actual del sistema.
- **Logotipo Interactivo:** Identificador dinámico `Iriome.build(sección)` que actualiza su parámetro según la página activa.
- **CV Interactivo & Exportación (`cv.html`):** Vista web adaptada con descarga directa en PDF y exportación milimétrica a formato A4 de 2 páginas vía `@media print`.

### ⚙️ JavaScript & Interactividad
- **Simulador de Terminal:** Emulación en JavaScript de la salida y ejecución por consola de los programas en Java (Habitly y SplitIt).
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

### 🏠 [Habitly](https://devnaranjo.github.io/Portfolio/proyecto-habitly.html) — Real Estate Management Software
Desktop application built with **Java SE** and a **Java Swing** GUI (Dark Mode) following a layered modular architecture. It features a configurable regulatory compliance engine (Law 12/2023 / LAU, IRAV limits, deposit control), personal data protection via **AES-256-GCM** encryption (PBKDF2), and extensive test coverage of critical business logic using **JUnit 5**. A flagship software project highlighting core backend and software design capabilities.

### 💸 [SplitIt](https://devnaranjo.github.io/Portfolio/proyecto-splitit.html) — Bill Splitting & Invoicing Engine
Modular CLI application in **Java SE** designed for parsing and evenly distributing restaurant bills, developed as a simulated real-world client project for the hospitality sector. It guarantees zero rounding deviation (0.00 € error) through strict **BigDecimal** arithmetic and a custom penny-distribution algorithm, structured with OOP separation of concerns and validated with **JUnit 5** and **GitFlow**. ([View repository on GitHub](https://github.com/DevNaranjo/SplitIt)).

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
| `proyecto-habitly.html` | Technical breakdown of Habitly (Java Swing GUI, LAU compliance, JUnit 5, AES-256-GCM). |
| `proyecto-splitit.html` | Technical breakdown of SplitIt (Java SE, `BigDecimal`, rounding compensation, Kotlin roadmap). |
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
- **Multilevel Navigation:** Dropdown menu with nested submenus to organize RPA automation projects, supporting desktop hover and touch toggle on mobile.
- **Dynamic Calendar:** 2026–2028 availability viewer on `sobre-mi.html` with state filters and real-time reactive footer status.
- **Interactive Code Logo:** Dynamic `Iriome.build(section)` logo updating its parameter based on the active page.

### ⚙️ JavaScript & Interactivity
- **CLI Terminal Simulator:** JavaScript simulation reproducing console output and user interactions of Java developments (Habitly and SplitIt).
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
- **Ventana Curiosa en Ficha de Proyecto «SplitIt»:** Inclusión al inicio de `proyecto-splitit.html` de un callout visual estilizado en cian/degradado explicando el origen funcional y la identidad del nombre *SplitIt* (*Added a stylish curious callout banner at the top of SplitIt detailing the naming rationale and business focus*).
- **Optimización de Assets & Favicons 100% WebP:** Migración integral de todos los `<link rel="icon">` de las 12 páginas a `src/assets/logo.webp` (`image/webp`), logrando que el 100% de los recursos visuales del portfolio operen bajo el formato moderno WebP (*Updated all 12 HTML pages to load `logo.webp` favicons, achieving 100% WebP image asset coverage*).
- **Alineación de Píldora de Estado del Hero:** Corrección del contenedor `.hero-tag` y `.hero-status-dot` para evitar saltos de línea desalineados, con resplandor verde esmeralda y tipografía monoespaciada limpia (*Refined hero status tag pill with flex centering and emerald glow*).
- **Exportación PDF & Impresión Segura del CV (`cv.html`):** Función `printCV()` con conmutación temporal automática a tema claro durante la generación del PDF y restablecimiento del tema anterior en `afterprint`, acompañada de reglas `@media print` de alto contraste en 2 páginas (*Print/PDF export script for `cv.html` ensuring light mode rendering and 2-page A4 layout*).
- **Notificaciones Toast Flotantes:** Rediseño del toast para copiado de correo y teléfono como píldora flotante centrada con efecto glassmorphism en `cv.html` y global (*Refactored copy-to-clipboard toast notifications into centered glassmorphic pills*).
- **Resumen Ejecutivo 'Lo Esencial 🔍' (Sobre Mí):** Incorporación de un botón interactivo y modal desplegable en `sobre-mi.html` con el perfil condensado en 60 segundos (*Interactive 'Lo esencial 🔍' executive summary card condensing the full professional profile into a quick 60-second read*).
- **Easter Eggs en Ventanas y Consolas:** Al pulsar el botón amarillo (`●`) de las barras de ventana en tarjetas de proyectos se dispara la navegación interactiva a la ficha técnica, y en la ventana del Hero redirige con efecto de zoom a `sobre-mi.html` (*Interactive yellow dot window buttons acting as direct navigation easter eggs across project cards and hero IDE*).
- **Estandarización de Animaciones & Justificación Global:** Sincronización milimétrica de todas las transiciones por categorías (`0.2s` interactivos, `0.3s` componentes, `0.4s` zoom de página, `0.5s` cambio de tema) (*Standardized animation tokens across CSS/JS and global justified text alignment*).

---

*Desarrollado con orden y pasión por el código. / Built with order and passion for code.* 🚀

