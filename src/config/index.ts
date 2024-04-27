import { CONFIG } from './constants';

export * from './constants'

/**
 * ConfigService provides a convenient way to access configuration values.
 * It copies the values from the CONFIG object into an internal Map,
 * making it easy to retrieve configuration values using a simple key.
 */
export class ConfigService {
  /**
   * Map that stores the configuration values.
   * The key is the configuration key, and the value is the configuration value.
   */
  private configValues: Map<string, any> = new Map();

  /**
   * Constructs a new ConfigService and initializes configValues with the
   * values from the CONFIG object.
   */
  constructor() {
    // Copy all properties from CONFIG to this.configValues
    Object.keys(CONFIG).forEach(key => {
      this.configValues.set(key, CONFIG[key]);
    });
  }

  /**
   * Retrieves the configuration value for the given key.
   * @param key The key for the configuration value.
   * @returns The configuration value for the given key, or undefined if the key is not found.
   */
  get<T>(key: string): T {
    return this.configValues.get(key) as T;
  }
}
