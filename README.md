🧠 Psypher – A Tier-Based Event Showcase Platform

Psypher is a dynamic, tier-based event showcase web application built with Next.js 14, Clerk.dev, and Supabase. It enables authenticated users to view curated events based on their membership level (Free, Silver, Gold, Platinum), offering a tailored experience across different access tiers. The app is fully responsive, secure, and optimized for real-world deployment on platforms like Vercel.

🧩 Key Features
🔐 Authentication: Seamless login and sign-up using Clerk.dev
🏆 Tier Access Logic: Personalized event visibility by user tier
📱 Responsive UI: Tailwind-powered, mobile-first interface
🗃️ Data Management: Supabase-powered PostgreSQL backend with RLS
🧪 Tier Simulation: UI-based tier upgrade simulation for testing
⏳ UX Enhancements: Graceful loading states and error handling
⚙️ Tech Stack
Layer	Technology
Frontend	Next.js 14 (App Router)
Auth	Clerk.dev
Database	Supabase (PostgreSQL)
Styling	Tailwind CSS
UI Kit	shadcn/ui
🚧 How It Works
Users sign in via Clerk, and their membership tier is stored as metadata. The app fetches events from Supabase, filters them by tier, and displays them accordingly. For example:

Free Tier → sees only free events
Gold Tier → sees free, silver, and gold events
Platinum → sees everything
Admins can simulate tier upgrades in the UI for testing purposes, and the platform includes Row-Level Security (RLS) for enhanced data protection.

🔐 Security Highlights
Row-Level Security enabled on the database
Middleware-based route protection using Clerk
Environment variable safety
Strict tier validation logic for event access
📦 Project Structure
├── app/                 # Next.js App Router setup
├── components/          # UI & logic components
├── lib/                 # Supabase client & tier utilities
├── scripts/             # SQL schema + seed data
└── middleware.ts        # Clerk middleware
💡 Ideal Use Cases
Premium content platforms
Membership-based event dashboards
Internal company portals with role-based access
Learning platforms with tiered lesson access
🔭 Future Plans
Integrated payment gateway for tier upgrades
Event registration & reminders
Admin dashboard for event creation
Rich filters, tags, and search capabilities
