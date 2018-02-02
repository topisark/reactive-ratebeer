import { validateBeerField, beerIsValid } from '../../src/validations';

const requiredNonEmptyFields = ['name', 'brewery', 'description'];

const validBeer = {
  name: 'Beer',
  brewery: 'Brewery',
  description: 'Very nice'
};

describe('ValidateBeerField', () => {

  describe('Fields that are validated', () => {
    // validateBeerField returns an error string if not valid, otherwise null
    requiredNonEmptyFields.forEach(field => {
      test(`${field} cannot be null`, () => {
        expect(validateBeerField(field, null)).toBeDefined();
      });
      test(`${field} cannot be empty string`, () => {
        expect(validateBeerField(field, '')).toBeDefined();
      });
      test(`${field} returns and error string describing the validation error`, () => {
        const errorMessage = validateBeerField(field, null);
        expect(errorMessage).toBeDefined();
        expect(typeof errorMessage).toEqual('string');
        expect(errorMessage.toLowerCase().includes(field)).toEqual(true);
      });
      test(`${field} passes validation when it is correct length`, () => {
        expect(validateBeerField(field, 'Longenough!')).toBeUndefined();
      });
    });

  });

  describe('Fields that are not validated', () => {
    test('unvalidated field does not return an error', () => {
      expect(validateBeerField('UnvalidatedField', null)).toBeUndefined();
    });
  });

});

describe('BeerIsValid', () => {
  // beerIsValid returns true if beer is valid, otherwise false
  describe('Valid beer', () => {
    test('returns true', () => {
      expect(beerIsValid(validBeer)).toEqual(true);
    });
    test('can contain extra fields', () => {
      const beerWithExtras = { ...validBeer, foo: 'bar' };
      expect(beerIsValid(beerWithExtras)).toEqual(true);
    });
  });

  describe('Invalid beer', () => {
    Object.keys(validBeer).forEach(key => {
      test(`is invalid without ${key}`, () => {
        // Destructure so there are no side effects on original object
        const beerClone = { ...validBeer };
        delete beerClone[key];
        expect(beerIsValid(beerClone)).toEqual(false);
      });
      test(`is invalid with too short ${key}`, () => {
        const beerClone = { ...validBeer };
        beerClone[key] = '';
        expect(beerIsValid(beerClone)).toEqual(false);
      });
    });
  });

});