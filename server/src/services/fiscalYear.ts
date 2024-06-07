import { withNameSpace } from '../utils/logger';
import FiscalYear from '../models/fiscalYear';
import { FiscalYear as FiscalYearType } from '../interfaces/fiscalYear';
import moment from 'moment';
import { fetchCountryByName } from './country';

const logger = withNameSpace('services/fiscalYear');

class FiscalYearService {
  static async createFiscalYear(fiscalYear: FiscalYearType) {
    logger.info(`Creating fiscal year for country: ${fiscalYear.country}`);
    try {
      const createdFiscalYear = await FiscalYear.createFiscalYear(fiscalYear);
      logger.info(
        `Fiscal year for country: ${fiscalYear.country} created successfully`
      );
      return createdFiscalYear;
    } catch (error) {
      logger.error(
        `Error creating fiscal year for country: ${fiscalYear.country}`
      );
      throw error;
    }
  }

  static async getFiscalYears() {
    logger.info('Fetching all fiscal years');
    try {
      const fiscalYears = await FiscalYear.getAll();
      logger.info('Fiscal years fetched successfully');
      return fiscalYears;
    } catch (error) {
      logger.error('Error fetching fiscal years');
      throw error;
    }
  }

  static async getFiscalYearByCountry(country: string) {
    logger.info(`Fetching fiscal year for country: ${country}`);
    try {
      const countryDetail = await fetchCountryByName(country);
      const fiscalYear = await FiscalYear.getByCountry(countryDetail.id);

      logger.info(`Fiscal year for country: ${country} fetched successfully`);
      return fiscalYear;
    } catch (error) {
      logger.error(`Error fetching fiscal year for country: ${country}`);
      throw error;
    }
  }

  static async getFiscalYearById(id: number) {
    logger.info(`Fetching fiscal year with id: ${id}`);
    try {
      const fiscalYear = await FiscalYear.getById(id);
      logger.info(`Fiscal year with id: ${id} fetched successfully`);
      return fiscalYear;
    } catch (error) {
      logger.error(`Error fetching fiscal year with id: ${id}`);
      throw error;
    }
  }

  static async updateFiscalYear(id: number, fiscalYear: any) {
    logger.info(`Updating fiscal year with id: ${id}`);
    try {
      const updatedFiscalYear = await FiscalYear.updateFiscalYear(
        id,
        fiscalYear
      );
      logger.info(`Fiscal year with id: ${id} updated successfully`);
      return updatedFiscalYear;
    } catch (error) {
      logger.error(`Error updating fiscal year with id: ${id}`);
      throw error;
    }
  }

  static async deleteFiscalYear(id: number) {
    logger.info(`Deleting fiscal year with id: ${id}`);
    try {
      const deletedFiscalYear = await FiscalYear.deleteFiscalYear(id);
      logger.info(`Fiscal year with id: ${id} deleted successfully`);
      return deletedFiscalYear;
    } catch (error) {
      logger.error(`Error deleting fiscal year with id: ${id}`);
      throw error;
    }
  }
}

export default FiscalYearService;
