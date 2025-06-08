CREATE TABLE hostel_requests (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    student_id TEXT,
    issue TEXT,
    status TEXT DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT now()
);