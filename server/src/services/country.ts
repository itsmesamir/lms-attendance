import { getFromStore } from '../asyncStore';
import TokenError from '../errors/TokenError';
import { Country, CountryCreateProps } from '../interfaces/country';
import CountryModel from '../models/country';
import { withNameSpace } from '../utils/logger';

const logger = withNameSpace('services/country');

export const createCountry = async (
  countryDataProps: CountryCreateProps
): Promise<Country> => {
  const { currentUser, country } = countryDataProps;

  const authUser = getFromStore<{ id: number }>('user');

  if (!countryDataProps.currentUser) {
    throw new TokenError('Token is invalid or expired');
  }

  logger.info(`Creating country with name: ${country.name}`);
  const createdCountry = await CountryModel.createCountry({
    ...country,
    created_by: authUser?.id
  });

  logger.info(`Country with name: ${country.name} created successfully`);
  return createdCountry;
};

export const fetchCountryById = async (id: number): Promise<Country> => {
  logger.info(`Fetching country with id: ${id}`);
  const country = await CountryModel.getCountryById(id);

  logger.info(`Country with id: ${id} fetched successfully`);
  return country;
};

export const fetchAllCountries = async (): Promise<Country[]> => {
  logger.info('Fetching all countries');
  const countries = await CountryModel.getAllCountries();

  logger.info('Countries fetched successfully');
  return countries;
};

export const updateCountry = async (
  id: number,
  countryData: Country
): Promise<Country> => {
  logger.info(`Updating country with id: ${id}`);
  const country = await CountryModel.updateCountry(id, countryData);

  logger.info(`Country with id: ${id} updated successfully`);
  return country;
};

export const deleteCountry = async (id: number): Promise<Country> => {
  logger.info(`Deleting country with id: ${id}`);
  const country = await CountryModel.deleteCountry(id);

  logger.info(`Country with id: ${id} deleted successfully`);
  return country;
};
