
// MainDatabase is a wrapper around a specific implementation of the Database interface.
// It is responsible for initializing and connecting to the appropriate database based on the configuration.

import { Database } from '../../infra/database';
import { MongoDatabaseImpl } from '../../infra/database/mongo';
import { PostgresDatabaseImpl } from '../../infra/database/postgres';
import { DatabaseConfigService } from './config';
import { ConfigService } from '..';
import { Logger } from '../../infra/logger';

export class MainDatabase {
  // The database instance that will be used for all database operations.
  private readonly database: Database;
  // Responsible for retrieving the database configuration from the environment variables.
  private readonly databaseConfigService: DatabaseConfigService;
  // Responsible for retrieving the configuration values from the environment variables.
  private readonly configService : ConfigService;
  // Logger instance to log messages.
  private logger = new Logger(this.constructor.name);

  /**
   * Initializes a new instance of the MainDatabase class.
   */
  constructor() {
    // Initialize ConfigService and DatabaseConfigService.
    this.configService = new ConfigService();
    this.databaseConfigService = new DatabaseConfigService(this.configService);
    
    // Get the database configuration and initialize the appropriate database implementation.
    const config = this.databaseConfigService.config;
    switch (config.type) {
      case 'mongo':
        this.database = new MongoDatabaseImpl(config.connectionString);
        break;
      case 'postgres':
        this.database = new PostgresDatabaseImpl(config.connectionString);
        break;
      default:
        throw new Error(`Unsupported database type: ${config.type}`);
    }
  }

  /**
   * Connects to the database.
   * @returns A promise that resolves when the connection is established.
   */
  async connect(): Promise<void> {
    await this.database.connect();
    // Log a message indicating the successful connection to the database.
    this.logger.log(`Connected to ${this.database.constructor.name}`);
  }

  // You can expose additional methods specific to the connected database here
}

