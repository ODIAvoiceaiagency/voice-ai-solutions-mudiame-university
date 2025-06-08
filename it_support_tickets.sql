CREATE TABLE it_support_tickets (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    student_id TEXT,
    issue TEXT,
    resolution TEXT,
    status TEXT DEFAULT 'open',
    created_at TIMESTAMP DEFAULT now()
);