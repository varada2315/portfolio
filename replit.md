# Varada Kumbhar Portfolio

## Overview

A personal portfolio website for Varada Kumbhar, a Product Operations and Business Analyst professional. The site uses a unique "Building Blocks of a Product" visual theme where each section appears as a modular tech block, representing product components stacked together. The design emphasizes a professional, minimal, tech-inspired aesthetic with grid-based layouts, subtle shadows, and smooth animations.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **Styling**: Tailwind CSS v4 with custom CSS variables for theming
- **UI Components**: shadcn/ui component library (New York style)
- **Animations**: Framer Motion for scroll and hover animations
- **Smooth Scrolling**: Lenis library for smooth scroll behavior
- **State Management**: TanStack React Query for server state

### Backend Architecture
- **Runtime**: Node.js with Express
- **Language**: TypeScript compiled with tsx
- **Build Tool**: Vite for frontend, esbuild for server bundling
- **API Pattern**: RESTful endpoints prefixed with `/api`
- **Static Serving**: Express serves built frontend assets in production

### Design System
- **Color Palette**: Modern lavender studio palette with soft purples and teals
- **Typography**: Space Grotesk (display) and Inter (body) fonts
- **Component Pattern**: Block-based modular components with variants (default, primary, secondary, accent)
- **Layout**: Single-page application with sections for Hero, About, Skills, Projects, Experience, and Contact

### Data Storage
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts`
- **Current Storage**: In-memory storage implementation with interface for future database migration
- **Migrations**: Drizzle Kit for database migrations (output to `./migrations`)

### Project Structure
```
client/           # Frontend React application
  src/
    components/   # UI components (shadcn + custom)
    pages/        # Page components
    hooks/        # Custom React hooks
    lib/          # Utilities and query client
server/           # Express backend
shared/           # Shared types and schemas
attached_assets/  # Static assets and design references
```

## External Dependencies

### Third-Party Services
- **Fonts**: Google Fonts (Space Grotesk, Inter)
- **3D Graphics**: Spline (@splinetool/react-spline) for potential 3D elements

### Database
- **PostgreSQL**: Required for production (via DATABASE_URL environment variable)
- **Session Store**: connect-pg-simple for session management

### Development Tools
- **Replit Plugins**: Cartographer, dev banner, runtime error overlay for Replit environment
- **Vite Plugins**: Custom meta-images plugin for OpenGraph tags

### Key Frontend Libraries
- Radix UI primitives for accessible components
- react-hook-form with zod for form validation
- date-fns for date formatting
- embla-carousel for carousels
- vaul for drawer components