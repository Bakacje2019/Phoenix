-- PostgreSQL schema for Phoenix AI Space

-- Users table stores account information and subscription tier
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  tier TEXT DEFAULT 'free',
  usage_stats JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Workspaces allow collaborative projects among multiple users
CREATE TABLE IF NOT EXISTS workspaces (
  id SERIAL PRIMARY KEY,
  owner_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  settings JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Workspace members join table
CREATE TABLE IF NOT EXISTS workspace_members (
  workspace_id INTEGER REFERENCES workspaces(id) ON DELETE CASCADE,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  role TEXT DEFAULT 'member',
  PRIMARY KEY (workspace_id, user_id)
);

-- Agents store active agent sessions (e.g., search, slides)
CREATE TABLE IF NOT EXISTS agents (
  id SERIAL PRIMARY KEY,
  type TEXT NOT NULL,
  memory_context_id INTEGER,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Artifacts store generated outputs like reports, slides, etc.
CREATE TABLE IF NOT EXISTS artifacts (
  id SERIAL PRIMARY KEY,
  type TEXT NOT NULL,
  url TEXT NOT NULL,
  parent_thread_id INTEGER,
  created_at TIMESTAMPTZ DEFAULT NOW()
);