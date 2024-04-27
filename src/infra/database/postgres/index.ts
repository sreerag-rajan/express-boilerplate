import { Database } from '..';
const pg = require('pg'); // Replace with actual import based on your library


class PostgresDatabase extends Database {
  private connectionString: string;

  constructor(connectionString: string) {
    super();
    this.connectionString = connectionString;
  }

  async connect(): Promise<void> {
    try {
      const client = new pg.Client(this.connectionString);
      await client.connect();
      this.logger.log('Connected to Postgres');
      // You can add logic to use the connected client here
      await client.end(); // Close the connection when done (optional)
    } catch (error) {
      this.logger.error('Error connecting to Postgres', error);
      throw error;
    }
  }
}


export class PostgresDatabaseImpl extends PostgresDatabase {
  constructor(connectionString: string) {
    super(connectionString);
  }

  async connect(): Promise<void> {
    try {
      await super.connect();
      this.logger.log('Connected to Postgres');
    } catch (error) {
      this.logger.error('Error connecting to Postgres', error);
      throw error;
    }
  }
}





