import { CONFIG_KEYS, ConfigService } from "..";

export interface DatabaseConfig {
  type: 'mongo' | 'postgres' | string; // Add more database types as needed
  connectionString: string;
}

/**
 * DB_DIALECT: WHICH TYPE OF DB TO CONNECT
 * DB_URI: THE CONNECTION URL
 */
export class DatabaseConfigService {
  constructor(private readonly configService: ConfigService) {}

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
