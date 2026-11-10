# Kernnel — Manual oficial: Etapa 1 de preparación
Fecha: 10 de noviembre de 2026

## Punto de respaldo
- Repositorio: `osdrumm-sudo/kernnel-guia-oficial`.
- Código original confirmado: `ac85c1c082efc1572849c64df43f07bf2e491f48`.
- Rama de respaldo: `respaldo/kernnel-2-pre-etapa1-2026-11-10`.
- Rama de desarrollo: `desarrollo/kernnel-2-etapa1-seguridad`.
- En esta etapa no se edita la página publicada ni `CNAME`.

## Cambio de dominios aprobado, aún NO implementado
- **Aplicación:** `https://kernnel.app/`
- **Manual:** `https://manual.kernnel.app/`

El `CNAME` actual del manual contiene `kernnel.app`; modificarlo antes de preparar la aplicación y DNS causaría interrupciones. El enlace existente del manual a la aplicación actual debe mantenerse hasta la migración coordinada.

## Reglas para la migración
1. Primero verificar la exportación JSON y recuperación de los datos de la aplicación en una copia de prueba.
2. Preparar HTTPS, DNS/Cloudflare, GitHub Pages y autorizaciones de Firebase para los dos destinos.
3. Actualizar referencias y enlaces recíprocos de forma coordinada, sin abrir rutas rotas.
4. No asumir que localStorage o IndexedDB se transfieren entre dominios; conservar el origen de la aplicación anterior hasta comprobar los datos en el nuevo.
5. Documentar la migración, validar enlaces desde PC/teléfono y efectuar publicación sólo por autorización separada.

## Próximas etapas
- Etapa 2: navegación, selector de canciones, accesibilidad y lateral de la aplicación.
- Etapa 4: banner con gráfica tecnológica musical, buscador destacado al comienzo, actualización del manual conservando su orden aprobado.
- Etapa 5: cambio coordinado de dominio y enlaces.
- Etapa 6: pruebas visuales, uso sin conexión y publicación autorizada.

**Nota:** esta rama es un respaldo del código de la guía y un espacio de preparación, no contiene respaldos de canciones reales.
