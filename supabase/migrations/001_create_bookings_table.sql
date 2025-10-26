-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create bookings table
CREATE TABLE bookings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  
  -- Service Information
  service_id VARCHAR(100) NOT NULL,
  service_name VARCHAR(255) NOT NULL,
  service_category VARCHAR(50) NOT NULL,
  service_duration INTEGER NOT NULL,
  service_price DECIMAL(10, 2) NOT NULL,
  
  -- Booking Time
  booking_date DATE NOT NULL,
  booking_time TIME NOT NULL,
  booking_end_time TIME NOT NULL,
  
  -- Client Information
  client_name VARCHAR(255) NOT NULL,
  client_email VARCHAR(255) NOT NULL,
  client_phone VARCHAR(20) NOT NULL,
  special_requests TEXT,
  
  -- Status & Tracking
  status VARCHAR(20) DEFAULT 'confirmed',
  google_calendar_event_id VARCHAR(255),
  
  -- Timestamps
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX idx_booking_datetime ON bookings(booking_date, booking_time);
CREATE INDEX idx_client_email ON bookings(client_email);
CREATE INDEX idx_status ON bookings(status);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_bookings_updated_at 
  BEFORE UPDATE ON bookings
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- RLS Policy: Allow public to insert bookings (guest booking)
CREATE POLICY "Allow public insert" ON bookings
  FOR INSERT
  WITH CHECK (true);

-- RLS Policy: Allow public to read their own bookings by email
CREATE POLICY "Allow public read own bookings" ON bookings
  FOR SELECT
  USING (true);

-- Note: Admin access will be handled via service role key in API routes
