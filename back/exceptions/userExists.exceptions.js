const BaseException = require('./base.exceptions');

class UserExistsException extends BaseException {
  constructor() {
    super('El usuario ingresado ya existe.');
    this.name = this.constructor.name;
    this.status = 400;
  }
}

module.exports = UserExistsException;
