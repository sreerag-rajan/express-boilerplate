/**
 * A logger module with support for different log levels.
 * 
 * ## Modifications to improve this logger
 * - Change the log format to suit your needs.
 * - Support for different transports (console, file, http, etc.)
 * - Support for different log levels (info, debug, error, etc.)
 * - Support for logging context (e.g. to include the module, function, etc.)
 * - Support for logging in different colors (useful when running in a terminal)
 */
import chalk from 'chalk';

/**
 * Abstract class for logging.
 */
abstract class LoggerImpl {

  /**
   * Logs a message with the INFO log level.
   * @param value The value to log.
   */
  abstract log(...value: any[]): void;
  /**
   * Logs a message with the ERROR log level.
   * @param value The value to log.
   */
  abstract error(...value: any[]): void;
  /**
   * Logs a message with the WARN log level.
   * @param value The value to log.
   */
  abstract warn(...value: any[]): void;
  /**
   * Logs a message with the DEBUG log level.
   * @param value The value to log.
   */
  abstract debug(...value: any[]): void;
}

/**
 * Logger class that extends LoggerImpl and logs messages to the console with different colors.
 */
export class Logger extends LoggerImpl {
  private identifier : string;
  /**
   * Constructs a new Logger with the given name.
   * @param name The name of the logger.
   */
  constructor(private readonly name: string) {
    super();
    this.identifier = name;
  }

  /**
   * Logs a message with the INFO log level.
   * @param value The value to log.
   */
  log(...value: any[]) {
    console.log(chalk.blue(`[${new Date().toISOString()}] [${this.name}] [INFO] :: `), chalk.white.bgBlue(`${this.identifier} ::`), ...value);
  }

  /**
   * Logs a message with the ERROR log level.
   * @param value The value to log.
   */
  error(...value: any[]) {
    console.error(chalk.red(`[${new Date().toISOString()}] [${this.name}] [ERROR] :: `), chalk.white.bgRed(`${this.identifier} ::`) ,...value);
  }

  /**
   * Logs a message with the WARN log level.
   * @param value The value to log.
   */
  warn(...value: any[]) {
    console.warn(chalk.yellow(`[${new Date().toISOString()}] [${this.name}] [WARN] :: `), chalk.white.bgYellow(`${this.identifier} ::`) , ...value);
  }

  /**
   * Logs a message with the DEBUG log level.
   * @param value The value to log.
   */
  debug(...value: any[]) {
    console.debug(chalk.gray(`[${new Date().toISOString()}] [${this.name}] [DEBUG] :: `), chalk.white.bgGray(`${this.identifier} ::`) , ...value);
  }

}

