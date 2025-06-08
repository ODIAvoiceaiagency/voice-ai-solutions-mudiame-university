CREATE TABLE whatsapp_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    phone TEXT,
    message TEXT,
    type TEXT,
    status TEXT,
    sent_at TIMESTAMP DEFAULT now()
);