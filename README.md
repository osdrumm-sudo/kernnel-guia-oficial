# Kernnel Estudio musical — Guía oficial

Sitio independiente de presentación, manual técnico y procedimientos de operación.
Créditos de la aplicación: OSS/26.

## Contenido — Kernnel 2.0
- Página principal con identificación de la plataforma y acceso a la aplicación.
- Manual de usuario con procedimientos y especificaciones basados en el código de Kernnel.
- Buscador de módulos, navegación por secciones, procedimientos guiados, instalación y preguntas frecuentes.
- Diseño adaptable a dispositivos móviles y escritorio, sin librerías ni servicios de terceros.
- Idioma inicial: español de Chile (es-CL); arquitectura preparada para una localización futura.

## Publicación
En Settings → Pages, seleccionar Deploy from a branch, rama main, directorio /(root).
El archivo `CNAME` declara `manual.kernnel.app` como dominio del manual.

La aplicación principal vive en el repositorio independiente `kernnel-estudio-musical`. Los enlaces del manual apuntan a `https://kernnel.app/`.

## Captura auténtica de demostración
La página muestra `kernnel-interfaz-oscura.jpg`, una captura de una versión anterior con datos de demostración. El pie de foto identifica su versión y dirige al lector a los pasos actualizados.

## Archivos
- index.html — contenido estructurado y semántico.
- styles.css — identidad gráfica oscura y diseño adaptable.
- guide.js — búsqueda local de módulos y navegación.
- kernnel-interfaz-oscura.jpg — captura de demostración incluida en el manual.

## Internacionalización futura
Se utilizarán códigos BCP 47, inicialmente es-CL y posteriormente en-US. Los textos deberán externalizarse a archivos de idioma antes de incorporar el selector. La versión actual está exclusivamente en español y no incluye un selector de idioma simulado.

## Precisión funcional
La documentación explica la representación gráfica de pulsos y la sincronización automática de canciones y repertorios mediante Google. El historial recupera versiones como copias adicionales. La importación JSON ofrece sus propias opciones de combinación y reemplazo.

Este proyecto no debe modificar el repositorio ni el almacenamiento de la aplicación principal.

## Actualización del 8 de noviembre de 2026
- Inicio, Edición y Estudio; navegación en teléfono y retorno al repertorio.
- Creación de canción con uno, varios o ningún repertorio; repertorios nuevos guardados al confirmar.
- Paneles laterales de apertura exclusiva y preguntas frecuentes de la nueva interfaz.
- Búsqueda en contenido de módulos cerrados y corrección del inicio sin ancla URL.
- Verificado: nueve módulos, enlaces internos, IDs únicos, sintaxis JS y búsqueda de acento, fusiona, repertorios y navegación. Pendiente: revisión visual de la guía en dispositivos reales.

## Actualización del 23 de noviembre de 2026
- Sección visible «Novedades de Kernnel / Metriqa» con enlaces a las funciones documentadas.
- Enlaces al historial de cambios del código oficial, pruebas y actualizaciones de accesibilidad.
- Se mantiene la separación entre funcionalidades existentes y prototipos congelados: el manual no anuncia como disponibles las salas, métricas variables o instrumentos multi-capa.
- Estos cambios son exclusivamente de documentación y no modifican la aplicación ni los datos de Firebase.

## Actualización del 23 de noviembre de 2026 — repertorios y acentos
- Crear repertorios desde Inicio; menú vertical desplegado solo en Inicio, contraído por defecto en Edición/Estudio.
- Acceso superior «Repertorios» y confirmación de guardado al salir de Edición.
- Eliminar canciones desde las tarjetas; recuperación desde papelera con vínculos originales.
- Acentos configurables por pulso del metrónomo y por canción.
- Evaluación futura del reproductor de música personal (issue #15); **no implementado**.
