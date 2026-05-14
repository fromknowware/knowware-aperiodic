<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Knowware Aperiodic

The publication platform for the **A.R.C Institute of Knowware** — a journal covering fundamental research in information theory, coding theory, cryptography, communications, and signal processing.

Built as a two-service monorepo: a **Vite + React** frontend and a **PayloadCMS v3** headless CMS, both running locally and deployable independently.

---

## Architecture

```
knowware-aperiodic/
├── src/                  # Vite + React frontend  (port 3000)
│   ├── pages/            # Article and category route pages
│   ├── lib/api.ts        # Payload REST API client
│   ├── App.tsx           # Homepage layout
│   └── Containers.tsx    # Section components
└── cms/                  # PayloadCMS v3 + Next.js  (port 3001)
    ├── payload.config.ts # CMS configuration
    └── src/
        ├── collections/  # Articles, Authors, Categories, Issues, Media, Users
        └── app/          # Next.js app directory (admin UI + REST API)
```

The frontend fetches content from the CMS via `VITE_CMS_URL` (defaults to `http://localhost:3001`). The CMS exposes a full REST API at `/api/*` and an admin panel at `/admin`.

---

## Collections

| Collection | Description |
|---|---|
| **Articles** | Research papers, news, features, interviews — with slug, rich text body, author, category, status |
| **Authors** | Researcher profiles with affiliation and bio |
| **Categories** | Research areas (Information Theory, Coding Theory, Cryptography, etc.) |
| **Issues** | Journal issues grouping articles by volume |
| **Media** | Image and file uploads |
| **Users** | CMS admin users |

---

## Getting Started

**Prerequisites:** Node.js 18+

### 1. Frontend

```bash
npm install
cp .env.example .env.local   # set VITE_CMS_URL if needed
npm run dev                  # → http://localhost:3000
```

### 2. CMS

```bash
cd cms
npm install
cp .env.example .env.local   # set PAYLOAD_SECRET
npm run dev                  # → http://localhost:3001/admin
```

On first visit to `/admin`, create your admin user. Then add **Categories** first, then **Authors**, then **Articles** — the frontend will reflect published content immediately.

---

## Frontend Routes

| Route | Description |
|---|---|
| `/` | Homepage — hero, trending, sticky article sections |
| `/articles/:slug` | Article detail page |
| `/categories/:slug` | Category listing page |

---

## Scripts

### Frontend
```bash
npm run dev       # dev server
npm run build     # production build
npm run preview   # preview production build
npm run lint      # TypeScript check
```

### CMS
```bash
npm run dev                   # dev server
npm run build                 # production build
npm run generate:types        # regenerate payload-types.ts
npm run generate:importmap    # regenerate importMap.js
```

---

## Environment Variables

### Frontend (`.env.local`)
```
VITE_CMS_URL=http://localhost:3001
```

### CMS (`cms/.env.local`)
```
PAYLOAD_SECRET=your-secret-here
DATABASE_URI=file:./data.db
PAYLOAD_PUBLIC_SERVER_URL=http://localhost:3001
FRONTEND_URL=http://localhost:3000
```

---

## Stack

**Frontend** — React 19, TypeScript, Vite 6, Tailwind CSS v4, Motion, React Router v7, Lucide React

**CMS** — PayloadCMS v3, Next.js 15, SQLite (`@payloadcms/db-sqlite`), Lexical rich text editor

---

## Related

- [A.R.C Institute of Knowware](https://github.com/fromknowware) — Applied Research and Cybernetics
- [H.A.R.T](https://github.com/fromknowware) — Academic timestamping for legal and scientific verification
