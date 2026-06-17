<div align="center">

# 🎓 TutorBook

### The Best Online Tutor Booking Platform in Bangladesh

Connect with verified, top-rated tutors for personalized learning sessions — anytime, anywhere.

<br />

[![Next.js](https://img.shields.io/badge/Next.js-16.2.6-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![HeroUI](https://img.shields.io/badge/HeroUI-3.0-6366F1?style=for-the-badge)](https://heroui.com/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![BetterAuth](https://img.shields.io/badge/Auth-BetterAuth-10B981?style=for-the-badge)](https://better-auth.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)

<br />

**[🌐 Live Demo](https://tutor-booking-client.vercel.app)** &nbsp;·&nbsp;
**[🐛 Report Bug](https://github.com/takebul/tutor-booking-client/issues)** &nbsp;·&nbsp;
**[💡 Request Feature](https://github.com/takebul/tutor-booking-client/issues)**

</div>

---

## 📋 Table of Contents

- [About the Project](#-about-the-project)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Screenshots](#-screenshots)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [API Endpoints](#-api-endpoints)
- [Pages & Routes](#-pages--routes)
- [Author](#-author)
- [License](#-license)

---

## 🚀 About the Project

**TutorBook** is a full-stack tutor booking web application that bridges the gap between students and qualified tutors. Students can search, filter, and book verified tutors for one-on-one sessions across 20+ subjects. Tutors can list their profiles, set availability, and manage bookings — all in one place.

> 🏆 Trusted by **7,500+** learners · **200+** verified tutors · **14** international awards

### Why TutorBook?

- **Students** can find the right tutor in under 60 seconds using smart search and date filters
- **Tutors** can manage their listings, slots, and sessions from a dedicated dashboard
- **Parents** can track session bookings and monitor their child's learning progress

---

## ✨ Features

### 🔐 Authentication

- Email & password sign in / sign up with validation
- Google OAuth one-click login
- Session-based auth powered by BetterAuth
- Protected routes for all dashboard pages

### 🔍 Tutor Discovery

- Real-time search by tutor name or subject (debounced 500ms)
- Date range filter for session start availability
- Responsive tutor card grid with subject badges and slot status
- Loading skeleton cards while fetching data
- Empty state with clear filter option

### 📋 Booking System

- Book a session via a clean modal form
- Remaining slot counter (auto-decrements on booking)
- Cancel a booked session with one click
- "Fully Booked" state disables the booking button

### 🧑‍🏫 Tutor Dashboard

- Add new tutors with a rich, multi-section form
- Edit tutor data via slide-over modal
- Delete tutor with AlertDialog confirmation
- Paginated table view of all your listed tutors

### 👤 User Profile

- View and edit profile (name + photo URL)
- Avatar with automatic fallback initials
- Quick navigation links to dashboard pages

### 🎨 UI / UX

- 🌙 Light & Dark mode via next-themes
- 📱 Fully responsive — mobile, tablet, desktop
- Animated 3-slide hero carousel (Swiper.js with autoplay)
- Toast notifications via react-hot-toast
- Custom 404 Not Found page
- Global Error boundary page with retry button
- Sticky frosted-glass navbar with blur effect

---

## 🛠️ Tech Stack

| Category              | Technology                                                                        |
| --------------------- | --------------------------------------------------------------------------------- |
| **Framework**         | [Next.js 16](https://nextjs.org/) — App Router, Server Components                 |
| **UI Library**        | [React 19](https://react.dev/)                                                    |
| **Styling**           | [Tailwind CSS v4](https://tailwindcss.com/)                                       |
| **Component Library** | [HeroUI v3](https://heroui.com/) — Modal, Drawer, Table, Select                   |
| **Authentication**    | [BetterAuth v1](https://better-auth.com/) + MongoDB Adapter                       |
| **Slider / Carousel** | [Swiper.js v12](https://swiperjs.com/)                                            |
| **Icons**             | [@gravity-ui/icons](https://gravity-ui.com/) + [Iconify](https://iconify.design/) |
| **Styled Buttons**    | [styled-components v6](https://styled-components.com/)                            |
| **Lottie Animations** | [@lottiefiles/dotlottie-react](https://lottiefiles.com/)                          |
| **Notifications**     | [react-hot-toast](https://react-hot-toast.com/)                                   |
| **Theme Switching**   | [next-themes](https://github.com/pacocoursey/next-themes)                         |
| **Token Handling**    | [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)                        |
| **Deployment**        | [Vercel](https://vercel.com/)                                                     |

---

## 📸 Screenshots

> 💡 Visit the live demo: **[tutor-booking-client.vercel.app](https://tutor-booking-client.vercel.app)**

| Page                   | Description                                                     |
| ---------------------- | --------------------------------------------------------------- |
| 🏠 **Homepage**        | 3-slide hero, stats bar, tutor cards, features grid, CTA banner |
| 📚 **Tutors Page**     | Real-time search + date filter, skeleton loading, empty state   |
| 📄 **Tutor Details**   | Full profile with info rows, booking modal with slot counter    |
| ➕ **Add Tutor**       | Multi-section form — Basic Info + Session Details               |
| 📋 **My Tutors**       | Data table with edit modal + delete confirmation                |
| 📅 **Booked Sessions** | Session table with status badges and cancel action              |
| 👤 **Profile**         | Avatar, info rows, edit profile modal                           |
| 🔐 **Login / Signup**  | Auth forms with Google OAuth, password toggle, validation       |

---

## 🏁 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) `v18+`
- [npm](https://www.npmjs.com/) `v9+`
- A running [backend server](https://github.com/yourusername/tutor-booking-server) (Express + MongoDB)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/tutor-booking-client.git

# 2. Move into the project folder
cd tutor-booking-client

# 3. Install all dependencies
npm install

# 4. Copy the env example and fill in your values
cp .env.example .env.local

# 5. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. ✅

### Available Scripts

| Script          | Description                  |
| --------------- | ---------------------------- |
| `npm run dev`   | Start the development server |
| `npm run build` | Create a production build    |
| `npm run start` | Start the production server  |
| `npm run lint`  | Run ESLint checks            |

---

## 🔑 Environment Variables

Create a `.env.local` file in the root and populate it:

```env
# ── Backend API ──────────────────────────────
NEXT_PUBLIC_SERVER_URL=http://localhost:5000

# ── BetterAuth ───────────────────────────────
BETTER_AUTH_SECRET=your_better_auth_secret_here
BETTER_AUTH_URL=http://localhost:3000

# ── Google OAuth ─────────────────────────────
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# ── MongoDB ──────────────────────────────────
MONGODB_URI=your_mongodb_connection_string
```

> ⚠️ Never commit `.env.local` to version control. It is listed in `.gitignore` by default.

---

## 🔌 API Endpoints

The client communicates with a custom REST API backend:

| Method   | Endpoint               | Description                                                     |
| -------- | ---------------------- | --------------------------------------------------------------- |
| `GET`    | `/tutors`              | Fetch all tutors — supports `?search`, `?startDate`, `?endDate` |
| `GET`    | `/tutors/:id`          | Fetch a single tutor by ID                                      |
| `POST`   | `/tutors`              | Create a new tutor listing                                      |
| `PATCH`  | `/tutors/:id`          | Book a session — decrements `remainingSlots`                    |
| `GET`    | `/tutorsFeatures`      | Fetch featured tutors for homepage                              |
| `GET`    | `/myTutors/:userId`    | Fetch tutors created by a specific user                         |
| `PATCH`  | `/myTutor/:id`         | Update tutor details                                            |
| `DELETE` | `/myTutor/:id`         | Permanently delete a tutor                                      |
| `GET`    | `/tutorBookedData`     | Fetch all booked sessions                                       |
| `PATCH`  | `/tutorBookedData/:id` | Cancel a booked session                                         |

---

## 📄 Pages & Routes

| Route             | Page                         | Protected        |
| ----------------- | ---------------------------- | ---------------- |
| `/`               | Homepage                     | ❌ Public        |
| `/tutors`         | All Tutors (search + filter) | ❌ Public        |
| `/tutors/[id]`    | Tutor Details + Book Session | ❌ Public        |
| `/login`          | Login                        | ❌ Public        |
| `/signup`         | Signup                       | ❌ Public        |
| `/about`          | Testimonials                 | ❌ Public        |
| `/services`       | FAQ                          | ❌ Public        |
| `/contact`        | Contact Form                 | ❌ Public        |
| `/addTutor`       | Add New Tutor                | ✅ Auth Required |
| `/myTutors`       | Manage My Tutors             | ✅ Auth Required |
| `/bookedSessions` | My Booked Sessions           | ✅ Auth Required |
| `/profile`        | User Profile                 | ✅ Auth Required |

---

## 👨‍💻 Author

<div align="center">

**Takebul Islam**

[![Portfolio](https://img.shields.io/badge/Portfolio-Visit-blue?style=for-the-badge&logo=google-chrome&logoColor=white)](https://yourportfolio.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/yourname)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/yourusername)
[![Email](https://img.shields.io/badge/Email-Contact-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:takebulislam@gmail.com)

</div>

---

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

1. **Fork** the repository
2. Create your feature branch — `git checkout -b feature/AmazingFeature`
3. Commit your changes — `git commit -m 'Add AmazingFeature'`
4. Push to the branch — `git push origin feature/AmazingFeature`
5. Open a **Pull Request**

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<div align="center">

Made with ❤️ by **[Takebul Islam](mailto:takebulislam@gmail.com)**

⭐ **If you found this project helpful, please give it a star!**

[![GitHub stars](https://img.shields.io/github/stars/yourusername/tutor-booking-client?style=social)](https://github.com/yourusername/tutor-booking-client)
[![GitHub forks](https://img.shields.io/github/forks/yourusername/tutor-booking-client?style=social)](https://github.com/yourusername/tutor-booking-client/fork)

</div>
