import { Country } from '../interfaces/country';
import CountryModel from '../models/country';

export const createCountry = async (countryData: Country): Promise<Country> => {
  const country = await CountryModel.createCountry(countryData);
  return country;
};

export const fetchCountryById = async (id: number): Promise<Country> => {
  const country = await CountryModel.getCountryById(id);
  return country;
};

export const fetchAllCountries = async (): Promise<Country[]> => {
  const countries = await CountryModel.getAllCountries();
  return countries;
};

export const updateCountry = async (
  id: number,
  countryData: Country
): Promise<Country> => {
  const country = await CountryModel.updateCountry(id, countryData);
  return country;
};

export const deleteCountry = async (id: number): Promise<Country> => {
  const country = await CountryModel.deleteCountry(id);
  return country;
};
