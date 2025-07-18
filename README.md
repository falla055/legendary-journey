# Endangered Animals Dashboard

A Next.js application displaying wildlife conservation data with interactive charts and bilingual support.

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the dashboard.

## Project Structure

```
src/
├── app/
│   ├── page.js          # Main dashboard component
│   ├── layout.js        # Root layout
│   └── globals.css      # Global styles
└── components/          # Reusable components (if any)
```

## Data Structure

The dashboard displays:
- **Endangered Species Data**: Population counts by region and year (2020-2023)
- **Funding Data**: Wildlife protection funding by region over time (2019-2023)
- **Exchange Rates**: Currency conversion for funding visualization

⚠️ **Note**: All data in this dashboard is artificially generated for educational purposes and does not represent real wildlife conservation statistics.

## Key Components

- **Language Switching**: Toggle between English and French
- **Region Filtering**: View global or region-specific data
- **Year Selection**: Choose data year for species charts
- **Currency Conversion**: Display funding in different currencies
- **Visual Highlighting**: Lowest population species highlighted in red

## Development

This project uses modern React patterns:
- Functional components with hooks
- State management with `useState`
- Client-side rendering with `'use client'`
- Responsive design with Tailwind utilities

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
