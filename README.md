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

### Admin
- Gestión de productos (crear, editar stock/precio)
- Visualizar usuarios y sus compras (solo lectura)

### Superadmin
- Acceso a todas las funciones anteriores
- Gestión de usuarios (editar rol / bloquear / eliminar)
- Visualización y gestión de compras de usuarios

## 🔐 Seguridad y Acceso

- Rutas protegidas con autenticación JWT
- Interfaz dinámica basada en el rol
- Ocultamiento de botones y secciones según permisos


## 📦 dependencias utilizadas

```bash

- react-router-dom
- zustand
- @tanstack/react-query
- axios
- react-toastify
- @emailjs/browser
- react-bootstrap
- react-icons
- @fortawesome/fontawesome-free