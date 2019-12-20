export default class FormValidator {
  validations: [
    {
      field: string,
      method: any,
      args?: [{ min: number, max: number }],
      message: string
    }
  ];

  constructor(validations: any) {
    // validations is an array of rules specific to a form
    this.validations = validations;
  }
  validate(state) {
    const result = this.createResultObject();

    this.validations.forEach(rule => {
      const args = rule.args || [];
      const beValidate = state[rule.field] ? state[rule.field].toString() : "";
      if (!rule.method(beValidate, ...args)) {
        result.isValid = false;
        result[rule.field] = {
          isInvalid: true,
          message: rule.message
        };
      }
    });
    return result;
  }
  createResultObject() {
    const validation = {};

    this.validations.forEach(rule => {
      validation[rule.field] = { isInvalid: false, message: "" };
    });

    return { isValid: true, ...validation };
  }
}
