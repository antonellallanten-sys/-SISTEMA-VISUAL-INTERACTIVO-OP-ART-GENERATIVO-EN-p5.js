# -SISTEMA-VISUAL-INTERACTIVO-OP-ART-GENERATIVO-EN-p5.js
pensamiento-computacional-sec3

 Información del proyecto

**Nombre del proyecto:**  
Sistema visual interactivo basado en Op Art

**Autor/a (referente):**  
Victor Vasarely

Imagen referencial:

![imagen](https://files.ocula.com/ri/16/16db341b-92e2-414d-8ce1-f5b2b3381a32/1512/850/victor-vasarelys-kaleidoscopic-abstractions.jpg)


##  Descripción objetiva

Este proyecto es un sistema visual interactivo desarrollado en p5.js. Se basa en la generación de una estructura bidimensional compuesta por una grilla de elementos geométricos que se transforman en tiempo real mediante reglas algorítmicas.

El sistema responde a entradas del usuario y modifica dinámicamente la composición visual a través de transformaciones espaciales y cromáticas.

### Elementos visuales:
- Grilla bidimensional de elementos
- Figuras geométricas (círculos, rectángulos, triángulos)
- Transformación de posición, escala y rotación
- Variación de color
- Distorsión mediante ruido (noise)

### Inputs:
- mouseX (interacción horizontal)
- mouseY (control de densidad)
- mousePressed (cambio de estado visual)

### Outputs:
- Modificación de color
- Variación de tamaño
- Rotación de elementos
- Deformación del sistema visual
- Cambio de modo visual

## PROYECTO FINAL



https://github.com/user-attachments/assets/24949952-dc1e-4290-a696-5b78a84ef92f

### Link p5.js

https://editor.p5js.org/antonella.llanten/full/x5O0UzT18
https://editor.p5js.org/antonella.llanten/sketches/x5O0UzT18



## Descripción conceptual

El proyecto se basa en principios del Op Art, explorando la percepción visual mediante sistemas repetitivos y su deformación algorítmica.

El sistema genera efectos ópticos a partir de variaciones controladas en estructuras geométricas, produciendo sensación de movimiento, vibración y profundidad.

### Referente principal:
- Victor Vasarely

### Referentes complementarios:
- Bridget Riley
- Casey Reas
- p5.js / Processing

### Principios de diseño:
- Repetición estructural
- Variación controlada
- Aleatoriedad mediante noise
- Interacción en tiempo real
- Sistemas basados en reglas


## Proceso de desarrollo

###  Sistema base
Construcción de una grilla regular de elementos sin interacción compleja.  
Objetivo: establecer la estructura base del sistema.

<img width="1595" height="672" alt="Captura de pantalla 2026-05-22 095414" src="https://github.com/user-attachments/assets/17120a1e-df73-4821-87df-55aa59d3a9f0" />


### Deformación del sistema
Se incorpora ruido (noise) para modificar la posición de los elementos.  
Objetivo: introducir variación y comportamiento no lineal.



https://github.com/user-attachments/assets/899b4c6b-0d93-4af0-9091-18464747f5d6



### Sistema final
Se integra interacción completa, cambios de estado y transformación dinámica.  
Objetivo: sistema generativo interactivo final.


https://github.com/user-attachments/assets/b1d85300-9e3f-48fe-a5b3-0162d1ba0bf5



## Input / Output / Procesamiento

### Input:
- mouseX → controla interacción visual
- mouseY → controla densidad del sistema
- mousePressed → cambia estado visual

### Procesamiento:
- Generación de grilla
- Aplicación de noise (deformación espacial)
- Cálculo de distancia al cursor
- Evaluación de condicionales
- Transformaciones visuales

### Output:
- Sistema visual dinámico
- Transformación constante de formas
- Cambio de color y estado
- Efecto de ilusión óptica


##  Diagrama de flujo

<img width="2418" height="2646" alt="DIAGRAMA" src="https://github.com/user-attachments/assets/8c386710-f948-41af-8c11-8f553abd2503" />

