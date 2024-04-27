import { CONFIG_KEYS, ConfigService } from "..";

/**
 * Interface that represents the configuration for a database.
 * 
 * @property {string} type - The type of database to connect to. Possible values are 'mongo' and 'postgres'.
 * @property {string} connectionString - The connection string for the database.
 */
export interface DatabaseConfig {
  type: 'mongo' | 'postgres' | string; // Add more database types as needed
  connectionString: string;
}

/**
 * Class that provides the configuration for the database.
 * 
 * @property {ConfigService} configService - The configuration service used to retrieve the environment variables.
 */
export class DatabaseConfigService {
  /**
   * Constructs a new instance of DatabaseConfigService.
   * 
   * @param {ConfigService} configService - The configuration service used to retrieve the environment variables.
   */
  constructor(private readonly configService: ConfigService) {}

  /**
   * Retrieves the configuration for the database.
   * 
   * @returns {DatabaseConfig} The configuration for the database.
   * @throws {Error} If the environment variable for the database type is missing.
   */
  get config(): DatabaseConfig {
    const dbType = this.configService.get<string>(CONFIG_KEYS.DB_DIALECT);
    if (!dbType) {
      throw new Error('Missing environment variable: ' + CONFIG_KEYS.DB_DIALECT);
    }
    return {
      type: dbType,
      connectionString: this.configService.get<string>(CONFIG_KEYS.DB_URI),
    };
  }
  
}