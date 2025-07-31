-- Create enum for tiers
CREATE TYPE tier_enum AS ENUM ('free', 'silver', 'gold', 'platinum');

-- Create events table
CREATE TABLE events (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    event_date TIMESTAMP WITH TIME ZONE NOT NULL,
    image_url TEXT,
    tier tier_enum NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE events ENABLE ROW LEVEL SECURITY;

-- Create policy for authenticated users to read events
CREATE POLICY "Users can view events based on their tier" ON events
    FOR SELECT
    USING (auth.role() = 'authenticated');
