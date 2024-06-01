import { Request, Response, NextFunction } from 'express';

import * as countryService from '../services/country';

// controller for create, update, delete, fetch country

export const createCountry = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const country = await countryService.createCountry(req.body);
    res.status(201).json(country);
  } catch (error) {
    next(error);
  }
};

export const fetchCountryById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const country = await countryService.fetchCountryById(+req.params.id);
    res.json(country);
  } catch (error) {
    next(error);
  }
};

export const fetchAllCountries = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const countries = await countryService.fetchAllCountries();
    res.json(countries);
  } catch (error) {
    next(error);
  }
};

export const updateCountry = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const country = await countryService.updateCountry(
      +req.params.id,
      req.body
    );
    res.json(country);
  } catch (error) {
    next(error);
  }
};

export const deleteCountry = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    await countryService.deleteCountry(+req.params.id);
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
};
