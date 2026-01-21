# Varada Kumbhar Portfolio

## Overview

A personal portfolio website for Varada Kumbhar built with a "Building Blocks of a Product" theme. The site showcases product operations, business analysis, and project coordination skills through a modular, tech-inspired design with 3D depth effects and interactive hover animations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS v4 with custom CSS variables for theming
- **UI Components**: shadcn/ui component library (New York style)
- **Animations**: Framer Motion for scroll and hover animations
- **Smooth Scrolling**: Lenis library for enhanced scroll experience

### Backend Architecture
- **Runtime**: Node.js with Express
- **Server Pattern**: Single entry point (`server/index.ts`) with route registration
- **Static Serving**: Production builds served from `dist/public`
- **Development**: Vite dev server with HMR integration

### Data Storage
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema Location**: `shared/schema.ts`
- **Current Storage**: In-memory storage (`MemStorage` class) for development
- **Database**: PostgreSQL (requires `DATABASE_URL` environment variable)

### Build System
- **Client Build**: Vite with React plugin
- **Server Build**: esbuild for bundling server code
- **Output**: Client to `dist/public`, server to `dist/index.cjs`

### Design Patterns
- **Component Structure**: Section-based components in `components/sections/`
- **Shared Code**: Types and schemas in `shared/` directory accessible to both client and server
- **Path Aliases**: `@/` for client source, `@shared/` for shared code, `@assets/` for attached assets

## External Dependencies

### UI Framework
- Radix UI primitives for accessible components
- Lucide React for icons
- Class Variance Authority for component variants

### Third-Party Integrations
- Spline for 3D graphics (`@splinetool/react-spline`)
- Google Fonts (Space Grotesk, Inter)

### Database
- PostgreSQL via `pg` driver
- Drizzle ORM with Zod integration for schema validation
- `connect-pg-simple` for session storage

### Development Tools
- Vite plugins for Replit integration (cartographer, dev banner, runtime error modal)
- Custom meta images plugin for OpenGraph tags