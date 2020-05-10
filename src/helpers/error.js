/**
 * Error class for request authorization
 *
 * @class AuthorizationError
 * @extends {Error}
 */
class AuthorizationError extends Error {
  /**
   * Creates an instance of AuthorizationError.
   * @param {string} [ErrorMessage='Error: Authorization error']
   * @param {string} [UserMessage='You are not authorized to use this resource']
   * @memberof AuthorizationError
   */
  constructor(ErrorMessage = 'Error: Authorization error', UserMessage = 'You are not authorized to use this resource') {
    super(ErrorMessage);

    this.error = ErrorMessage;
    this.message = UserMessage;
  }
}

/**
 *Error class for database and related operations
 *
 * @class DatabaseError
 * @extends {Error}
 */
class DatabaseError extends Error {
  /**
   *Creates an instance of DatabaseError.
   * @param {string} [ErrorMessage='Error: Database error']
   * @param {string} [UserMessage='There was a problem with the database connection']
   * @memberof DatabaseError
   */
  constructor(ErrorMessage = 'Error: Database error', UserMessage = 'There was a problem with the database operation') {
    super(ErrorMessage);

    this.error = ErrorMessage;
    this.message = ErrorMessage.message || UserMessage;
    this.code = ErrorMessage.code || 'ER_DB_OPERATION';
  }
}

/**
 *Error class for logging
 *
 * @class LogError
 * @extends {Error}
 */
class LogError extends Error {
  /**
   *Creates an instance of LogError.
   * @param {*} ErrorMessage
   * @memberof LogError
   */
  constructor(ErrorMessage) {
    super(ErrorMessage);

    this.error = ErrorMessage;
    this.error.message = 'An error occured while logging';
    this.error.code = 'ER_LOG_OPERATION';
  }
}

class InputMalformedError extends Error {
  constructor() {
    super();

    this.name = 'Input Malformed Error';
    this.message = 'The input is malformed. Please validate input before requesting resource.';
    this.statusCode = 400;
  }
}

module.exports = {
  AuthorizationError,
  DatabaseError,
  LogError,
  InputMalformedError,
};
