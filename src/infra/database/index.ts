import { Logger } from "../logger";

// Remove the abstract: true option
export abstract class Database {
  protected readonly logger = new Logger(this.constructor.name);

  abstract connect(): Promise<void>;
}
