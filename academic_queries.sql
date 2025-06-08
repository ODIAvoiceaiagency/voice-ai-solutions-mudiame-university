CREATE TABLE academic_queries (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    student_id TEXT,
    query TEXT,
    department TEXT,
    response TEXT,
    created_at TIMESTAMP DEFAULT now()
);