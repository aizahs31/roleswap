# RoleSwap

RoleSwap is a full-stack web application that allows users to simulate different roles, participate in role-based simulations, and earn badges. The project consists of a React + Vite + TypeScript frontend and a Node.js + Express + MongoDB backend.

---

## Features
- User authentication and session management
- Role selection and simulation
- Badge earning and display
- Dashboard for user progress
- AI-powered simulation logic

---

## Project Structure

```
roleswap/
├── client/      # Frontend (React + Vite + TypeScript)
│   ├── src/
│   ├── public/
│   └── ...
├── server/      # Backend (Node.js + Express + MongoDB)
│   ├── models/
│   ├── routes/
│   └── ...
└── README.md
```

---

## Prerequisites
- Node.js (v18 or higher recommended)
- npm (v9 or higher recommended)
- MongoDB (local or cloud instance)

---

## Getting Started

### 1. Clone the repository
```powershell
git clone <repo-url>
cd roleswap
```

### 2. Install dependencies
#### Frontend
```powershell
cd client
npm install
```
#### Backend
```powershell
cd ../server
npm install
```

### 3. Configure Environment Variables
- For the backend, create a `.env` file in the `server/` directory with the following variables:
  ```env
  MONGODB_URI=<your-mongodb-uri>
  SESSION_SECRET=<your-session-secret>
  PORT=5000
  ```

---

## Running the Application

### Start the Backend
```powershell
cd server
npm start
```
- The backend will run on [http://localhost:5000](http://localhost:5000)

### Start the Frontend
```powershell
cd client
npm run dev
```
- The frontend will run on [http://localhost:5173](http://localhost:5173) by default

---

## Folder Details

### Frontend (`client/`)
- Built with React, Vite, and TypeScript
- Main entry: `src/App.tsx`
- Components: `src/components/`
- Context: `src/context/`
- Utilities: `src/utils/`
- Data: `src/data/`
- Types: `src/types/`

### Backend (`server/`)
- Built with Node.js and Express
- Models: `models/` (Mongoose schemas)
- Routes: `routes/` (API endpoints)
- Main entry: `index.js`

---

## Scripts

### Frontend
- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run preview` — Preview production build

### Backend
- `npm start` — Start backend server

---

## Deployment
- Configure environment variables for production
- Build frontend (`npm run build` in `client/`)
- Serve static files or deploy frontend and backend separately as needed

---

## License
MIT
