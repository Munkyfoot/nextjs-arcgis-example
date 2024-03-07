# Next.js ArcGIS JavaScript SDK Example

This is an example implementation of the ArcGIS JavaScript SDK in a Next.js app using the App Router. The app displays a simple map view and allows the user to toggle between satellite, topographic, and street basemaps. It also utilizes the [shadcn/ui](https://ui.shadcn.com/) library for the user interface.

## Features

- Integration of ArcGIS JavaScript SDK with Next.js
- App Router architecture
- Toggle between satellite, topographic, and street basemaps
- Clean and modern UI using shadcn/ui and TailwindCSS

## Getting Started

### Prerequisites

- Node.js (version 20 or later)
- npm (version 10 or later)
- ArcGIS Developer account (for API key)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Munkyfoot/nextjs-arcgis-example.git
   ```

2. Navigate to the project directory:

   ```bash
   cd nextjs-arcgis-example
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Rename the `.env.example` file to `.env.local`:

   ```bash
   mv .env.example .env.local
   ```

5. Open the `.env.local` file and replace `YOUR_API_KEY` with your actual ArcGIS API key.

   ```
   NEXT_PUBLIC_ARCGIS_API_KEY=YOUR_API_KEY
   ```

   **Note:** The current implementation uses the ArcGIS API key on the front end, which is not appropriate for production. In a production environment, you should securely store and retrieve the API key on the server-side to prevent unauthorized access.

6. Start the development server:

   ```bash
   npm run dev
   ```

7. Open your browser and visit `http://localhost:3000` to see the app in action.

## Resources

- [Next.js](https://nextjs.org/)
- [ArcGIS JavaScript SDK](https://developers.arcgis.com/javascript/)
- [shadcn/ui](https://ui.shadcn.com/)