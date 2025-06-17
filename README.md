# 🐾 PetCare Shop - Frontend

*PetCare Shop* es una tienda online especializada en productos para mascotas como comida, juguetes y accesorios. Este repositorio contiene el frontend del sistema web, desarrollado con React, que ofrece una experiencia amigable y accesible para los usuarios.

## 🌐 Descripción General

- *Acceso*: 100% online
- *Interfaz adaptable* a roles (Usuario, Admin, Superadmin)
- *Tecnologías*: HTML, CSS, JavaScript, React

## 👤 Funcionalidades por Rol

### Usuario común
- Registro e inicio de sesión
- Navegación y búsqueda de productos
- Agregar productos al carrito
- Ver historial de pedidos
- Editar su perfil

### Admin
- Gestión de productos (crear, editar stock/precio)
- Visualizar usuarios y sus compras (solo lectura)

### Superadmin
- Todas las funciones del admin
- Crear y administrar cuentas de administradores
- Acceso a la configuración general del sistema

## 🔐 Seguridad y Acceso

- Rutas protegidas con autenticación JWT
- Interfaz dinámica basada en el rol
- Ocultamiento de botones y secciones según permisos

## 🚀 Tecnologías Utilizadas

- *React*
- *React Router DOM* – Navegación entre páginas
- *React Bootstrap* – Componentes UI
- *React Icons* – Iconografía moderna

## 📦 Instalación de dependencias

```bash

npm install
npm install react-bootstrap bootstrap
npm install react-router-dom
npm install react-icons
npm install react-toastify
npm install zustand@latest
npm install @tanstack/react-query
npm i axios
npm i @emailjs/browser
npm install @fortawesome/fontawesome-free

```bash - para descargar todo con una linea "MAS DIRECTO"
npm install react-bootstrap bootstrap react-router-dom react-icons react-toastify zustand@latest @tanstack/react-query axios @emailjs/browser @fortawesome/fontawesome-free
npm audit fix
