# 🎉 Events Platform

![Project Status](https://img.shields.io/badge/status-complete-brightgreen)
This project is functionally complete, with minor optimizations and refinements ongoing.

This project is a **Dev Events Platform** built during the [JavaScript Mastery](https://jsmastery.pro/) Next.js 16 Crash Course. It demonstrates how to create a **modern**, **scalable**, and **fully functional** event management platform with CRUD capabilities, image uploads, analytics, and cutting-edge caching.

Designed and taught by **Adrian Hajdin** of JavaScript Mastery, this build showcases how to leverage **Next.js 16**, **TypeScript**, **MongoDB**, and **Cloudinary** to build a high-performance, real-world web app.

![Next.js](https://img.shields.io/badge/-Next.js-000000?style=flat-square&logo=next.js&logoColor=white) ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/-TailwindCSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white) ![MongoDB](https://img.shields.io/badge/-MongoDB-4EA94B?style=flat-square&logo=mongodb&logoColor=white) ![Cloudinary](https://img.shields.io/badge/-Cloudinary-3448C5?style=flat-square&logo=cloudinary&logoColor=white) ![PostHog](https://img.shields.io/badge/-PostHog-F54E00?style=flat-square&logo=posthog&logoColor=white)

---

## 📌 Project Retrospective

- 📄 [View the Project Retrospective](./PROJECT_RETROSPECTIVE.md)

Outlines key technical learnings, challenges faced, and how this project maps to industry practices.

---

## 🐛 Bugs

If you find any issues or bugs, please open an issue or pull request on GitHub. Contributions and improvements are welcome!

---

## ⚙️ Tech Stack

- **Next.js 16** – Latest version with App Router and new caching mechanisms
- **TypeScript** – Strongly typed JavaScript for scalability and maintainability
- **MongoDB & Mongoose** – Database and schema modeling for flexible data management
- **Cloudinary** – Cloud media storage and optimization for event images
- **TailwindCSS** – Utility-first CSS framework for fast, responsive UI styling
- **PostHog** – Open-source analytics for tracking user behavior and engagement
- **Warp** – Modern terminal used in the development workflow

---

## 🔋 Features

👉 **Dynamic Home Page**  
Displays a live list of upcoming and featured events fetched from the database.

👉 **API Routes (CRUD)**  
Full Create, Read, Update, and Delete functionality for managing events.

👉 **Event Details Page**  
Displays event details with registration options and similar event suggestions.

👉 **Cloudinary Integration**  
Easily upload and manage event images directly from the UI.

👉 **Next.js 16 Caching**  
Leverages new Next.js caching and revalidation strategies for faster performance.

👉 **PostHog Analytics**  
Tracks user interactions, funnels, and feature usage for data-driven insights.

👉 **Responsive Design**  
Built with TailwindCSS to ensure seamless experience across all devices.

---

## 🤸 Quick Start

### ✅ Prerequisites

Make sure you have the following installed:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### 📦 Install Dependencies

npm install

### 🔐 Set Up Environment Variables

Create a .env file in the root of your project and add the following:

NEXT_PUBLIC_BASE_URL=http://localhost:3000/
MONGODB_URI=
CLOUDINARY_URL=
NEXT_PUBLIC_POSTHOG_KEY=
NEXT_PUBLIC_POSTHOG_HOST=https://eu.i.posthog.com

### 🚀 Run the Project Locally

npm run dev

Then, open your browser and go to http://localhost:3000 to see the app in action.

---

## 📺 Course Link

This project was built using the [JavaScript Mastery Next.js 16 Crash Course](https://jsmastery.pro/).

Watch the full tutorial on YouTube:  
🔗 [Build a Full Stack Dev Events Platform with Next.js 16 (YouTube)](https://www.youtube.com/watch?v=O5cmLDVTgAs)

---

## 📄 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

---

## ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub and joining the JSMastery community:

- [JS Mastery Discord](https://discord.gg/jsmastery)
- [JS Mastery Pro](https://jsm.dev/uber-jsmpro)
- [More Projects](https://jsm.dev/uber-kit)
