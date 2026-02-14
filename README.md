# 📊 User Dashboard — React Frontend Intern Assignment

A responsive **User Dashboard** web app built with **React**, **TypeScript**, and **Tailwind CSS**. It fetches user data from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/users), displays it in an interactive card layout, supports search/filtering, client-side user creation, and detailed user views — all managed through React Context for global state.

### 🌐 Live Demo

👉 **[https://forty4-frontend-assignment.vercel.app/](https://forty4-frontend-assignment.vercel.app/)**

---

## ✨ Features

| Requirement                              | Status |
|------------------------------------------|--------|
| Fetch & display users from API           | ✅      |
| Card layout (name, email, phone, company)| ✅      |
| Search / filter by name                  | ✅      |
| "Create New User" form (client-side)     | ✅      |
| Global state via React Context           | ✅      |
| User Details page with React Router      | ✅      |
| Full details (address & geo-location)    | ✅      |
| Responsive / mobile-friendly design      | ✅      |
| Functional components with hooks         | ✅      |

---

## 🛠️ Tech Stack

| Technology          | Purpose                                  |
|---------------------|------------------------------------------|
| **React 19**        | UI library (functional components + hooks) |
| **TypeScript**      | Static type safety                       |
| **Vite**            | Build tool & dev server                  |
| **Tailwind CSS v4** | Utility-first responsive styling         |
| **React Router v7** | Client-side routing                      |
| **React Hook Form** | Form state management                   |
| **Zod**             | Schema validation for the create form    |
| **Lucide React**    | Icon library                             |
| **Fetch API**       | Data fetching from JSONPlaceholder       |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Layout.tsx        # App shell with Navbar + main content area
│   ├── Navbar.tsx        # Sticky top navigation bar
│   ├── SearchBar.tsx     # Search input with icon
│   ├── SkeletonCard.tsx  # Loading skeleton placeholder
│   ├── UseForm.tsx       # Modal form for creating a new user
│   ├── UserCard.tsx      # Individual user card component
│   └── UserList.tsx      # Grid of user cards with loading/error states
├── context/
│   └── UserContext.tsx   # React Context provider (fetch, add, lookup)
├── hooks/
│   └── useSearch.ts      # Generic debounced search hook
├── pages/
│   ├── Dashboard.tsx     # Main dashboard page
│   └── UserDetails.tsx   # Detailed user profile page
├── types/
│   └── UserTypes.ts      # TypeScript interfaces (User, Address, Company, Geo)
├── App.tsx               # Router setup and route definitions
├── main.tsx              # Application entry point
└── index.css             # Tailwind import + base font
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/forty4-frontend.git
cd forty4-frontend

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The app will be available at **http://localhost:5173**.

### Build for Production

```bash
npm run build
npm run preview   # Preview the production build locally
```

---

## 📖 Usage

### Dashboard (`/`)

- **User Cards** — Displays all users fetched from `https://jsonplaceholder.typicode.com/users` in a responsive 3-column grid (adapts to 2 on tablets, 1 on mobile).
- **Search** — Type in the search bar to filter users by name in real-time (debounced at 300 ms).
- **Create User** — Click the **"Create User"** button to open a modal form. Fill in at least a name and email (validated with Zod), then submit to add the user to the dashboard. The new user is stored client-side via React Context.
- **View Details** — Click **"View Details →"** on any card to navigate to the user's full profile.

### User Details (`/user/:id`)

- Shows the user's **full name**, **username**, **email**, **phone**, and **website**.
- Displays **company information** including name, catch phrase, and business focus.
- Shows the **full address** (street, suite, city, zip) alongside **geo-location** coordinates (latitude & longitude).
- **Back** link to return to the Dashboard.

---

## 🎯 Key Implementation Details

- **React Context** (`UserContext.tsx`) manages the global user list, loading / error states, and exposes `addUser` and `getUserById` helpers — no prop drilling needed.
- **Custom `useSearch` hook** provides a generic, debounced search that filters any array by a given key. It uses `useRef` for timer cleanup and `useMemo` for performance.
- **Form validation** uses **React Hook Form** + **Zod** schema resolver for declarative, type-safe validation with clear error messages.
- **Skeleton loading cards** provide visual feedback while API data is being fetched.
- **Responsive design** is achieved entirely with Tailwind CSS utility classes using Flexbox and CSS Grid breakpoints (`sm:`, `md:`, `lg:`).

---

## 📜 Available Scripts

| Command            | Description                            |
|--------------------|----------------------------------------|
| `npm run dev`      | Start the Vite dev server with HMR     |
| `npm run build`    | Type-check with TSC and build for prod |
| `npm run preview`  | Preview the production build locally   |
| `npm run lint`     | Run ESLint across the project          |
