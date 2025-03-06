# Lectures App

This is a **Next.js** application for managing and accessing lectures. It includes user authentication and a homepage (`/`). The app uses **Prisma** as the ORM, **MongoDB** as the database, and **NextAuth** for authentication.

## Features

- 🔐 **Authentication** (Sign Up, Login, Logout)
- 📚 **Lecture Management** (View lectures, categorized content)
- ⚡ **Next.js 14 App Router**
- 🔄 **Prisma ORM with MongoDB**
- 🌍 **Fast & Scalable**

## Tech Stack

- **Next.js** (Frontend & Backend)
- **Prisma** (Database ORM)
- **MongoDB** (Database)
- **NextAuth.js** (Authentication)
- **TypeScript** (Static Typing)

## Getting Started

### Prerequisites

Make sure you have **Node.js** and **npm** installed:

```bash
node -v # Check Node.js version
npm -v  # Check npm version
```

### Installation

Clone the repository and install dependencies:

```bash
mkdir lectures
cd lectures
git clone https://github.com/S-P-H-E/lectures.git ./
npm install
```

### Set Up Environment Variables

Create a `.env` file in the root of the project and configure your database and authentication settings:

```env
DATABASE_URL="your-mongodb-connection-string"
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"
```

### Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
/lectures-app
│── /app
│   ├── /auth  # Authentication pages
│   ├── /api   # API routes
│   ├── /page.tsx  # Home page
│── /prisma
│   ├── schema.prisma  # Prisma schema
│── /lib
│   ├── prismaClient.ts  # Prisma client setup
│── /components  # Reusable components
│── .env  # Environment variables
│── package.json
│── README.md
```

## Prisma Setup

Generate Prisma Client:

```bash
npx prisma generate
```

Run Migrations:

```bash
npx prisma migrate dev --name init
```

## Deployment

Deploy on **Vercel**:

```bash
vercel
```

For MongoDB on production, use **MongoDB Atlas** and update `DATABASE_URL` in `.env`.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [NextAuth.js](https://next-auth.js.org)
- [MongoDB](https://www.mongodb.com/docs/)

---

**Author:** Siphesihle Mbuyisa  
**License:** MIT# lectures
