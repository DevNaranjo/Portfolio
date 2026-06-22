# 🧑‍💻 Portfolio Profesional — Iriome Naranjo Rodríguez

[![GitHub Pages](https://img.shields.io/badge/Live-devnaranjo.github.io%2FPortfolio-4F46E5?style=flat&logo=github)](https://devnaranjo.github.io/Portfolio)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-inaranjorodriguez-0A66C2?style=flat&logo=linkedin)](https://linkedin.com/in/inaranjorodriguez)

> Desarrollador de Aplicaciones Multiplataforma (DAM) | Desarrollador Backend Java  
> Developer of Multiplatform Applications (DAM) | Java Backend Developer

---

## 🇪🇸 Español

Portfolio web profesional y personal. Diseñado bajo una estética premium, optimizado para sistemas de cribado curricular (ATS) y desarrollado en HTML5, CSS3 y JavaScript vanilla para garantizar un rendimiento sobresaliente sin dependencias externas.

### 🗂️ Estructura del Repositorio

| Ruta | Descripción |
|---|---|
| `index.html` | Portada principal con propuesta de valor y tarjetas de proyectos destacados. |
| `sobre-mi.html` | Trayectoria educativa, fortalezas profesionales y desglose de stack técnico (SMR/DAM). |
| `proyectos.html` | Catálogo de proyectos con filtros de estado y acceso a código fuente. |
| `proyecto-habitly.html` | Detalle del software de gestión inmobiliaria (POO, JUnit 5, persistencia). |
| `proyecto-calculadora.html` | Detalle del software de división de cuentas (Java 25, `BigDecimal`, compensación de redondeo) - **Completado (MVP)**. |
| `proyecto-rpa.html` | Detalle de la automatización RPA de incidencias (Dynamics 365 Business Central, M365, Outlook). |
| `proyecto-rpa-resumen.html` | Detalle del generador de resúmenes de incidencias semanales con IA (Teams, OneDrive, PAD, ChatGPT Enterprise). |
| `contacto.html` | Formulario de contacto seguro integrado con Web3Forms y anti-spam. |
| `privacidad.html` | Página legal de Política de Privacidad de datos (cumplimiento RGPD). |
| `cv.html` | Currículum interactivo adaptado para lectura digital y optimizado para impresión A4. |
| `src/assets/` | Recursos gráficos, fotos de perfil, vistas previas de proyectos e icono de marca, junto al PDF del CV. |
| `src/css/style.css` | Sistema de diseño unificado, variables de tema y responsive layout. |
| `src/js/script.js` | Motor de UI, simulador de terminal retro, gestión de consentimiento/tema y atajos globales. |
| `doc/` | Documentos de arquitectura y especificaciones funcionales de los proyectos. |
| `plantilla_correo.html` | Herramienta local privada de respuesta rápida para Gmail (ignorado en Git). |

### 🛠️ Características Principales

| Característica | Detalle |
|---|---|
| **Experiencia real en producción** | Incluye flujo RPA en producción (Power Automate Desktop, Microsoft 365, PowerApps) desarrollado en entorno empresarial real. |
| **Simulador de Terminal Retro** | Simulación fiel en JavaScript de la ejecución y salida real por consola de los desarrollos en Java (Habitly y Calculadora). |
| **Consentimiento Anti-Bloqueo** | Formulario con hCaptcha, y banner de consentimiento dinámico (Consent Mode v2) optimizado con nomenclatura genérica para evitar bloqueos falsos positivos de Adblockers. |
| **Modo Oscuro sin Parpadeo** | Alternador de tema en local con localStorage, evaluado en el head para evitar destello blanco al cargar la página (extendido a `cv.html` con transiciones fluidas de 0.8s). |
| **Navegación Dinámica de Código** | Logotipo interactivo `Iriome.build(sección)` que actualiza su método según la navegación del usuario. |
| **Copiado de Contacto y Redes** | Copiado automático de correo y teléfono al portapapeles con toasts interactivos, e integración de enlaces a redes sociales (GitHub, LinkedIn, Instagram). |
| **Atajo de Trabajo Local** | Acceso al generador corporativo de correo local privado usando el atajo global `Ctrl + Alt + I`. |
| **Menú Móvil Colapsable** | Navegación responsive mediante un botón hamburguesa generado dinámicamente por JavaScript, con transiciones y animaciones fluidas en CSS. |
| **Optimización de Assets (WebP)** | Imágenes de proyectos RPA y fotos de perfil comprimidas en formato `.webp` de alta eficiencia (calidad 80%), reduciendo el peso de descarga inicial en más de 2.75 MB. |

---

## 🇬🇧 English

Personal and professional web portfolio. Designed with a premium look and feel, optimized for Applicant Tracking Systems (ATS), and built using native HTML5, CSS3, and JavaScript to guarantee exceptional loading speed with zero dependencies.

### 🗂️ Repository Structure

| Path | Description |
|---|---|
| `index.html` | Main home page showcasing the value proposition and featured project cards. |
| `sobre-mi.html` | Profile, academic background, key strengths, and technical stack (SMR/DAM). |
| `proyectos.html` | Projects directory with status badges and links to source repositories. |
| `proyecto-habitly.html` | Details of the real-estate management software (OOP, JUnit 5, persistence). |
| `proyecto-calculadora.html` | Details of the bill-splitter console app (Java 25, `BigDecimal`, rounding compensation) - **Completed (MVP)**. |
| `proyecto-rpa.html` | Technical details of the RPA support ticket automation (Dynamics 365 Business Central, Outlook). |
| `proyecto-rpa-resumen.html` | Technical details of the AI-powered weekly incident summarization flow (Teams, OneDrive, PAD, ChatGPT). |
| `contacto.html` | Secure contact form integrated with Web3Forms API and anti-spam protection. |
| `privacidad.html` | Privacy Policy page (fully compliant with GDPR regulations). |
| `cv.html` | Interactive web CV, designed for digital viewing and optimized for A4 printing. |
| `src/assets/` | Graphic resources, profile photo, project previews, brand icons, and CV PDF. |
| `src/css/style.css` | Unified design system, CSS variables, and fully responsive layout. |
| `src/js/script.js` | UI core engine, retro CLI simulator, consent/theme handling, and global keyboard shortcuts. |
| `doc/` | Technical documentation and architecture specifications. |
| `plantilla_correo.html` | Local private tool for generating formal Gmail responses (ignored by Git). |

### 🛠️ Core Features

| Feature | Detail |
|---|---|
| **Production Experience** | Includes live RPA flows (Power Automate Desktop, Microsoft 365, PowerApps, ChatGPT Enterprise) deployed in real-world enterprise environments. |
| **Retro Terminal Simulator** | Faithful JavaScript simulation of actual Java console execution (including the precise rounding-error compensation algorithm designed for Grupo Gastronómico Rivas). |
| **Adblocker-Resistant Consent** | Contact form featuring hCaptcha, and dynamic consent banner (Consent Mode v2) optimized with generic naming to bypass false-positive adblocker hiding. |
| **Flicker-Free Dark Mode** | Sleek theme toggle using localStorage, resolved early in the head to prevent white flashes (now active on `cv.html` with smooth 0.8s transitions). |
| **Dynamic Code Logo** | Interactive logo `Iriome.build(section)` that dynamically updates its parameter based on navigation. |
| **Contact Copy & Social Links** | Automatic email and phone copy to clipboard with interactive toasts, and integration of key social media links (GitHub, LinkedIn, Instagram). |
| **Local Workspace Shortcut** | Direct access to the private local Gmail template generator using `Ctrl + Alt + I` shortcut. |
| **Collapsible Mobile Menu** | Fully responsive navigation using a dynamically generated JavaScript hamburger button with smooth CSS transitions. |
| **Asset Optimization (WebP)** | Main project previews and profile photos compressed into high-efficiency `.webp` format (80% quality), reducing initial load size by over 2.75 MB. |

---

*Desarrollado con orden y pasión por el código. / Built with order and passion for code.* 🚀
