
# ⚽️ Football Stats Backend

![NestJS](https://img.shields.io/badge/-NestJS-E0234E?logo=nestjs&logoColor=white&style=flat-square)  
![Prisma](https://img.shields.io/badge/-Prisma-2D3748?logo=prisma&logoColor=white&style=flat-square)  
![MySQL](https://img.shields.io/badge/-MySQL-4479A1?logo=mysql&logoColor=white&style=flat-square)  
![License](https://img.shields.io/badge/license-MIT-green.svg)

---

## 📋 Descripción

Este es el backend de **Football Stats**, una API construida con **NestJS** + **Prisma** + **MySQL** 🚀.  
Sirve como motor de datos para una página web que muestra estadísticas detalladas de futbolistas ⚽️📊.

---

## 🛠️ Stack tecnológico

- ⚙️ **NestJS** (Framework para Node.js)
- 🛢️ **Prisma** ORM
- 🐬 **MySQL** base de datos relacional
- ✨ **Prettier** para formateo de código
- 📝 **TypeScript**

---

## 🚀 Scripts disponibles

| Script               | Descripción                               |
|----------------------|-------------------------------------------|
| `npm run start`      | Arranca el servidor en modo producción     |
| `npm run start:dev`  | Arranca en modo desarrollo con hot reload  |
| `npm run build`      | Compila el proyecto a `/dist`              |
| `npm run prisma:generate` | Genera el cliente Prisma a partir del schema |
| `npm run prisma:migrate`  | Ejecuta las migraciones de la DB        |
| `npm run format`     | Formatea el código con Prettier            |

---

## 🗄️ Estructura del proyecto

```bash
src/
├── modules/           # Módulos de la API (players, teams, matches, etc.)
├── prisma/            # Prisma schema & migraciones
├── main.ts            # Entry point
test/                  # Tests (si los añades)
```

---

## ⚡ Instalación rápida

```bash
# 1️⃣ Clonar el repositorio
git clone https://github.com/JulioMarquezH/goal-stats-back.git

# 2️⃣ Instalar dependencias
npm install

# 3️⃣ Configurar variables de entorno (.env)

# 4️⃣ Ejecutar migraciones
npm run prisma:migrate

# 5️⃣ Iniciar en modo desarrollo
npm run start:dev
```

---

## 📦 Variables de entorno

Ejemplo `.env`:

```env
DATABASE_URL="mysql://user:password@localhost:3306/football_stats"
PORT=3000
```

---

## ✨ Roadmap

- [x] API REST de jugadores
- [x] API REST de equipos
- [x] Integración con Prisma
- [x] Conexión con MySQL
- [ ] Autenticación y autorización 🔒
- [ ] Implementación de tests
- [ ] Deploy en producción

---

## 👨🏻‍💻 Autor

**Julio Marquez**  
[GitHub](https://github.com/JulioMarquezH)
