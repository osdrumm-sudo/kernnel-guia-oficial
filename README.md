# Kernnel Estudio musical — Guía oficial

Sitio independiente de presentación, manual técnico y procedimientos de operación.
Créditos de la aplicación: OSS/26.

## Contenido inicial
- Página principal con identificación de la plataforma y acceso a la aplicación.
- Manual de ocho módulos, con procedimientos y especificaciones verificadas sobre el código de Kernnel.
- Buscador de módulos, navegación por secciones, procedimientos guiados, instalación y preguntas frecuentes.
- Diseño adaptable a dispositivos móviles y escritorio, sin librerías ni servicios de terceros.
- Idioma inicial: español de Chile (es-CL); arquitectura preparada para una localización futura.

## Publicación
En Settings → Pages, seleccionar Deploy from a branch, rama main, directorio /(root).
Dirección prevista: https://osdrumm-sudo.github.io/kernnel-guia-oficial/

Repositorio independiente de la aplicación principal:
https://osdrumm-sudo.github.io/kernnel-estudio-musical/

## Captura auténtica de demostración
La página requiere el archivo kernnel-ejemplo.jpg en la raíz del repositorio. Es una captura auténtica de Kernnel con el título Ejemplo · Ritmo base, recortada para mostrar únicamente el panel principal y evitar datos personales. Hasta que se cargue ese archivo, el sitio mostrará un aviso explícito en el área correspondiente.

Esta imagen corresponde a una versión de demostración anterior; los controles y su distribución pueden variar entre versiones. Actualizar las ilustraciones cuando se modifique la interfaz.

## Archivos
- index.html — contenido estructurado y semántico.
- styles.css — identidad gráfica oscura y diseño adaptable.
- guide.js — búsqueda local de módulos y navegación.
- kernnel-ejemplo.jpg — captura de demostración, pendiente de carga.

## Internacionalización futura
Se utilizarán códigos BCP 47, inicialmente es-CL y posteriormente en-US. Los textos deberán externalizarse a archivos de idioma antes de incorporar el selector. La versión actual está exclusivamente en español y no incluye un selector de idioma simulado.

## Precisión funcional
La documentación distingue la representación gráfica de pulsos de una partitura convencional y especifica que Firebase realiza respaldos manuales, no sincronización automática. La recuperación puede reemplazar la biblioteca local.

Este proyecto no debe modificar el repositorio ni el almacenamiento de la aplicación principal.
