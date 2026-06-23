-- Run this in Supabase SQL Editor to create the password_reset_tokens table

CREATE TABLE IF NOT EXISTS password_reset_tokens (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  token TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP DEFAULT now(),
  expires_at TIMESTAMP DEFAULT (now() + interval '1 hour'),
  used BOOLEAN DEFAULT false
);

CREATE INDEX idx_password_reset_tokens_token ON password_reset_tokens(token);
CREATE INDEX idx_password_reset_tokens_user_id ON password_reset_tokens(user_id);