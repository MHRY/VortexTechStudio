# replit.md

## Overview

This is a full-stack web application for Vortex Strategies Limited, a digital services company specializing in game development, mobile app development, web development, and publishing services. The application is built with a modern tech stack featuring React frontend, Express.js backend, and PostgreSQL database with Drizzle ORM.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for development and production builds
- **Routing**: Wouter for client-side routing
- **State Management**: TanStack Query for server state management
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Forms**: React Hook Form with Zod validation
- **UI Components**: Radix UI primitives with custom styling

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Pattern**: RESTful API architecture
- **File Handling**: Multer for file uploads
- **Request Logging**: Custom middleware for API request logging

### Database Architecture
- **Database**: PostgreSQL (configured for Neon serverless)
- **ORM**: Drizzle ORM with TypeScript support
- **Schema Management**: Drizzle Kit for migrations
- **Storage Pattern**: Repository pattern with in-memory fallback

## Key Components

### Database Schema
- **Users Table**: Basic user management with username/password
- **Contact Submissions Table**: Stores contact form submissions with file attachments
- **Schema Validation**: Zod schemas for type-safe database operations

### API Endpoints
- `POST /api/contact` - Contact form submission with file upload support
- File upload restrictions: PDF, DOC, DOCX, ZIP, RAR files up to 10MB

### Frontend Pages
- **Home**: Hero section with services overview
- **Services**: Detailed service descriptions (Game Dev, Mobile Apps, Web Dev, Publishing)
- **Process**: Development process timeline
- **About**: Company information and values
- **Contact**: Contact form with file upload capability
- **Privacy**: Privacy policy page

### UI Components
- Responsive navigation with mobile hamburger menu
- Contact form with drag-and-drop file upload
- Service cards with gradient backgrounds
- Process timeline with visual steps
- Toast notifications for user feedback

## Data Flow

1. **Client Requests**: Frontend makes API calls using TanStack Query
2. **Server Processing**: Express.js handles requests with custom middleware
3. **File Uploads**: Multer processes file uploads to local storage
4. **Database Operations**: Drizzle ORM manages database interactions
5. **Response Handling**: Structured JSON responses with error handling

## External Dependencies

### Core Framework Dependencies
- React ecosystem (React, React DOM, React Hook Form)
- Express.js with TypeScript support
- Drizzle ORM with PostgreSQL adapter
- Neon serverless PostgreSQL database

### UI and Styling Dependencies
- Tailwind CSS for utility-first styling
- Radix UI for accessible component primitives
- Lucide React for icons
- shadcn/ui component library

### Development Dependencies
- Vite for build tooling and development server
- TypeScript for type safety
- ESBuild for production builds
- Replit-specific development tools

## Deployment Strategy

### Development Mode
- Vite dev server for frontend with HMR
- TSX for running TypeScript server code
- Concurrent development of frontend and backend

### Production Build
- Vite builds static frontend assets
- ESBuild bundles server code for Node.js
- Static file serving through Express.js

### Environment Configuration
- Environment-based configuration for database connections
- Replit-specific development enhancements
- PostgreSQL connection via DATABASE_URL environment variable

## Changelog

Changelog:
- July 06, 2025. Initial setup

## User Preferences

Preferred communication style: Simple, everyday language.