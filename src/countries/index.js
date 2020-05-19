import BRA from './countries/bra';
import USA from './countries/usa';

const countryObjectReferences = {
  bra: BRA,
  usa: USA,
};

export function getCountries() {
  return countryObjectReferences;
}

export function countryExists(country) {
  return countryObjectReferences[country];
}
