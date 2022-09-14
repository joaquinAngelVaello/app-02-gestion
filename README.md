# Gestión

*Aplicaciópn para aprender esto:*

- Crear una carpeta shared para guardar componente compartido
- Crear componentes por funcionalidad ( Clientes, Proveedores, Paises )
- Cargar módulos
- Rutas hijas
- Comunicar componentes
- Pipes

Lo que hemos hecho:

Después de crear la aplicación:

Hemos creado módulos.
ng g m clientes --routing

Luego hemos creado componentes para ese módulo
ng g c clientes/pages/clientes
ng g c clientes/pages/cliente-detalle

En el temario además, hemos creado un servicio
ng g s temario/services/temario

TAREA:
Crear un módulo que se llame pipes con el fichero de rutas
Luego, crear 2 componentes página que se llamen
pages/basicos
pages/avanzados
Solución:
ng g m pipes --routing
ng g c pipes/pages/basicos
ng g c pipes/pages/avanzados

Pasos para activar un módulo:
1. configurar las rutas del módulo en cuestión
2. decirle a angular que existe ese módulo
3. llamar desde las rutas principales a nuestro módulo

# Pasos para crear lazy-load:
*Proceso general de ejemplo*

se crea el módulo:

ng g m paises --routing


se crea el componente:

ng g c paises/pages/paises
( la página con la tabla de paises)


se crea el servicio:

ng g s paises/services/paises


1. configurar las rutas del módulo países
2. configurar el lazy-load en app-routing module
3. decir a angular que existe el módulo de países ( app.module )

# 3 día:

- Comunicación entre componentes padre/hijo

- Pipes

- Servicios HTTP

- Desplegar en github pages

