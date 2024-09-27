class Validator {
  static validate(value, validatorSchemaValues) {
    const { type, errors } = validatorSchemaValues;

    if (errors.hasOwnProperty("required") && !value) {
      return errors.required;
    }

    if (type === "string") {
      if (!/^[a-zA-Z]+$/.test(value)) {
        return errors.string;
      }
      if (errors.hasOwnProperty("min") && value.length < 3) {
        return errors.min;
      }
    }

    if (type === "email") {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        return errors.email;
      }
    }

    if (type === "password") {
      if (
        !/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value)
      ) {
        return errors.password;
      }
    }
  }
}

export default Validator;
