import { CONFIG } from './constants';

export * from './constants'


export class ConfigService {
  private configValues: Map<string, any> = new Map();

  constructor() {
    // Copy all properties from CONFIG to this.configValues
    Object.keys(CONFIG).forEach(key => {
      this.configValues.set(key, CONFIG[key]);
    });
    
  }
  get<T>(key: string): T {
    return this.configValues.get(key) as T;
  }
}