# Plan de migración del Manual oficial (NO PUBLICADO)
Fecha: 10 de noviembre de 2026

## Aprobado
- Aplicación: `https://kernnel.app/` → `osdrumm-sudo/kernnel-estudio-musical`.
- Alias de aplicación: `https://www.kernnel.app/` → redirección automática al apex al completar DNS/Pages.
- Manual: `https://manual.kernnel.app/` → `osdrumm-sudo/kernnel-guia-oficial`.

## Archivos de esta rama, sin activar
- `CNAME` contiene `manual.kernnel.app` (en `main` actualmente contiene `kernnel.app`).
- Los enlaces de `index.html` para abrir la aplicación se dirigen a `https://kernnel.app/`.
- Actualización del enlace público en README.
- Ninguno de estos cambios estará activo hasta fusionar y configurar DNS/GitHub Pages con autorización.

## DNS de destino en Cloudflare (todavía NO aplicados)
- `manual` → CNAME `osdrumm-sudo.github.io` · DNS only (nube gris).
- `www` → CNAME `osdrumm-sudo.github.io` · DNS only (nube gris); GitHub Pages debe redirigir al dominio `kernnel.app`, tras eliminar reglas/Workers antiguos.
- `@` → cuatro A de GitHub Pages: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.
- No tocar correo ni TXT/MX/otros servicios; registrar y validar el DNS real antes de cualquier cambio.

## Secuencia coordinada
1. Comprobar respaldo JSON real de canciones de Kernnel y conservarlo fuera del navegador antes del cambio.
2. Verificar dominio en GitHub (TXT proporcionado por GitHub), y respaldar la configuración vigente de Cloudflare.
3. Migrar manual al subdominio, liberando `kernnel.app` del repositorio de manual.
4. Configurar el apex para la app y su repositorio.
5. Asegurar que `www` se redirija al apex y que ninguna ruta Cloudflare Worker anterior lo intercepte.
6. Revisar HTTPS en los tres hosts y ambos enlaces recíprocos.
7. Verificar login y respaldo manual Firebase desde el nuevo origen.

**Advertencia**: no fusionar primero el CNAME de aplicación mientras el manual conserve `kernnel.app`; no agregar DNS a GitHub Pages antes de asegurar que el repositorio reclamará el dominio. No borrar datos locales esperando que migren por sí solos.

Ver procedimiento detallado en la rama equivalente de la aplicación: `docs/plan-dominios-kernnel.md`.
