<div align="center">

# 🎬 Tamasha · Web

### Your night out, sorted. 🍿

**A dark-mode, cinema-grade React app for Nairobi movie showtimes and custom events.**

[![Backend](https://img.shields.io/badge/Backend_Repo-tamasha--api-0f172a?style=for-the-badge&logo=github)](https://github.com/JessyWaweru/tamasha-api)

![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-06B6D4?logo=tailwindcss&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000000?logo=shadcnui&logoColor=white)
![Clerk](https://img.shields.io/badge/Clerk-6C47FF?logo=clerk&logoColor=white)

</div>

---

## 📸 Screenshots

| 🏠 Home | 🎬 Now showing |
|:---:|:---:|
| ![Home](https://github.com/JessyWaweru/tamasha-api/raw/main/screenshots/desktophomepage1.png) | ![Movies](https://github.com/JessyWaweru/tamasha-api/raw/main/screenshots/desktopmovie1.png) |
| 🕐 **Showtimes, grouped by day & cinema** | 📅 **Event details** |
| ![Movie details](https://github.com/JessyWaweru/tamasha-api/raw/main/screenshots/desktopmoviedetails1.png) | ![Event details](https://github.com/JessyWaweru/tamasha-api/raw/main/screenshots/desktopeventdetails1.png) |

## ✨ Features

- 🎞️ **Now showing**: every movie in Nairobi, pulled live from the [Tamasha API](https://github.com/JessyWaweru/tamasha-api)
- 🗓️ **Smart schedule grouping**: hundreds of raw showtimes, grouped client-side by **date → cinema → time**, with one-tap ticket links
- 📅 **Your own events**: create, edit and delete events, with an M-Pesa / card checkout flow (UI mock)
- 🔐 **Clerk auth**: public pages for browsing, protected routes for event planners
- 🌙 **Cinematic dark UI** built with Tailwind, shadcn/ui and Lucide icons

## 🗺️ Routes

| Route | Page | |
|---|---|:---:|
| `/` | Landing | 🌍 |
| `/movies` · `/Movie/:id` | Now showing · showtimes | 🔐 |
| `/events` · `/EventDetails/:id` | Events · details & booking | 🔐 |
| `/addEvent` · `/updateEvent/:id` | Event planner tools | 🔐 |

## 🚀 Run it locally

```bash
git clone https://github.com/JessyWaweru/tamasha-web.git
cd tamasha-web
npm install
npm run dev               # → http://localhost:5173
```

| Env var | Purpose |
|---|---|
| `VITE_CLERK_PUBLISHABLE_KEY` | Your Clerk publishable key |
| `VITE_API_URL` | Backend URL (defaults to `http://127.0.0.1:8000`) |

---

<div align="center">

**Built by Jessy Bryan Waweru**: actuary by training, full-stack engineer by obsession.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/jessy-waweru-b8051a288)
[![Email](https://img.shields.io/badge/Email-EA4335?logo=gmail&logoColor=white)](mailto:bryanjessywaweru@gmail.com)
[![GitHub](https://img.shields.io/badge/More_projects-181717?logo=github)](https://github.com/JessyWaweru)

</div>
