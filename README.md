# Tier-Based Event Showcase

A responsive web application that allows logged-in users to view events based on their membership tier (Free, Silver, Gold, Platinum). Built with Next.js 14, Clerk.dev, and Supabase.

## 🚀 Features

- **Authentication**: Secure login/signup with Clerk.dev
- **Tier-Based Access**: Users see events based on their membership level
- **Responsive Design**: Mobile-friendly interface with Tailwind CSS
- **Event Management**: PostgreSQL database with Supabase
- **Tier Upgrades**: Simulate tier upgrades through the UI
- **Loading States**: Smooth user experience with proper loading indicators

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 (App Router)
- **Authentication**: Clerk.dev
- **Database**: Supabase (PostgreSQL)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui

## 📋 Setup Instructions

### 1. Clone the Repository

\`\`\`bash
git clone <repository-url>
cd tier-event-showcase
npm install
\`\`\`

### 2. Environment Variables

Create a \`.env.local\` file in the root directory:

\`\`\`env
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
\`\`\`

### 3. Database Setup

1. Create a new Supabase project
2. Run the SQL scripts in the \`scripts\` folder:
   - \`01-create-events-table.sql\`
   - \`02-seed-events.sql\`

### 4. Clerk Setup

1. Create a Clerk application
2. Configure the following in your Clerk dashboard:
   - Add \`http://localhost:3000\` to allowed origins
   - Set up user metadata to store tier information
   - Configure sign-in/sign-up flows

### 5. Run the Application

\`\`\`bash
npm run dev
\`\`\`

Visit \`http://localhost:3000\` to see the application.

## 👥 Demo User Credentials

For testing purposes, you can create users and manually set their tier in Clerk's dashboard:

1. **Free Tier User**: Any new user (default tier)
2. **Silver Tier User**: Update user metadata with \`{ "tier": "silver" }\`
3. **Gold Tier User**: Update user metadata with \`{ "tier": "gold" }\`
4. **Platinum Tier User**: Update user metadata with \`{ "tier": "platinum" }\`

## 🎯 Tier Access Logic

- **Free**: Can access Free tier events only
- **Silver**: Can access Free + Silver tier events
- **Gold**: Can access Free + Silver + Gold tier events
- **Platinum**: Can access all events (Free + Silver + Gold + Platinum)

## 📱 Features Implemented

### Core Requirements
- ✅ Clerk.dev authentication integration
- ✅ Protected event listing page
- ✅ User tier stored in Clerk metadata
- ✅ Supabase events table with proper schema
- ✅ Seeded data (2 events per tier)
- ✅ Tier-based event filtering
- ✅ Responsive Tailwind CSS design
- ✅ Event cards with all required information

### Bonus Features
- ✅ Loading states and error handling
- ✅ Upgrade prompts for restricted events
- ✅ Tier upgrade simulation via UI
- ✅ Row-Level Security (RLS) setup
- ✅ Clean, accessible UI design

## 🏗️ Project Structure

\`\`\`
├── app/
│   ├── events/
│   │   └── page.tsx          # Protected events listing page
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout with Clerk provider
│   └── page.tsx              # Home page with authentication
├── components/
│   ├── event-card.tsx        # Event card component
│   ├── tier-upgrade-button.tsx # Tier upgrade functionality
│   └── ui/                   # shadcn/ui components
├── lib/
│   ├── supabase.ts           # Supabase client configuration
│   └── tier-utils.ts         # Tier logic utilities
├── scripts/
│   ├── 01-create-events-table.sql
│   └── 02-seed-events.sql
└── middleware.ts             # Clerk middleware for route protection
\`\`\`

## 🚀 Deployment

The application is ready for deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

## 🔒 Security Features

- Row-Level Security (RLS) enabled on events table
- Protected routes with Clerk middleware
- Secure environment variable handling
- Proper authentication checks on all protected pages

## 📈 Future Enhancements

- Payment integration for real tier upgrades
- Event booking functionality
- Email notifications for new events
- Admin panel for event management
- Advanced filtering and search
- Event categories and tags

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.
\`\`\`

## 🆘 Support

If you encounter any issues or have questions, please:
1. Check the setup instructions above
2. Verify all environment variables are set correctly
3. Ensure database scripts have been executed
4. Contact the development team for further assistance
