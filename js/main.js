/********************************************************************************************
 * Programa: Dibujo básico en Canvas (HTML5)
 * Descripción:
 *   Este programa demuestra el uso inicial del elemento <canvas> en HTML5 para dibujar
 *   gráficos 2D con JavaScript. Ahora el tamaño del canvas se ajusta dinámicamente
 *   al 50% del ancho y 50% del alto de la ventana del navegador.
 *
 * Flujo:
 *     1) Obtener el elemento canvas desde el DOM por su id ("lienzo").
 *     2) Ajustar dinámicamente el tamaño del canvas al 50% de la pantalla.
 *     3) Obtener el contexto de renderizado 2D.
 *     4) Definir el color de relleno.
 *     5) Dibujar un rectángulo relleno.
 *
 * Autor: Victor Pinedo
 * Fecha: 2026-02-16
 ********************************************************************************************/

// Obtener referencia al canvas
var canvas = document.getElementById("lienzo");

// 🔹 Ajustar tamaño del canvas al 50% del ancho y alto de la ventana
canvas.width = window.innerWidth/2;
canvas.height = window.innerHeight/2;

// Obtener contexto 2D
var ctx = canvas.getContext("2d");

// Definir color de relleno
ctx.fillStyle = "rgb(16, 119, 223)";

// Dibujar un rectángulo proporcional al nuevo tamaño del canvas
ctx.fillRect(10, 10, 200, 200);
