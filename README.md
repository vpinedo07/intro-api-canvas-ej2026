# 🎨 Dibujo Básico con HTML5 Canvas

## 📘 Descripción del Proyecto

Este proyecto demuestra el uso fundamental del elemento **HTML5 Canvas** para dibujar gráficos en 2D utilizando JavaScript.

El programa:

- Ajusta dinámicamente el tamaño del canvas al **50% del ancho y alto de la ventana del navegador**.
- Aplica estilos visuales mediante CSS (bordes redondeados, sombra y diseño moderno).
- Dibuja un rectángulo relleno dentro del canvas utilizando el contexto 2D.

Este ejercicio está diseñado como práctica inicial para la materia de **Programación Web**.

---

## 🛠 Tecnologías Utilizadas

- HTML5
- CSS3
- JavaScript
- API Canvas 2D

---

## 📂 Estructura del Proyecto

📁 proyecto-canvas
│
├── index.html
├── css
│ └── styles.css
├── js
│ └── app.js
└── README.md


---

## ⚙ Funcionamiento

### 1️⃣ Ajuste dinámico del tamaño

El canvas se configura para ocupar:

- 50% del ancho de la pantalla
- 50% del alto de la pantalla

```javascript
canvas.width = window.innerWidth * 0.5;
canvas.height = window.innerHeight * 0.5;
