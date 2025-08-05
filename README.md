# Hypr Stack 🚀
A modern full-stack monorepo starter using React + Tanstack Router, Convex, and Turborepo. Fast, scalable, and developer-friendly.

## 📰 Features
- ⚡️ Full-stack monorepo setup
- 🧭 TanStack Router for routing
- 📡 Convex as the backend
- 🏗 Turborepo for task running and monorepo support
- 🧩 Shared code across frontend and backend
- ✅ Opinionated project structure

## ⚙️ Tech Stack
- **Client:** [React](https://react.dev/) + [Tanstack Router ](https://tanstack.com/router/latest)
- **Backend:** [Convex](https://convex.dev/)
- **Ui Library:** [shadcn/ui](https://ui.shadcn.com/)

## 📁 Project Structure

```bash
.
├── .vscode         # Editor settings
├── backend         # Convex backend
├── shared          # Shared code/types/utils
├── web             # React frontend
├── .gitignore
├── .npmrc
├── README.md
├── biome.json
└── package.json
```

## 🚀 Getting Started

> ⚠️ **Important Note**
> This starter uses **npm** by default for package management.  
> If you'd like to use **pnpm** instead, please follow the [pnpm setup instructions](#using-pnpm) below.

```
git clone https://github.com/pranoymajumdar/hypr-stack
cd hypr-stack
npm install
```


## 📦 Using pnpm
To use **pnpm** with this starter, follow these steps carefully to configure your workspace correctly:

1. **Create a `pnpm-workspace.yaml` file** in the root of your project with the following content, listing your workspace folders:
```yaml
packages:
  - apps/*
  - packages/*
  - tooling/*
```
2. Update your package.json dependencies for `web/` & `backend/`:

Change:
```
"@repo/backend": "*",
"@repo/shared": "*"
```
To:
```
"@repo/backend": "workspace:*",
"@repo/shared": "workspace:*"
```
This ensures pnpm correctly links your local workspace packages.

3. Remove package-lock.json (npm lockfile) to avoid conflicts.
4. Install dependencies using pnpm:
```
pnpm install
```
5. Run your dev scripts with pnpm:
```
pnpm dev
```
> 🔔 Note: Be consistent and use pnpm commands throughout your workflow to prevent dependency conflicts.