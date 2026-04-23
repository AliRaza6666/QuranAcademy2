#!/usr/bin/env node

console.log('🗄️  Database Setup Instructions for Quran2');
console.log('==========================================\n');

console.log('To set up the enrollments table in Supabase, follow these steps:\n');

console.log('1. Go to your Supabase dashboard: https://supabase.com/dashboard');
console.log('2. Select your project');
console.log('3. Go to the SQL Editor tab');
console.log('4. Run the following SQL to create the enrollments table:\n');

console.log(`
CREATE TABLE IF NOT EXISTS enrollments (
  id SERIAL PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  country_code TEXT,
  phone TEXT,
  course TEXT NOT NULL,
  experience TEXT NOT NULL,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE enrollments ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public inserts
CREATE POLICY "Allow public inserts on enrollments" ON enrollments
  FOR INSERT WITH CHECK (true);

-- Optional: Create policy to allow authenticated users to view enrollments
CREATE POLICY "Allow authenticated reads on enrollments" ON enrollments
  FOR SELECT TO authenticated USING (true);
`);

console.log('\n5. Make sure your environment variables are set correctly in .env.local:');
console.log('   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url');
console.log('   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key\n');

console.log('6. Restart your development server after setting up the table.\n');

console.log('✅ Setup complete! The enroll form should now work properly.');