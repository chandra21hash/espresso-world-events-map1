# Espresso World Map

## Overview

Espresso World Map is an interactive mapping application that visualizes global events and community presence through an engaging map interface. The application displays past and upcoming Espresso-related events across different countries, featuring custom markers, country highlighting, and an intuitive toggle system. Built with modern web technologies, it provides a rich user experience inspired by popular mapping applications like Airbnb's travel maps and Apple Maps, while maintaining the warm aesthetic of specialty coffee brands.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern component patterns
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom espresso-themed color palette and shadcn/ui component library
- **State Management**: TanStack Query for server state management and local React state for UI interactions

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for full-stack type safety
- **API Design**: RESTful endpoints with `/api` prefix routing
- **Development**: Hot module replacement with Vite integration for seamless development experience

### Mapping System
- **Core Library**: React Leaflet for interactive map functionality
- **Tile Provider**: OpenStreetMap for base map tiles
- **Clustering**: React Leaflet Cluster for marker grouping at different zoom levels
- **Geospatial Data**: Custom GeoJSON country data for highlighting regions with events
- **Custom Markers**: Coffee bean-shaped markers with espresso color coding

### Data Management
- **Database ORM**: Drizzle ORM with PostgreSQL dialect for type-safe database interactions
- **Schema**: Centralized schema definitions in shared directory for consistency
- **Validation**: Zod integration for runtime type validation and schema generation

### Design System
- **Component Library**: shadcn/ui with Radix UI primitives for accessible, customizable components
- **Color Palette**: Custom espresso-inspired colors extracted from brand logo
- **Typography**: Inter for primary text and Playfair Display for elegant headings
- **Theme Support**: Light/dark mode with CSS custom properties and context-based theme switching

### Event Data Architecture
- **Data Structure**: Typed interfaces for event information including coordinates, dates, and status
- **Country Mapping**: Sophisticated country name variation handling for consistent highlighting
- **Event Categories**: Binary classification system (past/upcoming) with visual differentiation

### Performance Optimizations
- **Code Splitting**: Vite's automatic code splitting for optimal bundle sizes
- **Asset Optimization**: Image optimization and lazy loading strategies
- **Map Performance**: Efficient marker clustering and viewport-based rendering

## External Dependencies

### Core Framework Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL connection for cloud database hosting
- **drizzle-orm**: Type-safe ORM with PostgreSQL adapter for database operations
- **@tanstack/react-query**: Server state management with caching and synchronization

### Mapping and Visualization
- **leaflet**: Core mapping library for interactive map functionality
- **react-leaflet**: React bindings for Leaflet with component-based API
- **react-leaflet-cluster**: Marker clustering functionality for better map performance
- **@types/leaflet**: TypeScript definitions for Leaflet library

### UI Component System
- **@radix-ui/react-**: Comprehensive set of accessible, unstyled UI primitives
- **tailwindcss**: Utility-first CSS framework for rapid styling
- **class-variance-authority**: Utility for creating variant-based component APIs
- **clsx**: Conditional className utility for dynamic styling

### Development and Build Tools
- **vite**: Next-generation frontend build tool with HMR support
- **typescript**: Static type checking for enhanced developer experience
- **@replit/vite-plugin-runtime-error-modal**: Development error overlay integration
- **@replit/vite-plugin-cartographer**: Replit-specific development enhancements

### Form and Validation
- **react-hook-form**: Performant forms with minimal re-renders
- **@hookform/resolvers**: Validation library integrations for react-hook-form
- **zod**: Schema validation library for runtime type checking

### Utility Libraries
- **date-fns**: Modern JavaScript date utility library
- **cmdk**: Command palette component for enhanced user interactions
- **nanoid**: Secure, URL-safe unique string ID generator

### Session Management
- **connect-pg-simple**: PostgreSQL session store for Express applications
- **express-session**: Session middleware for user state management