
# SkillSphere - Online Learning Platform

A modern online learning platform where users can explore courses, watch lessons, and enroll in skill-based programs like Web Development, Design, Marketing, and more.

## 🌐 Live URL

[https://skillsphere-henna.vercel.app](https://skillsphere-henna.vercel.app)

## 🎯 Purpose

SkillSphere is built to make quality education accessible to everyone. Users can browse courses, view detailed course information, and manage their learning journey through a secure authentication system.

## ✨ Key Features

- 🏠 **Home Page** with Hero Slider, Popular Courses, Learning Tips, Top Instructors, and Trending Courses sections
- 📚 **All Courses Page** with search functionality to find courses by title
- 🔒 **Protected Course Details Page** — only accessible after login
- 🔐 **Authentication** — Email/Password & Google Sign In using BetterAuth
- 👤 **My Profile Page** — view logged-in user information
- ✏️ **Update Profile** — update name and profile picture
- 📱 **Fully Responsive** — works on mobile, tablet, and desktop
- 🔔 **Toast Notifications** for user feedback
- 404 **Not Found Page** for invalid routes

## 🛠️ Tech Stack

- **Next.js** — React framework with App Router
- **Tailwind CSS** — Utility-first CSS framework
- **DaisyUI** — Tailwind CSS component library
- **BetterAuth** — Authentication library
- **MongoDB** — Database via MongoDB Atlas
- **Swiper.js** — Touch slider for hero section
- **React Icons** — Icon library
- **React Hot Toast** — Toast notifications

## 📦 NPM Packages Used

| Package             | Purpose         |
| ------------------- | --------------- |
| `next`            | React framework |
| `react`           | UI library      |
| `tailwindcss`     | CSS framework   |
| `daisyui`         | UI components   |
| `better-auth`     | Authentication  |
| `mongodb`         | Database        |
| `swiper`          | Hero slider     |
| `react-icons`     | Icons           |
| `react-hot-toast` | Notifications   |

## 🚀 Getting Started

1. Clone the repository:

```bash
git clone https://github.com/Mohammadsajibulislam/skillsphere.git
```

2. Install dependencies:

```bash
npm install
```

3. Create `.env.local` file:

```

     BETTER_AUTH_SECRET=your_secret_key
     BETTER_AUTH_URL=[http://localhost:3000](http://localhost:3000)
     NEXT_PUBLIC_BETTER_AUTH_URL=[http://localhost:3000](http://localhost:3000)
     MONGO_URI=your_mongodb_uri
     GOOGLE_CLIENT_ID=your_google_client_id
```


4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## 👨‍💻 Developer

**Mohammad Sajibul Islam**

- GitHub: [@Mohammadsajibulislam](https://github.com/Mohammadsajibulislam)
