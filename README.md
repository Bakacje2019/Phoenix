# Phoenix AI Space Project

This repository contains the skeleton implementation for the **Phoenix AI Space** platform.  It is divided into multiple layers:

- **frontend/** – a Next.js 13 application written in TypeScript using Tailwind CSS for styling.  This app provides the web interface for chatting with agents, viewing Sparkpages and dashboards.
- **backend/** – a Node.js/Express API with a separate Python micro‑service for AI functionality.  The backend exposes REST endpoints and WebSockets to the frontend and orchestrates tasks across services.
- **database/** – SQL scripts defining the PostgreSQL schema used by the platform as well as Mongoose models for MongoDB.
- **android/** – a Kotlin/Jetpack Compose mobile application that communicates with the backend via HTTP and WebSocket to provide native mobile access.

None of the code here is fully functional out of the box; it serves as a starting point for development.  Replace the placeholder logic with real implementation and hook it up to your model router and data sources.