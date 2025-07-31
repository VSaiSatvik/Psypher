-- Seed events data
INSERT INTO events (title, description, event_date, image_url, tier) VALUES
-- Free tier events
('Community Meetup', 'Join our monthly community gathering to network and share ideas with fellow members.', '2025-02-15 18:00:00+00', '/placeholder.svg?height=200&width=300', 'free'),
('Beginner Workshop', 'Learn the basics in this introductory workshop designed for newcomers to our platform.', '2025-02-20 14:00:00+00', '/placeholder.svg?height=200&width=300', 'free'),

-- Silver tier events
('Advanced Training Session', 'Deep dive into advanced techniques and strategies with our expert instructors.', '2025-02-25 16:00:00+00', '/placeholder.svg?height=200&width=300', 'silver'),
('Silver Member Networking', 'Exclusive networking event for Silver tier members and above.', '2025-03-01 19:00:00+00', '/placeholder.svg?height=200&width=300', 'silver'),

-- Gold tier events
('VIP Product Launch', 'Be among the first to experience our latest product features and innovations.', '2025-03-05 17:00:00+00', '/placeholder.svg?height=200&width=300', 'gold'),
('Gold Masterclass', 'Intensive masterclass session with industry leaders and top performers.', '2025-03-10 15:00:00+00', '/placeholder.svg?height=200&width=300', 'gold'),

-- Platinum tier events
('Executive Summit', 'Exclusive summit for our most valued Platinum members with C-level executives.', '2025-03-15 10:00:00+00', '/placeholder.svg?height=200&width=300', 'platinum'),
('Platinum Gala', 'Annual gala dinner with premium entertainment and exclusive announcements.', '2025-03-20 20:00:00+00', '/placeholder.svg?height=200&width=300', 'platinum');
