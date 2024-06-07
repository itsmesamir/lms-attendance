import { Request, Response } from 'express';

import FiscalYearService from '../services/fiscalYear';

export const createFiscalYear = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const fiscalYear = req.body;
    const result = await FiscalYearService.createFiscalYear(fiscalYear);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllFiscalYears = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const fiscalYears = await FiscalYearService.getFiscalYears();
    res.status(200).json({ data: fiscalYears });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getFiscalYearByCountry = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const country = req.params.country;
    const fiscalYear = await FiscalYearService.getFiscalYearByCountry(country);
    res.status(200).json(fiscalYear);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getFiscalYearById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = parseInt(req.params.id, 10);
    const fiscalYear = await FiscalYearService.getFiscalYearById(id);
    res.status(200).json(fiscalYear);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateFiscalYear = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = parseInt(req.params.id, 10);
    const fiscalYear = req.body;
    const updatedFiscalYear = await FiscalYearService.updateFiscalYear(
      id,
      fiscalYear
    );
    res.status(200).json(updatedFiscalYear);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteFiscalYear = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = parseInt(req.params.id, 10);
    const result = await FiscalYearService.deleteFiscalYear(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
