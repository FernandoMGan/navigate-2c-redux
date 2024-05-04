# Bpo Navigate

Este proyecto es una aplicación web desarrollada por **Fernando Martin Gan**, un **Desarrollador Full Stack**. Permite la navegación entre diferentes vistas de formularios, cada uno de los cuales puede modificar y mostrar datos locales. La aplicación está desarrollada con React y utiliza React Router para la navegación y React Redux para el store de las variables.

## Tecnologías utilizadas

- React
- React Router
- CSS (para estilos)

## Requisitos de instalación

Para ejecutar este proyecto localmente, sigue estos pasos:

1. Clona este repositorio en tu máquina local, lo puedes hacer desde mi Github en https://github.com/FernandoMGan/navigate-data-links.
2. Asegúrate de tener npm instalado en tu sistema.
3. Abre una terminal en la carpeta raíz del proyecto.
4. Ejecuta el siguiente comando para instalar las dependencias:

   ```
   npm install
   ```

5. Una vez instaladas las dependencias, ejecuta el siguiente comando para iniciar la aplicación:

   ```
   npm run dev
   ```




6. La aplicación estará disponible en tu navegador en la dirección [http://localhost:3000](http://localhost:3000).

## Procedimiento del formulario para su testeo

- **Productos:** Este formulario permite editar y mostrar los datos de un producto y su ubicación. Al hacer cambios en los campos de entrada y hacer clic en "Mostrar Solo Local", se mostrarán los valores locales del formulario en una alerta.
- **Historia:** Similar al formulario de Productos, este formulario permite editar y mostrar datos de historia y fecha.
- **Feedback:** Permite editar y mostrar datos de referencia y retorno.
- **Contactos:** Permite editar y mostrar datos de contacto y teléfono.

## Pestaña Home

La pestaña Home contiene dos botones:

1. **Mostrar Estado (Valor Actual)**:
- **Función**: Este botón muestra un cuadro de diálogo emergente que contiene los valores actuales de los datos almacenados en el estado del componente.
- **Acción**: Al hacer clic en este botón, se activa la función showDataLoguin, que recupera los valores actuales de los datos almacenados en el estado del componente y los muestra en un cuadro de diálogo emergente.
- **Propósito**: Permite al usuario visualizar los datos actuales almacenados en el estado del componente, lo que puede ser útil para verificar los datos antes o después de realizar cambios.

2. **Mostrar (Cambio Previo Desde app.jsx) y Mostrar**:
- **Función**: Este botón activa una función que realiza cambios en los datos almacenados en el estado del componente y luego muestra los nuevos valores actualizados en un cuadro de diálogo emergente.
- **Acción**: Al hacer clic en este botón, se activa la función testDataChange, que modifica los datos almacenados en el estado del componente con nuevos valores y luego llama a la función showDataLoguin para mostrar los nuevos valores actualizados.
- **Propósito**: Sirve como una herramienta para probar y visualizar cómo cambian los datos almacenados en el estado del componente después de realizar cambios específicos. Esto puede ser útil durante el desarrollo para verificar el comportamiento de la aplicación con diferentes conjuntos de datos.

## Contacto

Si tienes alguna pregunta o sugerencia sobre este proyecto, no dudes en ponerte en contacto con **Fernando Martin Gan** a través del correo electrónico **fmgsch@gmail.com**.

