# Task Management App

A simple task management application built with **React**, **Zustand**, and **Vite**, supporting task CRUD, search, and filtering.

---

## 🚀 Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/farzeen007/react-technical-farzeen.git
cd react-technical-farzeen

```

Install dependencies

```bash
npm install
```
Start the development server

```bash
npm run dev

```
Open in browser
Visit http://localhost:5173 (default Vite port).


🏗 Architecture

Vite + React – Frontend framework and build tool.

Zustand – State management with persist middleware for local storage persistence.

taskStore handles tasks, filtering, searching, and CRUD operations.

userStore manages login state and logout.

Components

Dashboard – Main page displaying tasks, loader, and login state.

DashboardTaskBoard – Displays tasks based on filters.

Loader – Shows while fetching tasks.


💡 Improvements if More Time

Implement real authentication (JWT + refresh token + protected routes).

Add infinite scrolling or pagination for large task lists.

Add drag-and-drop task ordering.

Improve error handling with retry and notifications.

Enhance UI/UX with task categories, priority, due dates.
