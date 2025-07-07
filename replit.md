# VortexTechStudio - Gaming-Inspired Digital Solutions

## Overview

VortexTechStudio is a full-stack web application built with React, TypeScript, and Node.js/Express. The application serves as a gaming-inspired digital agency website that showcases services including game development, mobile app development, web development, and publishing services. The platform features a modern, gaming-themed UI with neon aesthetics and includes a contact form system for client inquiries.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for development and build processes
- **UI Library**: Radix UI components with custom gaming-themed styling
- **Styling**: Tailwind CSS with custom CSS variables for gaming aesthetics
- **State Management**: 
  - React Query (TanStack Query) for server state management
  - React Hook Form for form state management
  - Context API for service selection state
- **Routing**: Wouter for client-side routing
- **Fonts**: Orbitron and Space Grotesk for gaming-inspired typography

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **File Handling**: Multer for file upload processing
- **Session Management**: Connect-pg-simple for PostgreSQL session storage

### Data Storage Solutions
- **Primary Database**: PostgreSQL via Neon Database
- **ORM**: Drizzle ORM with TypeScript schema definitions
- **Schema Management**: Drizzle Kit for migrations and schema changes
- **Fallback Storage**: In-memory storage implementation for development

## Key Components

### Frontend Components
- **Layout System**: Navbar, Footer, and responsive layout components
- **Page Components**: Home, Services, About, Contact, Privacy, and 404 pages
- **UI Components**: Comprehensive shadcn/ui component library with gaming customizations
- **Effects**: Particle background animations and gaming-themed visual effects
- **Forms**: React Hook Form with Zod validation for contact submissions

### Backend Services
- **API Routes**: RESTful endpoints for contact form processing
- **Storage Layer**: Abstracted storage interface with both database and in-memory implementations
- **File Processing**: Multi-file upload support with size and type validation
- **Error Handling**: Centralized error handling middleware

### Database Schema
- **Users Table**: Basic user authentication structure
- **Contacts Table**: Contact form submissions with file attachments support
- **Migration System**: Drizzle-based schema versioning

## Data Flow

1. **Client Request**: User interactions trigger API calls through React Query
2. **Form Submission**: Contact forms are validated client-side with Zod schemas
3. **File Upload**: Files are processed through Multer middleware
4. **Database Operations**: Contact data is stored via Drizzle ORM
5. **Response Handling**: Success/error responses are managed through React Query
6. **UI Updates**: Toast notifications and form state updates provide user feedback

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL database connection
- **@radix-ui/***: Headless UI components for accessibility
- **@tanstack/react-query**: Server state management
- **drizzle-orm**: TypeScript-first ORM
- **react-hook-form**: Form handling and validation
- **zod**: Runtime type validation
- **multer**: File upload handling
- **wouter**: Lightweight routing

### Development Dependencies
- **Vite**: Build tool and development server
- **TypeScript**: Type checking and compilation
- **Tailwind CSS**: Utility-first CSS framework
- **Drizzle Kit**: Database migrations and schema management

## Deployment Strategy

### Development Environment
- **Dev Server**: Vite development server with hot module replacement
- **API Development**: Express server with TypeScript compilation via tsx
- **Database**: Neon Database for consistent development/production environment

### Production Build
- **Frontend**: Vite build output to `dist/public`
- **Backend**: esbuild bundling of server code to `dist/`
- **Database**: Drizzle push for schema deployment
- **Environment**: Production-ready Express server serving static files

### Build Commands
- `npm run dev`: Development server with hot reload
- `npm run build`: Production build for both frontend and backend
- `npm run start`: Production server startup
- `npm run db:push`: Database schema deployment

## Changelog

```
Changelog:
- July 06, 2025. Major system overhaul and rebranding:
  * Replaced Calendly with custom date/time booking system
  * Updated company branding to "Vortex Strategies Ltd." throughout
  * Implemented custom appointment booking with date picker and time slots
  * Added comprehensive Privacy Policy with full legal content
  * Converted all email links to plain text format
  * Updated contact emails to info@vortexstratergieslimited.uk and support@vortexstratergieslimited.uk
  * Added Privacy Policy to main navigation
  * Enhanced booking system sends requests to info@vortexstratergieslimited.uk
  * Fixed CSS import ordering issues
  * Enhanced gaming-themed UI with neon colors and futuristic design
  * Implemented service-to-contact form auto-population feature
  * Created custom SVG gaming illustrations to replace stock photos
  * Added comprehensive file upload system with drag-and-drop
  * Implemented responsive mobile navigation
  * Enhanced particle background effects
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```