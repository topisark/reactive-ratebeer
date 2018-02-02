import validate from 'validate.js';

const atLeastThreeCharacters = {
  presence: true,
  length: { minimum: 3 }
};

const beerConstraints = {
  name: atLeastThreeCharacters,
  brewery: atLeastThreeCharacters,
  description: atLeastThreeCharacters
};

export function validateBeerField(field, value) {
  const objectToValidate = { [field]: value };
  const constraints = { [field]: beerConstraints[field] };
  const validationError = validate(objectToValidate, constraints);
  return validationError && validationError[field].toString();
}

export function beerIsValid(beer) {
  const validationErrors = validate(beer, beerConstraints);
  return !validationErrors;
}