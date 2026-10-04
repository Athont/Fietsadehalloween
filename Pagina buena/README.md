# 💀 Fiesta de los Muertos | Landing Page & Terminal de Boletos

Una landing page interactiva con estética **Cyberpunk / Dark Tech** inspirada en la celebración tradicional del Día de los Muertos fusionada con elementos futuristas e industriales. Desarrollada con estándares web modernos, código limpio y modular, separando estrictamente HTML, CSS y JavaScript para máxima legibilidad y portabilidad en GitHub y GitHub Pages.

---

## 🎨 Paleta de Colores Oficial

El diseño cromático se fundamenta en una paleta armónica inspirada en Pantone y tonos técnicos de alto contraste:

| Muestra | Nombre | Valor HEX | Aplicación en la Interfaz |
| :---: | :--- | :---: | :--- |
| ⬛ | **Pantone Black Sea** | `#272B2A` | Fondo principal, base profunda que evita el negro puro y genera atmósfera. |
| 🟪 | **Pantone Blueberry Pie** | `#6F75CB` | Acentos secundarios, bordes sutiles, detalles de UI y efectos de brillo violeta-azulado. |
| 🟥 | **Pantone Cherry Tomato** | `#EB3C27` | Botones de llamada a la acción (CTA), precios, tipografía de impacto y láser. |
| 🔘 | **Gris Superficie** | `#363939` | Tarjetas informativas, terminal de compra y contenedores elevados. |
| ⚪ | **Texto Claro** | `#E5E7EB` | Párrafos, etiquetas y texto de lectura con alto índice de accesibilidad y contraste. |

---

## 🚀 Características Principales

- **Arquitectura Limpia**: Separación total de responsabilidades en `index.html`, `style.css` y `script.js`.
- **Efectos Visuales Inmersivos**:
  - Animación de **escáner láser** activo en la tarjeta de boleto y en la ventana modal.
  - Efecto de **scanlines CRT** analógicas superpuestas.
  - Esquinas angulares dinámicas con `clip-path` estilo HUD / gaming.
  - Resplandores y glows personalizados para elementos clave.
- **Terminal de Boletos Interactiva**:
  - Validación de campos en tiempo real.
  - Sistema de código de creador / afiliado con descuento dinámico ($185 MXN $\rightarrow$ $135 MXN).
  - Modal interactivo con simulación de credencial QR encriptada y código de confirmación.
- **Diseño Totalmente Responsivo**: Optimizado para dispositivos móviles, tablets y monitores ultra panorámicos con menú colapsable.

---

## 📁 Estructura del Proyecto

```plaintext
├── index.html       # Estructura semántica HTML5 y accesibilidad
├── style.css        # Variables CSS, diseño responsivo, temas y animaciones
├── script.js        # Lógica de interacción, cupones, modal y eventos
└── README.md        # Documentación para el repositorio de GitHub
```

---

## 💻 Cómo Publicar en GitHub Pages

1. Sube este repositorio a tu cuenta de GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: landing page Fiesta de los Muertos con paleta oficial"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/TU-REPOSITORIO.git
   git push -u origin main
   ```
2. En GitHub, ve a **Settings** > **Pages**.
3. En **Branch**, selecciona `main` y la carpeta `/ (root)`.
4. Haz clic en **Save**. ¡Tu página estará en línea en pocos segundos!

---

© 2026 Fiesta de los Muertos. Proyecto clasificado con fines demostrativos.
