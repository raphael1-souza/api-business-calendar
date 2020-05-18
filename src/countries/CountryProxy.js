import listCountries from './countries';

export function getCountries() {
  return listCountries;
}

export function countryExists(country) {
  return listCountries[country];
}
