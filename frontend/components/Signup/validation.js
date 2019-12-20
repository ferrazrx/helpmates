import validator from "validator";
import FormValidator from "../../lib/validator.class";

const rules = [
  {
    field: "fname",
    method: validator.isLength,
    args: [{ min: 1, max: 30 }],
    message: "First name cannot be empty."
  },
  {
    field: "lname",
    method: validator.isLength,
    args: [{ min: 1, max: 30 }],
    message: "Last name cannot be empty."
  },
  {
    field: "email",
    method: validator.isEmail,
    message: "Email must be a valid email."
  },
  {
    field: "password",
    method: validator.isLength,
    args: [{ min: 6, max: 30 }],
    message: "Password must contain between 6-30 caracters."
  },
  {
    field: "line1",
    method: validator.isLength,
    args: [{ min: 1, max: 80 }],
    message: "Address need to be provided."
  },
  {
    field: "line2",
    method: validator.isLength,
    args: [{ min: 0, max: 80 }],
    message: "Address cannot be more then 50 caracters."
  },
  {
    field: "city",
    method: validator.isLength,
    args: [{ min: 2, max: 30 }],
    message: "City is required."
  },
  {
    field: "province",
    method: validator.isLength,
    args: [{ min: 25, max: 25 }],
    message: "State is required."
  },
  {
    field: "zip",
    method: validator.isLength,
    args: [{ min: 6, max: 7 }],
    message: "Zip code is required."
  }
];

export default new FormValidator(rules);
