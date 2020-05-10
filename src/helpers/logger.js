const fs = require('fs');
const path = require('path');
const { LogError } = require('./error');

const logPath = process.env.LOG_PATH;

class Logger {
  constructor(req = null) {
    const date = new Date();
    const dateString = `${date.getFullYear()}_${(`0${date.getMonth() + 1}`).slice(-2)}_${(`0${date.getDate()}`).slice(-2)}`;
    const dir = path.join(logPath, `${dateString}_log.log`);

    this.date = date;
    this.dir = dir;
    this.dateString = dateString;
    this.source = req.url;
    this.ip = req.ip;
  }

  /**
   * Info Log
   * @description Logger function to log only info level logs
   * @param {string} [message=null] - Log message
   * @memberof Logger
   */
  async info(message = null) {
    try {
      const logString = `[INFO][${new Date().toLocaleString('en', { timeZone: 'asia/kolkata' })}][${this.ip || 'NO IP'}][${this.source}] ${message}\n`;
      await fs.appendFileSync(this.dir, logString);
    } catch (error) {
      console.log(new LogError(error));
      process.exit(0);
    }
  }

  /**
   * Warning Log
   *
   * @param {string} [message=null] - Warning log message
   * @param {any} [data=null] - Optional data to append with warning log message
   * @memberof Logger
   */
  async warn(message = null, data = null) {
    try {
      const logString = `[WARN][${new Date().toLocaleString('en', { timeZone: 'asia/kolkata' })}][${this.ip || 'NO IP'}][${this.source}] ${message}${data ? ` : ${JSON.stringify(data)}` : ''}\n`;
      await fs.appendFileSync(this.dir, logString);
    } catch (error) {
      console.log(new LogError(error));
      process.exit(0);
    }
  }

  /**
   * Error log
   *
   * @param {object} [error=null] - Error object
   * @param {string} [message='Error caught'] - Error message to be logged
   * @memberof Logger
   */
  async error(error = null, message = 'Error caught') {
    try {
      const logString = `[ERROR][${new Date().toLocaleString('en', { timeZone: 'asia/kolkata' })}][${this.ip || 'NO IP'}][${this.source}] ${message}${error ? `: ${JSON.stringify(error.stack)}` : ''}\n`;
      await fs.appendFileSync(this.dir, logString);
    } catch (err) {
      console.log(new LogError(err));
      process.exit(0);
    }
  }
}

module.exports = Logger;
