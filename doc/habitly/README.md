# Proyecto: Habitly (Java SE v1.0.6)

Esta carpeta contiene la documentación técnica y la arquitectura de software para **Habitly**, el gestor de alquileres inmobiliarios desarrollado como proyecto integrador de DAM.

---

## 📋 Descripción del Proyecto
Habitly es una aplicación modular en **Java SE** diseñada para centralizar la gestión de carteras de alquileres de viviendas, automatizar el control financiero (ingresos vs. facturas de suministros) y garantizar el cumplimiento estricto del marco legal español (normativa **LAU 2026** y la **Ley de Vivienda 12/2023**), de manera local y segura mediante persistencia serializada.

---

## 📐 Diseño y Arquitectura de Software

La aplicación sigue un diseño modular dividido en tres paquetes principales: `model`, `data` y `ui`.

### 1. Modelo de Dominio (`com.habitly.model`)
*   **`Usuario`**: Clase base abstracta para el control de accesos (DNI, Nombre, Teléfono, E-mail).
    *   **`Propietario`**: Arrendador del inmueble (gestiona perfiles, viviendas y contratos). Puede declararse como empresa (`esEmpresa`) para validaciones legales.
    *   **`Inquilino`**: Arrendatario del inmueble (accede a cuentas y liquida suministros). Incluye índice de solvencia (0-100%).
*   **`Vivienda`**: Clase base de propiedades (superficie, habitaciones, baños, piscina, estado, límite IRAV).
    *   **`Piso`**: Propiedad horizontal que incluye la planta y el número de puerta.
    *   **`Casa`**: Vivienda unifamiliar con terreno asociado (metros de parcela).
*   **`ContratoAlquiler`**: Modela el arrendamiento. Implementa las validaciones de la LAU:
    *   Duración mínima legal: 5 años (si el arrendador es `FISICO`) o 7 años (si es `JURIDICO`).
    *   Fianzas y garantías: Fianza obligatoria de 1 mes y garantías adicionales limitadas a un máximo de 2 mensualidades.
    *   ICAVI: Alertas de depósito de fianza ante el organismo autónomo dentro del plazo legal de 30 días.
*   **`Gasto`**: Factura de suministros (luz, agua, comunidad) vinculada a una propiedad y a liquidar por el inquilino.
*   **Enums**: `EstadoVivienda` (`DISPONIBLE`, `ALQUILADO`) y `TipoArrendador` (`FISICO`, `JURIDICO`).

### 2. Capa de Datos (`com.habitly.data`)
*   **`GestorInventario`**: Controlador del sistema. Gestiona la lógica de negocio (búsqueda de usuarios, cálculo de beneficios netos, formalización de contratos, aplicación del IRAV) y encapsula la persistencia binaria (`cargarDatos()` / `guardarDatos()`) utilizando serialización de objetos de Java.

### 3. Capa de Interfaz (`com.habitly.ui`)
*   **`Habitly`**: Punto de entrada de la aplicación. Maneja el bucle principal, menús interactivos según rol de sesión (DNI/DNI GUEST-001) y captura excepciones de entrada con tolerancia a fallos.

---

## ⚖️ Reglas de Compliance Legal Automatizadas

Habitly no es solo un registro; es un motor de validación legal automatizado:
1.  **Validación de Renta Máxima (IRAV):** No permite formalizar un contrato cuya renta acordada supere el límite IRAV fijado para esa vivienda específica.
2.  **Validación de Plazos de Arrendamiento:** Compara el `TipoArrendador` (Físico/Jurídico) y bloquea contratos que no alcancen el mínimo de 60 u 84 meses exigidos por la LAU.
3.  **Auditoría de Compliance (Dashboard Legal):** Genera alertas críticas de cumplimiento en tiempo real, identificando fianzas pendientes de depósito en ICAVI fuera del plazo legal (>30 días) y avisos de preaviso de vencimiento del contrato con 4 meses de antelación.

---

## 💻 Instrucciones de Compilación y Ejecución

### Requisitos Previos
*   Java JDK 17 o superior instalado.
*   Variables de entorno configuradas (`JAVA_HOME`).

### Compilar y Ejecutar por Consola
Navega al directorio raíz del proyecto:

1.  **Compilar el proyecto:**
    Compila todas las clases y colócalas en la carpeta de destino `bin/`:
    ```bash
    javac -d bin -sourcepath src src/com/habitly/ui/Habitly.java
    ```

2.  **Ejecutar la aplicación:**
    Ejecuta el punto de entrada principal con el classpath adecuado:
    ```bash
    java -cp bin com.habitly.ui.Habitly
    ```

---
*Documentación estructurada bajo estándares de desarrollo DAM y normativas de arrendamiento españolas.*
