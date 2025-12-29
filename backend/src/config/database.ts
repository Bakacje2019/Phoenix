import { Client } from 'pg';
import mongoose from 'mongoose';

/**
 * Establish connections to PostgreSQL and MongoDB.
 *
 * Environment variables:
 *  - POSTGRES_URI: connection string for PostgreSQL.
 *  - MONGODB_URI: connection string for MongoDB.
 */
export async function connectDatabases() {
  // Connect to PostgreSQL
  const pgUri = process.env.POSTGRES_URI;
  if (pgUri) {
    const client = new Client({ connectionString: pgUri });
    await client.connect();
    console.log('Connected to PostgreSQL');
    // You can export or store the client instance if needed
  } else {
    console.warn('POSTGRES_URI not defined; skipping PostgreSQL connection');
  }

  // Connect to MongoDB
  const mongoUri = process.env.MONGODB_URI;
  if (mongoUri) {
    await mongoose.connect(mongoUri);
    console.log('Connected to MongoDB');
  } else {
    console.warn('MONGODB_URI not defined; skipping MongoDB connection');
  }
}