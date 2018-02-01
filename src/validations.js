import validate from 'validate.js';

const notEmpty = {
  presence: true,
  length: { minimum: 2 }
};

const beerConstraints = {
  name: notEmpty,
  brewery: notEmpty,
  description: notEmpty
};

export function validateBeerField(field, value) {
  const objectToValidate = { [field]: value };
  const constraints = { [field]: beerConstraints[field] };
  const validationError = validate(objectToValidate, constraints);
  return validationError && validationError[field].toString();
}

export function validateBeer(beer) {
  const validationErrors = validate(beer, beerConstraints);
  return !validationErrors;
}