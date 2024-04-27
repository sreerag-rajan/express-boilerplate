
import { Database } from '../../infra/database';
import { MongoDatabaseImpl } from '../../infra/database/mongo';
import { PostgresDatabaseImpl } from '../../infra/database/postgres';
import { DatabaseConfigService } from './config';
import { ConfigService } from '..';
import { Logger } from '../../infra/logger';

export class MainDatabase {
  private readonly database: Database;
  private readonly databaseConfigService: DatabaseConfigService
  private readonly configService : ConfigService
  private logger = new Logger(this.constructor.name)

  constructor() {
    this.configService = new ConfigService()
    this.databaseConfigService = new DatabaseConfigService(this.configService);
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

  async connect(): Promise<void> {
    await this.database.connect();
    this.logger.log(`Connected to ${this.database.constructor.name}`);
  }

  // You can expose additional methods specific to the connected database here
}
